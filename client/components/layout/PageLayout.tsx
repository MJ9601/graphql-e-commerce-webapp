import { AppProps } from "next/app";
import { ReactElement, useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const PageLayout = ({
  children,
  ...props
}: {
  children: ReactElement;
  props?: AppProps;
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="relative">
      <Header />
      <div className="flex items-start justify-between  min-h-[100vh] container mx-auto">
        <Navbar />
        <div {...props}>{children}</div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
