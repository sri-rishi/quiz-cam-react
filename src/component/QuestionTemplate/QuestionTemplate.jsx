import { Button } from "../index"

export const QuestionTemplate = () => {
    return (
        <div className="flex-column gap-2 ques-box font-weight-5">
            <div className="ques-top flex-row align-center">
                <p>Question: 1/5</p>
                <p>Score: -10</p>
            </div>
            <p className="xsm-heading">What is the favorite camera choice among professional bird photographers?</p>
            <div className="flex-column gap-1">
                <label htmlFor="ans-canon" className="ans bg-transparent right-ans card-shadow">
                    <input type="radio" className="display-none" id="ans-canon" name="ans-canon"/>
                    Canon
                </label>
                <label htmlFor="ans-nikon" className="ans bg-transparent">
                    <input type="radio" className="display-none" id="ans-nikon" name="ans-nikon"/>
                    Nikon
                </label>
                <label htmlFor="ans-sony" className="ans bg-transparent wrong-ans card-shadow" >
                    <input type="radio" className="display-none" id="ans-sony" name="ans-sony"/>
                    Sony
                </label>
                <label htmlFor="ans-none" className="ans bg-transparent">
                    <input type="radio" className="display-none" id="ans-none" name="ans-none"/>None the above
                </label>
            </div>
            <div className="flex-row align-center justify-between">
                <a href="#">
                    <Button className="btn btn-cta-ques-box" text="Previous"/>
                </a>
                <a href="#">
                    <Button className="btn btn-cta-ques-box" text="Next"/>
                </a>
            </div>
        </div>
    )
}