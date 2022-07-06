import React, { useEffect } from "react";
import {
  Category,
  Product,
  useAllCategoriesLazyQuery,
  useAllProductsLazyQuery,
  useDelAllCatsMutation,
  useDeleteAllProductsMutation,
  useMeQuery,
} from "../graphql/generated";
import { useAppDispatch } from "../utils/cms/app/hooks";
import {
  PageDis,
  setMainDisplay,
  setOpenAddCatModel,
  setOpenAddProductModel,
} from "../utils/cms/features/adminNavSlic";
import { setCategories, setProducts } from "../utils/cms/features/productSlic";

const DashboardNav = () => {
  const { data, networkStatus } = useMeQuery({
    notifyOnNetworkStatusChange: true,
  });
  const Admin = data?.me.Admin;

  const [getAllCats, { data: allCats }] = useAllCategoriesLazyQuery();
  const [getAllProducts, { data: allProducts }] = useAllProductsLazyQuery();

  const [delAllCats, { data: delCats }] = useDelAllCatsMutation();
  const [delAllProducts] = useDeleteAllProductsMutation();

  // console.log({ allCats });

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setProducts(allProducts?.allProducts as Product[]));
    dispatch(setCategories(allCats?.allCategories as Category[]));
  }, [allCats, allProducts]);

  return (
    <div className="py-2 ">
      <h2 className="text-xl text-black px-3 font-bold ">{data?.me.email}</h2>
      {!Admin ? (
        <div className="space-y-1 mt-5">
          <h3 className="catButton pt-0">Shopping Card</h3>
          <h3 className="catButton pt-0 -mt-2">Empty Shopping Card</h3>
          <h3 className="catButton pt-0 -mt-2">Bought Products</h3>
        </div>
      ) : (
        <>
          <div className="space-y-1 mt-5">
            <h3
              className="catButton pt-0"
              onClick={() => {
                dispatch(setMainDisplay(PageDis.product));
                getAllProducts();
              }}
            >
              {" "}
              Products
            </h3>
            <h3
              className="catButton pt-0 -mt-3"
              onClick={() => {
                dispatch(setMainDisplay(PageDis.category));
                getAllCats();
              }}
            >
              Categories
            </h3>
          </div>
          <div className="space-y-1 mt-5 px-3">
            <h3 className="text-xl text-black pt-12 font-bold ">Settings</h3>
            <h3
              className="catButton pt-0"
              onClick={() => dispatch(setOpenAddProductModel())}
            >
              {" "}
              Add Product
            </h3>
            <h3
              className="catButton pt-0"
              onClick={() => dispatch(setOpenAddCatModel())}
            >
              {" "}
              Add Category
            </h3>
            <h3
              className="catButton pt-0"
              onClick={() =>
                delAllProducts({
                  update: (cache, { data }) => {
                    cache.modify({
                      fields: {
                        allProducts(existingProducts = []) {
                          return [];
                        },
                      },
                    });
                  },
                })
              }
            >
              Delete All Products
            </h3>
            <h3
              className="catButton pt-0 -mt-2"
              onClick={() =>
                delAllCats({
                  update: (cache, { data }) => {
                    cache.modify({
                      fields: {
                        allCategories(existingCats = []) {
                          return [];
                        },
                      },
                    });
                  },
                })
              }
            >
              Delete All Categories
            </h3>
          </div>
        </>
      )}
      <div className="px-3 pt-2">
        <h3 className="text-xl text-black pt-12 font-bold ">
          Account Settings
        </h3>
        <h3
          className="catButton pt-2"
          onClick={() => dispatch(setMainDisplay(PageDis.passChange))}
        >
          Change Password
        </h3>
      </div>
    </div>
  );
};

export default DashboardNav;
