import { categoryData } from "./categorySectionData"

export const CategoriesSection = () => {
    return (
        <section id="quiz-categories" className="flex-column align-center justify-center gap-2">
            <h3 className="md-heading">Categories</h3>
            <div className="category-box flex-row justify-evenly align-center gap-2">
                {
                    categoryData.map(({id, categoryName, coverImageUrl, noOfQuiz}) => (
                        <a href="#" key={id}>
                            <div className="category-items overlay-box flex-column justify-center align-center">
                                <img 
                                    className="img-responsive category-div-img" 
                                    src={coverImageUrl} 
                                    alt={`${categoryName} Category Quizzes`}  
                                    loading="lazy" 
                                />
                                <div className="overlay-cont flex-column  align-center">
                                    <p className="sm-heading">{categoryName}</p>
                                    <p className="text-sm-size">{noOfQuiz} Quizess</p>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </section>
    )
}