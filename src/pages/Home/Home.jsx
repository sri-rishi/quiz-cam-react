import { Footer, Navbar } from "../../component/index"
import { CategoriesSection } from "./components/categorySection/CategorySection"
import { HeroSection } from "./components/HeroSection"
import { PopularQuizzes } from "./components/popularQuizzesSection/PopularSection"

export const Home = () => {
    return (
        <div>
            <Navbar />
            <main class="main-div flex-column justify-center">
            <HeroSection />
            <CategoriesSection />
            <PopularQuizzes />
        </main>
        <Footer />
        </div>
    )
}