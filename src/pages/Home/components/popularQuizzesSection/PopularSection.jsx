import { Button } from "../../../../component/index"
import { popularQuizzesData } from "./popularQuizzesData"

export const PopularQuizzes = () => {
    return (
        <section className="flex-column align-center justify-center gap-2">
            <h3 className="md-heading">Popular Quizess</h3>
            <div className="flex-row justify-evenly align-center gap-3">
                {
                    popularQuizzesData.map(({id, quizName, quizCoverImage, categoryName, lavel}) => (
                        <div key={id} className="grid quiz-div">
                            <div className="pQuiz-img-cont">
                                <img 
                                    className="img-responsive quiz-div-img" 
                                    src={quizCoverImage}
                                    alt={`${quizName} quiz`} 
                                />
                            </div>
                            <div className="quiz-desc flex-row font-weight-6">
                                <div>
                                    <p className="xsm-heading">{quizName}</p>
                                    <p className="flex-row gap-1">
                                        <span className="text-badge badge-pills quiz-badge">{categoryName}</span>
                                        <span className="text-badge badge-pills quiz-badge">Level {lavel}</span>
                                    </p>
                                </div>
                                <a href="#">
                                    <Button className="btn btn-play-quiz" text="Play now"/>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}