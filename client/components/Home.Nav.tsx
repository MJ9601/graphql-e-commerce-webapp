import { useRouter } from "next/router";
import React from "react";
import {
  Product,
  useAllCategoriesQuery,
  useAllProductsQuery,
  useCategoryLazyQuery,
  useMeQuery,
} from "../graphql/generated";
import { useAppDispatch } from "../utils/cms/app/hooks";
import { setProducts } from "../utils/cms/features/productSlic";

const HomeNav = () => {
  const { data: allCats } = useAllCategoriesQuery();
  const categories = allCats?.allCategories;

  const { data: allProducts } = useAllProductsQuery();
  const { data: User } = useMeQuery();

  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className="pt-6">
      <h2
        className="catButton text-black  pl-2 mb-3"
        onClick={() =>
          dispatch(setProducts(allProducts?.allProducts as Product[]))
        }
      >
        Products
      </h2>
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
      {User && !User.me.Admin && (
        <h3
          className="catButton pl-2 mt-3 text-black"
          onClick={() => router.push("/dashboard")}
        >
          Dashboard
        </h3>
      )}
    </div>
  );
};

export default HomeNav;
