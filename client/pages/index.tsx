import type { NextPage } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import PageLayout from "../components/layout/PageLayout";

const Home = () => {
  return <div className="text-red-900 font-bold">Home</div>;
};
Home.getLayout = (page: ReactElement) => <PageLayout>{page}</PageLayout>;
export default Home;
