import { useEffect, useState } from "react";
import Category from "./Category";


const CategoryList = () => {
    const [category, setCategory] = useState([])

    useEffect(()=> {
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

    return (
        <div>
            <div className="space-y-3">
                <h1 className="text-4xl text-center font-medium">Job Category List</h1>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4">
                {
                    category.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;