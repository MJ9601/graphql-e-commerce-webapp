import { Delete } from "@mui/icons-material";
import { Category, Product } from "../graphql/generated";

const CategoryCard = ({
  category,
  AdminAccess,
}: {
  category: Category;
  AdminAccess: boolean;
}) => {
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
              <button className="customDelButton">
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
