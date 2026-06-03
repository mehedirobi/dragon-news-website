import React, {use} from 'react';
import { NavLink } from 'react-router';
const categoriesPromise = fetch('/categories.json').then(res => res.json());
const Categories = () => {
    console.log(categoriesPromise);
    const categories = use(categoriesPromise);
    return (
        <div>
            <p className="font-bold">All Categories: {categories.length}</p>
            <div className="grid grid-cols-1 gap-2 mt-5">
                {categories.map(category => <NavLink className={"btn bg-base-100 hover:bg-base-300 text-accent font-semibold"} key={category.id} to={`/category/${category.id}`}>
                    {category.name}
                </NavLink>)}
            </div>
        </div>
    );
};

export default Categories;