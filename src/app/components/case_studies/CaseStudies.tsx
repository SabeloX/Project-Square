"use client"
import { Shell } from "@/components/shell/Shell"
import { CaseStudy } from "@/utils/case_studies"
import PropTypes from "prop-types";
import styles from "./CaseStudies.module.css";
import AliceCarousel from "react-alice-carousel";

export interface CaseStudiesProps {
    data: CaseStudy[] | null;
}

export const CaseStudies = ({ data }: CaseStudiesProps) => {
    return(
        <Shell heading="Case studies" className={`${styles.caseStudy__containers}`}>
            {
                data &&
                <AliceCarousel
                    items={
                        data.map((item, index) => (
                            <div
                                key={index + item.title}
                                className={`card is-flex is-align-items-end ${styles.caseStudy__cardContainer}`}
                                style={{
                                    backgroundImage: `url(${item.imageUrl})`
                                }}
                            >
                                <div className="card-content">
                                    <p className={`title whiteText`}>{item.title}</p>
                                    <p className={`content whiteText`}>{item.description}</p>
                                </div>
                                {/* <Image loading="lazy" className={`px-2 imageStyles ${styles.caseStudy__image}`} src={item.imageUrl} width={400} height={400} alt={item.title} /> */}
                            </div>
                        ))
                    }
                    infinite
                    autoPlay
                    autoPlayInterval={2500}
                    animationType="fadeout"
                    responsive={{
                        0: {
                            items: 1,
                        },
                        1024: {
                            items: 3,
                            itemsFit: 'contain',
                        }
                      }}
                />
            }
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