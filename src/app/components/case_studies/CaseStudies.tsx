"use client"
import { Shell } from "@/components/shell/Shell"
import { CaseStudy } from "@/utils/case_studies"
import { Carousel } from "@mantine/carousel";
import Image from "next/image"
import PropTypes from "prop-types";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import styles from "./CaseStudies.module.css";
import { rem } from "@mantine/core";

export interface CaseStudiesProps {
    data: CaseStudy[] | null;
}

export const CaseStudies = ({ data } : CaseStudiesProps) => {
    const autoPlayer = useRef(Autoplay({ delay: 3500 }));
    return(
        <Shell heading="Case studies">
            <div style={{ display: "flex", gap: "10px" }}>
            {
                data &&
                <Carousel
                    height="400px"
                    slideGap={{ base: rem(2), sm: 'xl' }}
                    loop={true}
                    align="start"
                    draggable={false}
                    withControls={false}
                    slideSize="30%"
                    // maw={360}
                    // plugins={[autoPlayer.current]}
                    onMouseEnter={autoPlayer.current.stop}
                    classNames={styles}
                    onMouseLeave={autoPlayer.current.reset}
                >
                    {
                        data.map((item, index) => (
                            <Carousel.Slide key={index + item.title}>
                                <div
                                    style={{
                                        backgroundImage: `url(${item.imageUrl})`
                                    }}
                                    className={`card is-flex is-align-items-end ${styles.caseStudy__cardContainer}`}
                                >
                                    <div className="card-content">
                                        <p className={`title whiteText`}>{item.title}</p>
                                        <p className={`content whiteText`}>{item.description}</p>
                                    </div>
                                    {/* <Image loading="lazy" className={`px-2 imageStyles ${styles.caseStudy__image}`} src={item.imageUrl} width={400} height={400} alt={item.title} /> */}
                                </div>
                            </Carousel.Slide>
                        ))
                    }
                </Carousel>
            }
            </div>
        </Shell>
    )
}

CaseStudies.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })).isRequired
}