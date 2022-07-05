import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import nextWithApollo from "next-with-apollo";
import { useRouter } from "next/router";

const withApollo = nextWithApollo(
  ({ ctx, initialState, headers }) => {
    console.log(ctx?.req?.headers.cookie);
    return new ApolloClient({
      link: new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT as string}`,
        credentials: "include",
      }),
      headers: {
        ...(headers as Record<string, string>),
        cookie: ctx?.req?.headers.cookie as string,
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
