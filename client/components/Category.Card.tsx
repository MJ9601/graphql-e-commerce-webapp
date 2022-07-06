import { Delete } from "@mui/icons-material";
import {
  AllCategoriesDocument,
  Category,
  Product,
  useAllCategoriesQuery,
  useDelCatMutation,
} from "../graphql/generated";
import { useAppDispatch } from "../utils/cms/app/hooks";
import { setCategories } from "../utils/cms/features/productSlic";

const CategoryCard = ({
  category,
  AdminAccess,
}: {
  category: Category;
  AdminAccess: boolean;
}) => {
  const dispatch = useAppDispatch();
  const { data } = useAllCategoriesQuery();

  console.log({ data });

  const [delCat, { data: deleted }] = useDelCatMutation();
  return (
    <div
      className={`${
        !AdminAccess &&
        "cursor-pointer hover:-translate-y-2 transition-all duration-300"
      } w-[350px] min-w-[300px] rounded-md  overflow-hidden relative bg-white ring-1 ring-gray-200`}
    >
      <div className="py-3 px-3">
        <h3 className="text-lg">{category.name}</h3>
        {AdminAccess && (
          <div className="h-min">
            <div className="flex gap-4 justify-end items-center">
              <button
                className="customDelButton"
                onClick={() => {
                  delCat({
                    variables: { input: { _id: category._id } },
                    update: (cache, data) => {
                      cache.updateQuery(
                        { query: AllCategoriesDocument },
                        (data) => ({
                          allCategories: data.allCategories.filter(
                            (cat: any) => cat._id !== category._id
                          ),
                        })
                      );
                    },
                  });
                  dispatch(setCategories(data?.allCategories as Category[]));
                }}
              >
                <Delete />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
