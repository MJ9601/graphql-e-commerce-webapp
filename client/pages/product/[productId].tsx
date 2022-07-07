import PageLayout from "../../components/layout/PageLayout";
import ReviewCard from "../../components/Review.Card";
import ReviewFrom from "../../components/Review.From";
import withApollo from "../../utils/apolloClient";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { useRouter } from "next/router";
import {
  Review,
  useAddProductToShoppingListMutation,
  useMeQuery,
  useProductQuery,
  UserDocument,
} from "../../graphql/generated";
import Head from "next/head";

const Product = () => {
  const router = useRouter();
  const { productId } = router.query;
  const { data, loading, error } = useProductQuery({
    variables: { input: { productId: productId as string } },
  });

  const { data: me } = useMeQuery();
  const [addProductToshop, {}] = useAddProductToShoppingListMutation();

  const handelAddProToShopClick = () => {
    if (!me) {
      router.push("/login");
      return;
    }

    addProductToshop({
      variables: { input: { product: data?.product._id as string } },
      update: (cache, data) => {
        cache.writeQuery({
          query: UserDocument,
          data: data.data?.addProductToShoppingList,
        });
      },
    });
  };

  return (
    <PageLayout>
      <>
        <Head>
          <title>{data?.product.name}</title>
        </Head>
        <div className="py-3 my-3 flex flex-wrap lg:flex-nowrap ">
          <img
            src={data?.product.image}
            className="w-52 object-cover rounded-sm"
          />
          <div className="pt-3 w-full px-3">
            <div className="w-full  lg:flex justify-between items-start pt-3 mb-4 md:mb-1">
              <div>
                <h1 className="text-2xl font-bold text-black -mt-2 w-full lg:pr-5">
                  {data?.product.name}
                </h1>
                <h3 className="text-red-700 text-md font-semibold ">
                  #{data?.product.category?.name}
                </h3>
                <div className="py-1 pb-3 flex justify-start items-start gap-10">
                  <h4 className="text-lg text-gray-600 font-semibold">
                    Count:
                    <span className="pl-3 text-red-600">
                      {data?.product.count}
                    </span>
                  </h4>
                  <h4 className="text-lg text-gray-600 font-semibold">
                    Price:
                    <span className="pl-3 text-red-600">
                      ${data?.product.price}
                    </span>
                  </h4>
                </div>
              </div>
              {me && me?.me.Admin ? (
                <button className="customDelButton min-w-max">
                  Remove All Reviews
                </button>
              ) : (
                <button
                  className="customButton min-w-max"
                  onClick={handelAddProToShopClick}
                >
                  Add To Card
                </button>
              )}
            </div>
            <h4 className="text-lg text-black font-semibold">Description: </h4>
            <p className="text-base px-2 py-3">{data?.product.description}</p>
          </div>
        </div>
        <div className="px-5">
          <h4 className="text-lg mt-5 pt-5">Leave a Comment:</h4>
          <hr className="py-1 mt-4" />
          <div className="mt-4">
            <ReviewFrom />
          </div>
          <h4 className="text-lg mt-5 pt-5">Comments:</h4>
          <hr className="py-1 my-4" />
          {data?.product.reviews.map((review) => (
            <ReviewCard review={review as Review} key={review?._id} />
          ))}
        </div>
      </>
    </PageLayout>
  );
};

export default withApollo(Product, { getDataFromTree });
