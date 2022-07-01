import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, useEffect, useState } from "react";

const PageLayout = ({
  children,
  ...props
}: {
  children: ReactElement;
  props: AppProps;
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <div {...props}> {children}</div>;
};

export default PageLayout;
