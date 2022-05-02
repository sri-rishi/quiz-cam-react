import { accCategoryCover, awardsCategoryCover, cameraCategoryImg, photoCategoryCover } from "../../../../assets";

const categoryData = [
    {
        id: 1,
        categoryName: "Photography",
        coverImageUrl: photoCategoryCover,
        noOfQuiz: 2
    },
    {
        id: 2,
        categoryName: "Camera",
        coverImageUrl: cameraCategoryImg,
        noOfQuiz: 2
    },
    {
        id: 3,
        categoryName: "Accessories",
        coverImageUrl: accCategoryCover,
        noOfQuiz: 2
    },
    {
        id: 4,
        categoryName: "Awards",
        coverImageUrl: awardsCategoryCover,
        noOfQuiz: 2
    },
]

export {categoryData};