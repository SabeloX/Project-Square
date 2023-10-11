"use client"
import { Shell } from "@/components/shell/Shell"
import { CaseStudy } from "@/utils/case_studies"
import PropTypes from "prop-types";
import styles from "./CaseStudies.module.css";
import { useEffect } from "react";
import { Carousel } from "@/components/carousel/Carousel";

export interface CaseStudiesProps {
    data: CaseStudy[] | null;
}

export const CaseStudies = ({ data }: CaseStudiesProps) => {
    useEffect(() => {
    }, []);
    return(
        <Shell heading="Case studies">
            {
                data &&
                    <div style={{ width: "100%"}} className="carousel" id="carousel-container">
                        <Carousel data={data}/>
                    </div>
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