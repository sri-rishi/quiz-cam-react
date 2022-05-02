import { coverImage } from "../../../assets"
import { Button } from "../../../component/index"

export const HeroSection = () => {
    return (
        <section className="cover-div flex-row align-center">
            <div className="cover-text-box flex-column justify-center align-center">
                <p className="md-heading font-weight-5 main-text">Feeling bored?</p>
                <p className="sm-heading sub-text-box">Take a quiz and learn about cameras and photography with fun</p>
                <a href="#quiz-categories">
                    <Button className="btn btn-primary mt-1" text="Explore"/>
                </a>
            </div>
            <div className="img-cont">
                <img className="img-responsive" src={coverImage} alt="Cover Image" loading="lazy" />
            </div>
        </section>
    )
}