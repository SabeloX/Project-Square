"use client";
import bulmaCarousel from "bulma-carousel/dist/js/bulma-carousel.min.js"
import { ReactNode, useEffect } from "react";

export interface CarouselProps {
    children: ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
    useEffect(() => {
        const options = {
            slidesToScroll: 1,
            slidesToShow: 3,
            loop: true,
            duration: 500,
            transition: 'ease',
            autoplaySpeed: 2000
        }
        bulmaCarousel.attach('.carousel', options)
    }, []);

    return(
        <div className="carousel">
            {children}
        </div>
    )
}