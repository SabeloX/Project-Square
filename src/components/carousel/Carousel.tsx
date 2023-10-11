import { CaseStudy } from "@/utils/case_studies";
import { ReactNode } from "react"
import styles from "./Carousel.module.css";

export interface CarouselProps {
    data: CaseStudy[];
}

export const Carousel = ({ data } : CarouselProps) => {
    return (
        <div className={`columns ${styles.carousel__container}`}>
            {
                data.map((item, index) => (
                    <div
                        key={index + item.title}
                        className={`column mb-3 card is-flex is-align-items-end ${styles.carousel__cardContainer}`}
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
        </div>
    )
}