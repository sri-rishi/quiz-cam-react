import { Navbar, QuestionTemplate } from "../../component/index"

export const QuestionPage = () => {
    return (
        <div className="ques-page-background">
            <Navbar />
            <main className="flex-column justify-center align-center">
                <QuestionTemplate />
            </main>
        </div>
    )
}