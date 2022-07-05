import React from "react";
import {
  Product,
  useAllCategoriesQuery,
  useCategoryLazyQuery,
} from "../graphql/generated";
import { useAppDispatch } from "../utils/cms/app/hooks";
import { setProducts } from "../utils/cms/features/productSlic";

const HomeNav = () => {
  const { data: allCats } = useAllCategoriesQuery();
  const categories = allCats?.allCategories;
  // const [getCat, { data: cat, error, loading }] = useCategoryLazyQuery();

  // const handelClick = () => {};

  const dispatch = useAppDispatch();

  return (
    <div className="pt-6">
      <h2 className="text-lg font-semibold px-2">Categories: </h2>
      <div className="pt-3">
        {categories?.map((category) => (
          <h5
            className="catButton"
            key={category._id}
            onClick={() =>
              dispatch(setProducts(category.products as Product[]))
            }
          >
            {category.name}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default HomeNav;
