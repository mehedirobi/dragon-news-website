import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) =>
  res.json()
);

const Categories = () => {
  const categories = use(categoriesPromise);

  return (
    <aside>
      <h2 className="mb-5 text-xl font-bold">
        All Categories
        <span className="ml-2 text-sm font-medium text-gray-500">
          ({categories.length})
        </span>
      </h2>

      <nav className="flex flex-col gap-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              `
              px-4 py-3 rounded-lg
              font-medium
              transition-all duration-200
              text-left
              break-words
              ${
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "bg-base-100 hover:bg-base-200 text-gray-700"
              }
            `
            }
          >
            {category.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Categories;