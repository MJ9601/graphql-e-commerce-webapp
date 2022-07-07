import Categorymodal from "../components/Category.modal";
import PageLayout from "../components/layout/PageLayout";
import ProductCard from "../components/Product.Card";
import Productmodal from "../components/Product.modal";
import UpdatePasswordfrom from "../components/UpdatePassword.from";
import withApollo, { _ApolloClient } from "../utils/apolloClient";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { useAppSelector } from "../utils/cms/app/hooks";
import {
  selectCategories,
  selectProducts,
} from "../utils/cms/features/productSlic";
import {
  PageDis,
  selectAddProduct,
  selectAdminPageDis,
  selectUpdateProduct,
} from "../utils/cms/features/adminNavSlic";
import CategoryCard from "../components/Category.Card";
import { useMeQuery } from "../graphql/generated";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

const Admin = () => {
  const categories = useAppSelector(selectCategories);
  const products = useAppSelector(selectProducts);
  const mainPageDis = useAppSelector(selectAdminPageDis);
  const openProductModel = useAppSelector(selectUpdateProduct);
  const _openProductModel = useAppSelector(selectAddProduct);
  // const addCategoryModel = useAppSelector(selectAddCat);

  const router = useRouter();
  const { data: me } = useMeQuery();

  // console.log({ data, networkStatus, loading });
  useLayoutEffect(() => {
    if (!me || !me.me.Admin) router.push("/auth/admin");
  }, [me]);

  return (
    <PageLayout>
      <div className="py-5 px-5">
        <>
          {mainPageDis == PageDis.product && (
            <div className="py-2">
              <h2 className="text-black text-lg font-bold text-start">
                Products:
              </h2>
              <div className="gap-3 py-3 flex flex-wrap justify-center items-start">
                {products?.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    AdminAccess={true}
                  />
                ))}
              </div>
            </div>
          )}
        </>
        <>
          {mainPageDis == PageDis.category && (
            <div className="py-2">
              <h2 className="text-black text-lg font-bold text-start">
                Categories:
              </h2>
              <div className="gap-3 py-3 flex flex-wrap justify-center items-start">
                {categories?.map((category) => (
                  <CategoryCard
                    key={category._id}
                    category={category}
                    AdminAccess={true}
                  />
                ))}
              </div>
            </div>
          )}
        </>
        <>
          {mainPageDis == PageDis.passChange && (
            <UpdatePasswordfrom Admin={true} />
          )}
        </>
        {(_openProductModel || openProductModel) && <Productmodal />}
        <Categorymodal />
      </div>
    </PageLayout>
  );
};

export default withApollo(Admin, { getDataFromTree });
