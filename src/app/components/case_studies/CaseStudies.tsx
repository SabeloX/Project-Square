"use client"
import { Shell } from "@/components/shell/Shell"
import { CaseStudy } from "@/utils/case_studies"
import PropTypes from "prop-types";
import styles from "./CaseStudies.module.css";
import { useEffect, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { MantineProvider } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
// import { Carousel } from "@/components/carousel/Carousel";

export interface CaseStudiesProps {
    data: CaseStudy[] | null;
}

export const CaseStudies = ({ data }: CaseStudiesProps) => {
    const autoplay = useRef<any>(Autoplay({ delay: 2000 }));
    return(
        <Shell heading="Case studies">
            <MantineProvider>
            {
                data &&
                    <div style={{ width: "100%"}} className="carousel" id="carousel-container">
                        {/* <Carousel data={data}/> */}
                        <Carousel
                            height={200}
                            slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                            slideGap={{ base: 0, sm: 'md' }}
                            loop
                            maw={360}
                            align="start"
                            // slidesToScroll={3}
                            plugins={[autoplay.current]}
                            onMouseEnter={autoplay.current.stop}
                            onMouseLeave={autoplay.current.reset}
                        >
                            {
                                data.map((item, index) => (
                                    <Carousel.Slide
                                        key={index}
                                        className="column"
                                    >
                                        <div
                                            className={`column mb-3 card is-flex is-align-items-end ${styles.carousel__cardContainer}`}
                                            style={{
                                                backgroundImage: `url(${item.imageUrl})`
                                            }}
                                        >
                                            <div className="card-content">
                                                <p className={`title whiteText`}>{item.title}</p>
                                                <p className={`content whiteText`}>{item.description}</p>
                                            </div>
                                        </div>
                                    </Carousel.Slide>
                                ))
                            }
                        </Carousel>
                    </div>
                }
                </MantineProvider>
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