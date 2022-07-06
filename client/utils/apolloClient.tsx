import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { IncomingHttpHeaders } from "http";
import { NextPageContext } from "next";
import nextWithApollo from "next-with-apollo";
import { useRouter } from "next/router";

export const _ApolloClient = ({
  initialState,
  headers,
}: {
  headers: IncomingHttpHeaders | undefined;
  initialState: any;
}) =>
  new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT as string}`,
      credentials: "include",
    }),
    headers: {
      ...(headers as Record<string, string>),
    },
    cache: new InMemoryCache().restore(initialState || {}),
  });

const withApollo = nextWithApollo(
  ({ ctx, initialState, headers }) => {
    return _ApolloClient({ initialState, headers });
  },
  {
    render: ({ Page, props }) => {
      const router = useRouter();

      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      );
    },
  }
);

export default withApollo;
