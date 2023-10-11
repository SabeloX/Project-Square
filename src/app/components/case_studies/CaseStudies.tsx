"use client"
import { Shell } from "@/components/shell/Shell"
import { CaseStudy } from "@/utils/case_studies"
import styles from "./CaseStudies.module.css";
import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { MantineProvider } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";

/**
 * @property {CaseStudy[] | null} data - An array of case study data or null if no data is available.
 */
export interface CaseStudiesProps {
    data: CaseStudy[] | null;
}

/**
 * Renders a carousel of case studies.
 *
 * @param {CaseStudiesProps} props - The component's props.
 * @returns {JSX.Element} The rendered component.
 */
export const CaseStudies = ({ data }: CaseStudiesProps) => {
    const autoplay = useRef<any>(Autoplay({ delay: 2500 }));
    return(
        <Shell heading="Case studies">
            <MantineProvider>
            {
                data &&
                    <div style={{ width: "100%"}} className="carousel" id="carousel-container">
                        <Carousel
                            slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                            slideGap={{ base: 0, sm: 'md' }}
                            loop
                            draggable={false}
                            withControls={false}
                            maw={360}
                            align="start"
                            onMouseEnter={autoplay.current.stop}
                            onMouseLeave={autoplay.current.reset}
                            plugins={[autoplay.current]}
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