import { Link } from "react-router-dom"
import { Button, Navbar } from "../../component/index"

export const RulesPage = () => {
    return (
        <div>
            <Navbar />
            <main className="rule-main flex-column justify-center align-center">
                <div className="rule-box card-shadow">
                    <h3 className="xmd-heading center-align mb-1">Wildlife Photography</h3>
                    <h4 className="sm-heading">Instructions</h4>
                    <p className="xsm-heading">Read instructions carefully before playing quiz</p>
                    <ul className="rule-list flex-column">
                        <li>Each right answer scores 10 points</li>
                        <li>Each wrong answer scores -10 points</li>
                        <li>For each question you will get 1 minute to answer</li>
                        <li>Each multiple choice question has one only one correct answer</li>
                        <li>To win quiz you must score more than 65% </li>
                    </ul>
                    <div className="center-align mt-1">
                        <Link to="/question">
                            <Button className="btn btn-play-quiz" text="Start Quiz"/>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}