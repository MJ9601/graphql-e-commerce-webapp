import type { NextPage } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import PageLayout from "../components/layout/PageLayout";
import ProductCard from "../components/Product.Card";

const Home = () => {
  return (
    <div className="text-red-900 font-bold w-fit py-5">
      <div className="flex justify-center flex-wrap items-start gap-3">
        <ProductCard product={""} AdminAccess={false} />
        <ProductCard product={""} AdminAccess={false} />
      </div>
    </div>
  );
};
Home.getLayout = (page: ReactElement) => <PageLayout>{page}</PageLayout>;
export default Home;
