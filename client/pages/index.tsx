import { getDataFromTree } from "@apollo/client/react/ssr";
import { ReactElement, useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";
import ProductCard from "../components/Product.Card";
import { Product, useAllProductsQuery } from "../graphql/generated";
import withApollo from "../utils/apolloClient";
import { useAppDispatch, useAppSelector } from "../utils/cms/app/hooks";
import { selectProducts, setProducts } from "../utils/cms/features/productSlic";

const Home = () => {
  const { data, loading, error, networkStatus } = useAllProductsQuery({
    notifyOnNetworkStatusChange: true,
  });

  console.log({ data, networkStatus });
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProducts(data?.allProducts as Product[]));
  }, []);
  return (
    <PageLayout>
      <div className="text-red-900 font-bold w-fit py-5">
        <div className="flex justify-center flex-wrap items-start gap-3">
          {products?.map((product) => (
            <ProductCard
              product={product as Product}
              AdminAccess={false}
              key={product._id}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
export default withApollo(Home, { getDataFromTree });
