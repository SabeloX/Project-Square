import { Carousel } from "@/components/carousel/Carousel"
import { Shell } from "@/components/shell/Shell"

export const CaseStudies = () => {
    return(
        <Shell heading="Case studies">
            <Carousel>
                <div className="item-1">A</div>
                <div className="item-2">B</div>
                <div className="item-3">C</div>
            </Carousel>
        </Shell>
    )
}