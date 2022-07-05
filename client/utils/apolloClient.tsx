import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import nextWithApollo from "next-with-apollo";
import { useRouter } from "next/router";

const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      link: new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT as string}`,
      }),
      headers: {
        ...(headers as Record<string, string>),
      },
      cache: new InMemoryCache().restore(initialState || {}),
    });
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
