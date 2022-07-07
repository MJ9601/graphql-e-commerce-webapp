// THIS IS A GENERATED FILE, use `npm run codegen` to generate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AddProductToCat = {
  _id: Scalars['ID'];
  products: Array<Scalars['ID']>;
};

export type AddProductToUser = {
  product: Scalars['ID'];
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['ID'];
  name: Scalars['String'];
  products: Array<Product>;
};

export type CreateAdminUserInput = {
  Admin: Scalars['Boolean'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateCategory = {
  name: Scalars['String'];
};

export type CreateNormalUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateProductInput = {
  category: Scalars['ID'];
  count: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['String'];
};

export type CreateRateAndReviewInput = {
  description: Scalars['String'];
  productId: Scalars['String'];
  rate: Scalars['Float'];
};

export type CreateRateInput = {
  productId: Scalars['String'];
  rate: Scalars['Float'];
};

export type CreateReviewInput = {
  description: Scalars['String'];
  productId: Scalars['String'];
};

export type DelCategory = {
  _id: Scalars['String'];
};

export type DelReviewInput = {
  _id: Scalars['String'];
  productId: Scalars['String'];
};

export type DelReviewOnProductInput = {
  productId: Scalars['String'];
};

export type FilterProduct = {
  category: Scalars['ID'];
};

export type GetProduct = {
  productId: Scalars['ID'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginObject = {
  __typename?: 'LoginObject';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAllProductToBoughtList: User;
  addProductToBoughtList: User;
  addProductToCat: Category;
  addProductToShoppingList: User;
  createAdmimUser: User;
  createCat: Category;
  createNormalUser: User;
  createProduct: Product;
  createRating: Product;
  createReview: Product;
  createReviewAndRating: Product;
  delAllCats: Scalars['String'];
  delCat: Scalars['String'];
  deleteAllProducts: Scalars['String'];
  deleteOneProduct: Scalars['String'];
  deleteReview: Product;
  deleteReviewsOnProduct: Product;
  login: LoginObject;
  logout: LoginObject;
  removeAllProductFromShoppingList: User;
  removeProductFromShoppingList: User;
  updateProductDetails: Product;
  updateUserPassword: User;
};


export type MutationAddProductToBoughtListArgs = {
  input: AddProductToUser;
};


export type MutationAddProductToCatArgs = {
  input: AddProductToCat;
};


export type MutationAddProductToShoppingListArgs = {
  input: AddProductToUser;
};


export type MutationCreateAdmimUserArgs = {
  input: CreateAdminUserInput;
};


export type MutationCreateCatArgs = {
  input: CreateCategory;
};


export type MutationCreateNormalUserArgs = {
  input: CreateNormalUserInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateRatingArgs = {
  input: CreateRateInput;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};


export type MutationCreateReviewAndRatingArgs = {
  input: CreateRateAndReviewInput;
};


export type MutationDelCatArgs = {
  input: DelCategory;
};


export type MutationDeleteOneProductArgs = {
  input: GetProduct;
};


export type MutationDeleteReviewArgs = {
  input: DelReviewInput;
};


export type MutationDeleteReviewsOnProductArgs = {
  input: DelReviewOnProductInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRemoveProductFromShoppingListArgs = {
  input: AddProductToUser;
};


export type MutationUpdateProductDetailsArgs = {
  input: UpdateProductInput;
};


export type MutationUpdateUserPasswordArgs = {
  input: UpdateUserPasswordInput;
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID'];
  category?: Maybe<Category>;
  count: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['String'];
  productId: Scalars['String'];
  reviews: Array<Maybe<Review>>;
  user: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  Category: Category;
  User: User;
  allCategories: Array<Category>;
  allProducts: Array<Product>;
  allUsers: Array<User>;
  filterProductsBaseOnCat: Array<Product>;
  me: User;
  product: Product;
};


export type QueryCategoryArgs = {
  input: DelCategory;
};


export type QueryFilterProductsBaseOnCatArgs = {
  input: FilterProduct;
};


export type QueryProductArgs = {
  input: GetProduct;
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  productId: Scalars['String'];
  rate: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type UpdateProductInput = {
  category?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  productId: Scalars['ID'];
};

export type UpdateUserPasswordInput = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  Admin: Scalars['Boolean'];
  _id: Scalars['String'];
  boughtProduct: Array<Product>;
  email: Scalars['String'];
  shoppingCard: Array<Maybe<Product>>;
};

export type CreateCatMutationVariables = Exact<{
  input: CreateCategory;
}>;


export type CreateCatMutation = { __typename?: 'Mutation', createCat: { __typename?: 'Category', _id: string, name: string, products: Array<{ __typename?: 'Product', _id: string }> } };

export type AddProductToCatMutationVariables = Exact<{
  input: AddProductToCat;
}>;


export type AddProductToCatMutation = { __typename?: 'Mutation', addProductToCat: { __typename?: 'Category', _id: string, name: string, products: Array<{ __typename?: 'Product', _id: string, name: string, price: string, count: string }> } };

export type DelCatMutationVariables = Exact<{
  input: DelCategory;
}>;


export type DelCatMutation = { __typename?: 'Mutation', delCat: string };

export type DelAllCatsMutationVariables = Exact<{ [key: string]: never; }>;


export type DelAllCatsMutation = { __typename?: 'Mutation', delAllCats: string };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', _id: string, productId: string, name: string, description: string, price: string, image: string, category?: { __typename?: 'Category', _id: string, name: string } | null, reviews: Array<{ __typename?: 'Review', _id: string } | null> } };

export type UpdateProductDetailsMutationVariables = Exact<{
  input: UpdateProductInput;
}>;


export type UpdateProductDetailsMutation = { __typename?: 'Mutation', updateProductDetails: { __typename?: 'Product', _id: string, productId: string, name: string, description: string, price: string, image: string, category?: { __typename?: 'Category', _id: string, name: string } | null, reviews: Array<{ __typename?: 'Review', _id: string } | null> } };

export type CreateReviewMutationVariables = Exact<{
  input: CreateReviewInput;
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', createReview: { __typename?: 'Product', _id: string, productId: string, name: string, description: string, price: string, count: string, image: string, category?: { __typename?: 'Category', _id: string, name: string } | null, reviews: Array<{ __typename?: 'Review', _id: string, description: string, rate: number, createdAt: any, user: { __typename?: 'User', email: string, _id: string } } | null> } };

export type CreateRatingMutationVariables = Exact<{
  input: CreateRateInput;
}>;


export type CreateRatingMutation = { __typename?: 'Mutation', createRating: { __typename?: 'Product', _id: string, productId: string, name: string, description: string, price: string, count: string, image: string, category?: { __typename?: 'Category', _id: string, name: string } | null, reviews: Array<{ __typename?: 'Review', _id: string, description: string, rate: number, createdAt: any, user: { __typename?: 'User', email: string, _id: string } } | null> } };

export type CreateReviewAndRatingMutationVariables = Exact<{
  input: CreateRateAndReviewInput;
}>;


export type CreateReviewAndRatingMutation = { __typename?: 'Mutation', createReviewAndRating: { __typename?: 'Product', _id: string, productId: string, name: string, description: string, price: string, count: string, image: string, category?: { __typename?: 'Category', _id: string, name: string } | null, reviews: Array<{ __typename?: 'Review', _id: string, description: string, rate: number, createdAt: any, user: { __typename?: 'User', email: string, _id: string } } | null> } };

export type DeleteReviewMutationVariables = Exact<{
  input: DelReviewInput;
}>;


export type DeleteReviewMutation = { __typename?: 'Mutation', deleteReview: { __typename?: 'Product', _id: string, productId: string, name: string, description: string, price: string, count: string, image: string, category?: { __typename?: 'Category', _id: string, name: string } | null, reviews: Array<{ __typename?: 'Review', _id: string, description: string, rate: number, createdAt: any, user: { __typename?: 'User', email: string, _id: string } } | null> } };

export type DeleteReviewsOnProductMutationVariables = Exact<{
  input: DelReviewOnProductInput;
}>;


export type DeleteReviewsOnProductMutation = { __typename?: 'Mutation', deleteReviewsOnProduct: { __typename?: 'Product', _id: string, productId: string, name: string, description: string, price: string, count: string, image: string, category?: { __typename?: 'Category', _id: string, name: string } | null, reviews: Array<{ __typename?: 'Review', _id: string, description: string, rate: number, createdAt: any, user: { __typename?: 'User', email: string, _id: string } } | null> } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginObject', accessToken: string, refreshToken: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'LoginObject', accessToken: string, refreshToken: string } };

export type CreateNormalUserMutationVariables = Exact<{
  input: CreateNormalUserInput;
}>;


export type CreateNormalUserMutation = { __typename?: 'Mutation', createNormalUser: { __typename?: 'User', _id: string, email: string, Admin: boolean } };

export type CreateAdmimUserMutationVariables = Exact<{
  input: CreateAdminUserInput;
}>;


export type CreateAdmimUserMutation = { __typename?: 'Mutation', createAdmimUser: { __typename?: 'User', _id: string, email: string, Admin: boolean } };

export type UpdateUserPasswordMutationVariables = Exact<{
  input: UpdateUserPasswordInput;
}>;


export type UpdateUserPasswordMutation = { __typename?: 'Mutation', updateUserPassword: { __typename?: 'User', _id: string, email: string } };

export type AddProductToShoppingListMutationVariables = Exact<{
  input: AddProductToUser;
}>;


export type AddProductToShoppingListMutation = { __typename?: 'Mutation', addProductToShoppingList: { __typename?: 'User', _id: string, email: string, shoppingCard: Array<{ __typename?: 'Product', _id: string, productId: string, name: string, price: string, image: string } | null>, boughtProduct: Array<{ __typename?: 'Product', _id: string, name: string, price: string, image: string }> } };

export type RemoveProductFromShoppingListMutationVariables = Exact<{
  input: AddProductToUser;
}>;


export type RemoveProductFromShoppingListMutation = { __typename?: 'Mutation', removeProductFromShoppingList: { __typename?: 'User', _id: string, email: string, shoppingCard: Array<{ __typename?: 'Product', _id: string, productId: string, name: string, price: string, image: string } | null>, boughtProduct: Array<{ __typename?: 'Product', _id: string, name: string, price: string, image: string }> } };

export type RemoveAllProductFromShoppingListMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveAllProductFromShoppingListMutation = { __typename?: 'Mutation', removeAllProductFromShoppingList: { __typename?: 'User', _id: string, email: string, shoppingCard: Array<{ __typename?: 'Product', _id: string, productId: string, name: string, price: string, image: string } | null>, boughtProduct: Array<{ __typename?: 'Product', _id: string, name: string, price: string, image: string }> } };

export type AddProductToBoughtListMutationVariables = Exact<{
  input: AddProductToUser;
}>;


export type AddProductToBoughtListMutation = { __typename?: 'Mutation', addProductToBoughtList: { __typename?: 'User', _id: string, email: string, shoppingCard: Array<{ __typename?: 'Product', _id: string, productId: string, name: string, price: string, image: string } | null>, boughtProduct: Array<{ __typename?: 'Product', _id: string, name: string, price: string, image: string }> } };

export type AddAllProductToBoughtListMutationVariables = Exact<{ [key: string]: never; }>;


export type AddAllProductToBoughtListMutation = { __typename?: 'Mutation', addAllProductToBoughtList: { __typename?: 'User', _id: string, email: string, shoppingCard: Array<{ __typename?: 'Product', _id: string, productId: string, name: string, price: string, image: string } | null>, boughtProduct: Array<{ __typename?: 'Product', _id: string, name: string, price: string, image: string }> } };

export type DeleteAllProductsMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAllProductsMutation = { __typename?: 'Mutation', deleteAllProducts: string };

export type DeleteOneProductMutationVariables = Exact<{
  input: GetProduct;
}>;


export type DeleteOneProductMutation = { __typename?: 'Mutation', deleteOneProduct: string };

export type ProductQueryVariables = Exact<{
  input: GetProduct;
}>;


export type ProductQuery = { __typename?: 'Query', product: { __typename?: 'Product', _id: string, productId: string, name: string, description: string, price: string, count: string, image: string, category?: { __typename?: 'Category', _id: string, name: string } | null, reviews: Array<{ __typename?: 'Review', _id: string, description: string, rate: number, createdAt: any, user: { __typename?: 'User', email: string, _id: string } } | null> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', _id: string, email: string, Admin: boolean } };

export type FilterProductsBaseOnCatQueryVariables = Exact<{
  input: FilterProduct;
}>;


export type FilterProductsBaseOnCatQuery = { __typename?: 'Query', filterProductsBaseOnCat: Array<{ __typename?: 'Product', _id: string, productId: string, name: string, price: string, count: string, image: string, category?: { __typename?: 'Category', _id: string, name: string } | null }> };

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = { __typename?: 'Query', allCategories: Array<{ __typename?: 'Category', _id: string, name: string, products: Array<{ __typename?: 'Product', _id: string, name: string, price: string, image: string, count: string }> }> };

export type AllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsQuery = { __typename?: 'Query', allProducts: Array<{ __typename?: 'Product', _id: string, productId: string, name: string, price: string, count: string, image: string, description: string, category?: { __typename?: 'Category', _id: string, name: string } | null }> };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', allUsers: Array<{ __typename?: 'User', _id: string, email: string, Admin: boolean, shoppingCard: Array<{ __typename?: 'Product', _id: string } | null>, boughtProduct: Array<{ __typename?: 'Product', _id: string }> }> };

export type CategoryQueryVariables = Exact<{
  input: DelCategory;
}>;


export type CategoryQuery = { __typename?: 'Query', Category: { __typename?: 'Category', _id: string, name: string, products: Array<{ __typename?: 'Product', _id: string, name: string, price: string, count: string }> } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', User: { __typename?: 'User', _id: string, email: string, shoppingCard: Array<{ __typename?: 'Product', _id: string, productId: string, name: string, price: string, image: string } | null>, boughtProduct: Array<{ __typename?: 'Product', _id: string, name: string, price: string, image: string }> } };


export const CreateCatDocument = gql`
    mutation createCat($input: CreateCategory!) {
  createCat(input: $input) {
    _id
    name
    products {
      _id
    }
  }
}
    `;
export type CreateCatMutationFn = Apollo.MutationFunction<CreateCatMutation, CreateCatMutationVariables>;

/**
 * __useCreateCatMutation__
 *
 * To run a mutation, you first call `useCreateCatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCatMutation, { data, loading, error }] = useCreateCatMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCatMutation(baseOptions?: Apollo.MutationHookOptions<CreateCatMutation, CreateCatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCatMutation, CreateCatMutationVariables>(CreateCatDocument, options);
      }
export type CreateCatMutationHookResult = ReturnType<typeof useCreateCatMutation>;
export type CreateCatMutationResult = Apollo.MutationResult<CreateCatMutation>;
export type CreateCatMutationOptions = Apollo.BaseMutationOptions<CreateCatMutation, CreateCatMutationVariables>;
export const AddProductToCatDocument = gql`
    mutation addProductToCat($input: AddProductToCat!) {
  addProductToCat(input: $input) {
    _id
    name
    products {
      _id
      name
      price
      count
    }
  }
}
    `;
export type AddProductToCatMutationFn = Apollo.MutationFunction<AddProductToCatMutation, AddProductToCatMutationVariables>;

/**
 * __useAddProductToCatMutation__
 *
 * To run a mutation, you first call `useAddProductToCatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductToCatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductToCatMutation, { data, loading, error }] = useAddProductToCatMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddProductToCatMutation(baseOptions?: Apollo.MutationHookOptions<AddProductToCatMutation, AddProductToCatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductToCatMutation, AddProductToCatMutationVariables>(AddProductToCatDocument, options);
      }
export type AddProductToCatMutationHookResult = ReturnType<typeof useAddProductToCatMutation>;
export type AddProductToCatMutationResult = Apollo.MutationResult<AddProductToCatMutation>;
export type AddProductToCatMutationOptions = Apollo.BaseMutationOptions<AddProductToCatMutation, AddProductToCatMutationVariables>;
export const DelCatDocument = gql`
    mutation delCat($input: DelCategory!) {
  delCat(input: $input)
}
    `;
export type DelCatMutationFn = Apollo.MutationFunction<DelCatMutation, DelCatMutationVariables>;

/**
 * __useDelCatMutation__
 *
 * To run a mutation, you first call `useDelCatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelCatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [delCatMutation, { data, loading, error }] = useDelCatMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDelCatMutation(baseOptions?: Apollo.MutationHookOptions<DelCatMutation, DelCatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DelCatMutation, DelCatMutationVariables>(DelCatDocument, options);
      }
export type DelCatMutationHookResult = ReturnType<typeof useDelCatMutation>;
export type DelCatMutationResult = Apollo.MutationResult<DelCatMutation>;
export type DelCatMutationOptions = Apollo.BaseMutationOptions<DelCatMutation, DelCatMutationVariables>;
export const DelAllCatsDocument = gql`
    mutation delAllCats {
  delAllCats
}
    `;
export type DelAllCatsMutationFn = Apollo.MutationFunction<DelAllCatsMutation, DelAllCatsMutationVariables>;

/**
 * __useDelAllCatsMutation__
 *
 * To run a mutation, you first call `useDelAllCatsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelAllCatsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [delAllCatsMutation, { data, loading, error }] = useDelAllCatsMutation({
 *   variables: {
 *   },
 * });
 */
export function useDelAllCatsMutation(baseOptions?: Apollo.MutationHookOptions<DelAllCatsMutation, DelAllCatsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DelAllCatsMutation, DelAllCatsMutationVariables>(DelAllCatsDocument, options);
      }
export type DelAllCatsMutationHookResult = ReturnType<typeof useDelAllCatsMutation>;
export type DelAllCatsMutationResult = Apollo.MutationResult<DelAllCatsMutation>;
export type DelAllCatsMutationOptions = Apollo.BaseMutationOptions<DelAllCatsMutation, DelAllCatsMutationVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    _id
    productId
    name
    description
    price
    image
    category {
      _id
      name
    }
    reviews {
      _id
    }
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDetailsDocument = gql`
    mutation updateProductDetails($input: UpdateProductInput!) {
  updateProductDetails(input: $input) {
    _id
    productId
    name
    description
    price
    image
    category {
      _id
      name
    }
    reviews {
      _id
    }
  }
}
    `;
export type UpdateProductDetailsMutationFn = Apollo.MutationFunction<UpdateProductDetailsMutation, UpdateProductDetailsMutationVariables>;

/**
 * __useUpdateProductDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateProductDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductDetailsMutation, { data, loading, error }] = useUpdateProductDetailsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductDetailsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductDetailsMutation, UpdateProductDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductDetailsMutation, UpdateProductDetailsMutationVariables>(UpdateProductDetailsDocument, options);
      }
export type UpdateProductDetailsMutationHookResult = ReturnType<typeof useUpdateProductDetailsMutation>;
export type UpdateProductDetailsMutationResult = Apollo.MutationResult<UpdateProductDetailsMutation>;
export type UpdateProductDetailsMutationOptions = Apollo.BaseMutationOptions<UpdateProductDetailsMutation, UpdateProductDetailsMutationVariables>;
export const CreateReviewDocument = gql`
    mutation createReview($input: CreateReviewInput!) {
  createReview(input: $input) {
    _id
    productId
    name
    description
    price
    count
    image
    category {
      _id
      name
    }
    reviews {
      _id
      description
      rate
      createdAt
      user {
        email
        _id
      }
    }
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const CreateRatingDocument = gql`
    mutation createRating($input: CreateRateInput!) {
  createRating(input: $input) {
    _id
    productId
    name
    description
    price
    count
    image
    category {
      _id
      name
    }
    reviews {
      _id
      description
      rate
      createdAt
      user {
        email
        _id
      }
    }
  }
}
    `;
export type CreateRatingMutationFn = Apollo.MutationFunction<CreateRatingMutation, CreateRatingMutationVariables>;

/**
 * __useCreateRatingMutation__
 *
 * To run a mutation, you first call `useCreateRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRatingMutation, { data, loading, error }] = useCreateRatingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRatingMutation(baseOptions?: Apollo.MutationHookOptions<CreateRatingMutation, CreateRatingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRatingMutation, CreateRatingMutationVariables>(CreateRatingDocument, options);
      }
export type CreateRatingMutationHookResult = ReturnType<typeof useCreateRatingMutation>;
export type CreateRatingMutationResult = Apollo.MutationResult<CreateRatingMutation>;
export type CreateRatingMutationOptions = Apollo.BaseMutationOptions<CreateRatingMutation, CreateRatingMutationVariables>;
export const CreateReviewAndRatingDocument = gql`
    mutation createReviewAndRating($input: CreateRateAndReviewInput!) {
  createReviewAndRating(input: $input) {
    _id
    productId
    name
    description
    price
    count
    image
    category {
      _id
      name
    }
    reviews {
      _id
      description
      rate
      createdAt
      user {
        email
        _id
      }
    }
  }
}
    `;
export type CreateReviewAndRatingMutationFn = Apollo.MutationFunction<CreateReviewAndRatingMutation, CreateReviewAndRatingMutationVariables>;

/**
 * __useCreateReviewAndRatingMutation__
 *
 * To run a mutation, you first call `useCreateReviewAndRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewAndRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewAndRatingMutation, { data, loading, error }] = useCreateReviewAndRatingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReviewAndRatingMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewAndRatingMutation, CreateReviewAndRatingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewAndRatingMutation, CreateReviewAndRatingMutationVariables>(CreateReviewAndRatingDocument, options);
      }
export type CreateReviewAndRatingMutationHookResult = ReturnType<typeof useCreateReviewAndRatingMutation>;
export type CreateReviewAndRatingMutationResult = Apollo.MutationResult<CreateReviewAndRatingMutation>;
export type CreateReviewAndRatingMutationOptions = Apollo.BaseMutationOptions<CreateReviewAndRatingMutation, CreateReviewAndRatingMutationVariables>;
export const DeleteReviewDocument = gql`
    mutation deleteReview($input: DelReviewInput!) {
  deleteReview(input: $input) {
    _id
    productId
    name
    description
    price
    count
    image
    category {
      _id
      name
    }
    reviews {
      _id
      description
      rate
      createdAt
      user {
        email
        _id
      }
    }
  }
}
    `;
export type DeleteReviewMutationFn = Apollo.MutationFunction<DeleteReviewMutation, DeleteReviewMutationVariables>;

/**
 * __useDeleteReviewMutation__
 *
 * To run a mutation, you first call `useDeleteReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReviewMutation, { data, loading, error }] = useDeleteReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteReviewMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReviewMutation, DeleteReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReviewMutation, DeleteReviewMutationVariables>(DeleteReviewDocument, options);
      }
export type DeleteReviewMutationHookResult = ReturnType<typeof useDeleteReviewMutation>;
export type DeleteReviewMutationResult = Apollo.MutationResult<DeleteReviewMutation>;
export type DeleteReviewMutationOptions = Apollo.BaseMutationOptions<DeleteReviewMutation, DeleteReviewMutationVariables>;
export const DeleteReviewsOnProductDocument = gql`
    mutation deleteReviewsOnProduct($input: DelReviewOnProductInput!) {
  deleteReviewsOnProduct(input: $input) {
    _id
    productId
    name
    description
    price
    count
    image
    category {
      _id
      name
    }
    reviews {
      _id
      description
      rate
      createdAt
      user {
        email
        _id
      }
    }
  }
}
    `;
export type DeleteReviewsOnProductMutationFn = Apollo.MutationFunction<DeleteReviewsOnProductMutation, DeleteReviewsOnProductMutationVariables>;

/**
 * __useDeleteReviewsOnProductMutation__
 *
 * To run a mutation, you first call `useDeleteReviewsOnProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReviewsOnProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReviewsOnProductMutation, { data, loading, error }] = useDeleteReviewsOnProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteReviewsOnProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReviewsOnProductMutation, DeleteReviewsOnProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReviewsOnProductMutation, DeleteReviewsOnProductMutationVariables>(DeleteReviewsOnProductDocument, options);
      }
export type DeleteReviewsOnProductMutationHookResult = ReturnType<typeof useDeleteReviewsOnProductMutation>;
export type DeleteReviewsOnProductMutationResult = Apollo.MutationResult<DeleteReviewsOnProductMutation>;
export type DeleteReviewsOnProductMutationOptions = Apollo.BaseMutationOptions<DeleteReviewsOnProductMutation, DeleteReviewsOnProductMutationVariables>;
export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    refreshToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout {
    accessToken
    refreshToken
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CreateNormalUserDocument = gql`
    mutation createNormalUser($input: CreateNormalUserInput!) {
  createNormalUser(input: $input) {
    _id
    email
    Admin
  }
}
    `;
export type CreateNormalUserMutationFn = Apollo.MutationFunction<CreateNormalUserMutation, CreateNormalUserMutationVariables>;

/**
 * __useCreateNormalUserMutation__
 *
 * To run a mutation, you first call `useCreateNormalUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNormalUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNormalUserMutation, { data, loading, error }] = useCreateNormalUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateNormalUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateNormalUserMutation, CreateNormalUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNormalUserMutation, CreateNormalUserMutationVariables>(CreateNormalUserDocument, options);
      }
export type CreateNormalUserMutationHookResult = ReturnType<typeof useCreateNormalUserMutation>;
export type CreateNormalUserMutationResult = Apollo.MutationResult<CreateNormalUserMutation>;
export type CreateNormalUserMutationOptions = Apollo.BaseMutationOptions<CreateNormalUserMutation, CreateNormalUserMutationVariables>;
export const CreateAdmimUserDocument = gql`
    mutation createAdmimUser($input: CreateAdminUserInput!) {
  createAdmimUser(input: $input) {
    _id
    email
    Admin
  }
}
    `;
export type CreateAdmimUserMutationFn = Apollo.MutationFunction<CreateAdmimUserMutation, CreateAdmimUserMutationVariables>;

/**
 * __useCreateAdmimUserMutation__
 *
 * To run a mutation, you first call `useCreateAdmimUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdmimUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdmimUserMutation, { data, loading, error }] = useCreateAdmimUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAdmimUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdmimUserMutation, CreateAdmimUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAdmimUserMutation, CreateAdmimUserMutationVariables>(CreateAdmimUserDocument, options);
      }
export type CreateAdmimUserMutationHookResult = ReturnType<typeof useCreateAdmimUserMutation>;
export type CreateAdmimUserMutationResult = Apollo.MutationResult<CreateAdmimUserMutation>;
export type CreateAdmimUserMutationOptions = Apollo.BaseMutationOptions<CreateAdmimUserMutation, CreateAdmimUserMutationVariables>;
export const UpdateUserPasswordDocument = gql`
    mutation updateUserPassword($input: UpdateUserPasswordInput!) {
  updateUserPassword(input: $input) {
    _id
    email
  }
}
    `;
export type UpdateUserPasswordMutationFn = Apollo.MutationFunction<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;

/**
 * __useUpdateUserPasswordMutation__
 *
 * To run a mutation, you first call `useUpdateUserPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPasswordMutation, { data, loading, error }] = useUpdateUserPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserPasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>(UpdateUserPasswordDocument, options);
      }
export type UpdateUserPasswordMutationHookResult = ReturnType<typeof useUpdateUserPasswordMutation>;
export type UpdateUserPasswordMutationResult = Apollo.MutationResult<UpdateUserPasswordMutation>;
export type UpdateUserPasswordMutationOptions = Apollo.BaseMutationOptions<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;
export const AddProductToShoppingListDocument = gql`
    mutation addProductToShoppingList($input: AddProductToUser!) {
  addProductToShoppingList(input: $input) {
    _id
    email
    shoppingCard {
      _id
      productId
      name
      price
      image
    }
    boughtProduct {
      _id
      name
      price
      image
    }
  }
}
    `;
export type AddProductToShoppingListMutationFn = Apollo.MutationFunction<AddProductToShoppingListMutation, AddProductToShoppingListMutationVariables>;

/**
 * __useAddProductToShoppingListMutation__
 *
 * To run a mutation, you first call `useAddProductToShoppingListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductToShoppingListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductToShoppingListMutation, { data, loading, error }] = useAddProductToShoppingListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddProductToShoppingListMutation(baseOptions?: Apollo.MutationHookOptions<AddProductToShoppingListMutation, AddProductToShoppingListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductToShoppingListMutation, AddProductToShoppingListMutationVariables>(AddProductToShoppingListDocument, options);
      }
export type AddProductToShoppingListMutationHookResult = ReturnType<typeof useAddProductToShoppingListMutation>;
export type AddProductToShoppingListMutationResult = Apollo.MutationResult<AddProductToShoppingListMutation>;
export type AddProductToShoppingListMutationOptions = Apollo.BaseMutationOptions<AddProductToShoppingListMutation, AddProductToShoppingListMutationVariables>;
export const RemoveProductFromShoppingListDocument = gql`
    mutation removeProductFromShoppingList($input: AddProductToUser!) {
  removeProductFromShoppingList(input: $input) {
    _id
    email
    shoppingCard {
      _id
      productId
      name
      price
      image
    }
    boughtProduct {
      _id
      name
      price
      image
    }
  }
}
    `;
export type RemoveProductFromShoppingListMutationFn = Apollo.MutationFunction<RemoveProductFromShoppingListMutation, RemoveProductFromShoppingListMutationVariables>;

/**
 * __useRemoveProductFromShoppingListMutation__
 *
 * To run a mutation, you first call `useRemoveProductFromShoppingListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProductFromShoppingListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProductFromShoppingListMutation, { data, loading, error }] = useRemoveProductFromShoppingListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveProductFromShoppingListMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProductFromShoppingListMutation, RemoveProductFromShoppingListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProductFromShoppingListMutation, RemoveProductFromShoppingListMutationVariables>(RemoveProductFromShoppingListDocument, options);
      }
export type RemoveProductFromShoppingListMutationHookResult = ReturnType<typeof useRemoveProductFromShoppingListMutation>;
export type RemoveProductFromShoppingListMutationResult = Apollo.MutationResult<RemoveProductFromShoppingListMutation>;
export type RemoveProductFromShoppingListMutationOptions = Apollo.BaseMutationOptions<RemoveProductFromShoppingListMutation, RemoveProductFromShoppingListMutationVariables>;
export const RemoveAllProductFromShoppingListDocument = gql`
    mutation removeAllProductFromShoppingList {
  removeAllProductFromShoppingList {
    _id
    email
    shoppingCard {
      _id
      productId
      name
      price
      image
    }
    boughtProduct {
      _id
      name
      price
      image
    }
  }
}
    `;
export type RemoveAllProductFromShoppingListMutationFn = Apollo.MutationFunction<RemoveAllProductFromShoppingListMutation, RemoveAllProductFromShoppingListMutationVariables>;

/**
 * __useRemoveAllProductFromShoppingListMutation__
 *
 * To run a mutation, you first call `useRemoveAllProductFromShoppingListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAllProductFromShoppingListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAllProductFromShoppingListMutation, { data, loading, error }] = useRemoveAllProductFromShoppingListMutation({
 *   variables: {
 *   },
 * });
 */
export function useRemoveAllProductFromShoppingListMutation(baseOptions?: Apollo.MutationHookOptions<RemoveAllProductFromShoppingListMutation, RemoveAllProductFromShoppingListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveAllProductFromShoppingListMutation, RemoveAllProductFromShoppingListMutationVariables>(RemoveAllProductFromShoppingListDocument, options);
      }
export type RemoveAllProductFromShoppingListMutationHookResult = ReturnType<typeof useRemoveAllProductFromShoppingListMutation>;
export type RemoveAllProductFromShoppingListMutationResult = Apollo.MutationResult<RemoveAllProductFromShoppingListMutation>;
export type RemoveAllProductFromShoppingListMutationOptions = Apollo.BaseMutationOptions<RemoveAllProductFromShoppingListMutation, RemoveAllProductFromShoppingListMutationVariables>;
export const AddProductToBoughtListDocument = gql`
    mutation addProductToBoughtList($input: AddProductToUser!) {
  addProductToBoughtList(input: $input) {
    _id
    email
    shoppingCard {
      _id
      productId
      name
      price
      image
    }
    boughtProduct {
      _id
      name
      price
      image
    }
  }
}
    `;
export type AddProductToBoughtListMutationFn = Apollo.MutationFunction<AddProductToBoughtListMutation, AddProductToBoughtListMutationVariables>;

/**
 * __useAddProductToBoughtListMutation__
 *
 * To run a mutation, you first call `useAddProductToBoughtListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductToBoughtListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductToBoughtListMutation, { data, loading, error }] = useAddProductToBoughtListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddProductToBoughtListMutation(baseOptions?: Apollo.MutationHookOptions<AddProductToBoughtListMutation, AddProductToBoughtListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductToBoughtListMutation, AddProductToBoughtListMutationVariables>(AddProductToBoughtListDocument, options);
      }
export type AddProductToBoughtListMutationHookResult = ReturnType<typeof useAddProductToBoughtListMutation>;
export type AddProductToBoughtListMutationResult = Apollo.MutationResult<AddProductToBoughtListMutation>;
export type AddProductToBoughtListMutationOptions = Apollo.BaseMutationOptions<AddProductToBoughtListMutation, AddProductToBoughtListMutationVariables>;
export const AddAllProductToBoughtListDocument = gql`
    mutation addAllProductToBoughtList {
  addAllProductToBoughtList {
    _id
    email
    shoppingCard {
      _id
      productId
      name
      price
      image
    }
    boughtProduct {
      _id
      name
      price
      image
    }
  }
}
    `;
export type AddAllProductToBoughtListMutationFn = Apollo.MutationFunction<AddAllProductToBoughtListMutation, AddAllProductToBoughtListMutationVariables>;

/**
 * __useAddAllProductToBoughtListMutation__
 *
 * To run a mutation, you first call `useAddAllProductToBoughtListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAllProductToBoughtListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAllProductToBoughtListMutation, { data, loading, error }] = useAddAllProductToBoughtListMutation({
 *   variables: {
 *   },
 * });
 */
export function useAddAllProductToBoughtListMutation(baseOptions?: Apollo.MutationHookOptions<AddAllProductToBoughtListMutation, AddAllProductToBoughtListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAllProductToBoughtListMutation, AddAllProductToBoughtListMutationVariables>(AddAllProductToBoughtListDocument, options);
      }
export type AddAllProductToBoughtListMutationHookResult = ReturnType<typeof useAddAllProductToBoughtListMutation>;
export type AddAllProductToBoughtListMutationResult = Apollo.MutationResult<AddAllProductToBoughtListMutation>;
export type AddAllProductToBoughtListMutationOptions = Apollo.BaseMutationOptions<AddAllProductToBoughtListMutation, AddAllProductToBoughtListMutationVariables>;
export const DeleteAllProductsDocument = gql`
    mutation deleteAllProducts {
  deleteAllProducts
}
    `;
export type DeleteAllProductsMutationFn = Apollo.MutationFunction<DeleteAllProductsMutation, DeleteAllProductsMutationVariables>;

/**
 * __useDeleteAllProductsMutation__
 *
 * To run a mutation, you first call `useDeleteAllProductsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAllProductsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAllProductsMutation, { data, loading, error }] = useDeleteAllProductsMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteAllProductsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAllProductsMutation, DeleteAllProductsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAllProductsMutation, DeleteAllProductsMutationVariables>(DeleteAllProductsDocument, options);
      }
export type DeleteAllProductsMutationHookResult = ReturnType<typeof useDeleteAllProductsMutation>;
export type DeleteAllProductsMutationResult = Apollo.MutationResult<DeleteAllProductsMutation>;
export type DeleteAllProductsMutationOptions = Apollo.BaseMutationOptions<DeleteAllProductsMutation, DeleteAllProductsMutationVariables>;
export const DeleteOneProductDocument = gql`
    mutation deleteOneProduct($input: GetProduct!) {
  deleteOneProduct(input: $input)
}
    `;
export type DeleteOneProductMutationFn = Apollo.MutationFunction<DeleteOneProductMutation, DeleteOneProductMutationVariables>;

/**
 * __useDeleteOneProductMutation__
 *
 * To run a mutation, you first call `useDeleteOneProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneProductMutation, { data, loading, error }] = useDeleteOneProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneProductMutation, DeleteOneProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneProductMutation, DeleteOneProductMutationVariables>(DeleteOneProductDocument, options);
      }
export type DeleteOneProductMutationHookResult = ReturnType<typeof useDeleteOneProductMutation>;
export type DeleteOneProductMutationResult = Apollo.MutationResult<DeleteOneProductMutation>;
export type DeleteOneProductMutationOptions = Apollo.BaseMutationOptions<DeleteOneProductMutation, DeleteOneProductMutationVariables>;
export const ProductDocument = gql`
    query product($input: GetProduct!) {
  product(input: $input) {
    _id
    productId
    name
    description
    price
    count
    image
    category {
      _id
      name
    }
    reviews {
      _id
      description
      rate
      createdAt
      user {
        email
        _id
      }
    }
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    _id
    email
    Admin
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const FilterProductsBaseOnCatDocument = gql`
    query filterProductsBaseOnCat($input: FilterProduct!) {
  filterProductsBaseOnCat(input: $input) {
    _id
    productId
    name
    price
    count
    image
    category {
      _id
      name
    }
  }
}
    `;

/**
 * __useFilterProductsBaseOnCatQuery__
 *
 * To run a query within a React component, call `useFilterProductsBaseOnCatQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterProductsBaseOnCatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilterProductsBaseOnCatQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFilterProductsBaseOnCatQuery(baseOptions: Apollo.QueryHookOptions<FilterProductsBaseOnCatQuery, FilterProductsBaseOnCatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilterProductsBaseOnCatQuery, FilterProductsBaseOnCatQueryVariables>(FilterProductsBaseOnCatDocument, options);
      }
export function useFilterProductsBaseOnCatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilterProductsBaseOnCatQuery, FilterProductsBaseOnCatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilterProductsBaseOnCatQuery, FilterProductsBaseOnCatQueryVariables>(FilterProductsBaseOnCatDocument, options);
        }
export type FilterProductsBaseOnCatQueryHookResult = ReturnType<typeof useFilterProductsBaseOnCatQuery>;
export type FilterProductsBaseOnCatLazyQueryHookResult = ReturnType<typeof useFilterProductsBaseOnCatLazyQuery>;
export type FilterProductsBaseOnCatQueryResult = Apollo.QueryResult<FilterProductsBaseOnCatQuery, FilterProductsBaseOnCatQueryVariables>;
export const AllCategoriesDocument = gql`
    query allCategories {
  allCategories {
    _id
    name
    products {
      _id
      name
      price
      image
      count
    }
  }
}
    `;

/**
 * __useAllCategoriesQuery__
 *
 * To run a query within a React component, call `useAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
      }
export function useAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
        }
export type AllCategoriesQueryHookResult = ReturnType<typeof useAllCategoriesQuery>;
export type AllCategoriesLazyQueryHookResult = ReturnType<typeof useAllCategoriesLazyQuery>;
export type AllCategoriesQueryResult = Apollo.QueryResult<AllCategoriesQuery, AllCategoriesQueryVariables>;
export const AllProductsDocument = gql`
    query allProducts {
  allProducts {
    _id
    productId
    name
    price
    count
    image
    description
    category {
      _id
      name
    }
  }
}
    `;

/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
      }
export function useAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
        }
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>;
export type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>;
export const AllUsersDocument = gql`
    query allUsers {
  allUsers {
    _id
    email
    Admin
    shoppingCard {
      _id
    }
    boughtProduct {
      _id
    }
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const CategoryDocument = gql`
    query Category($input: DelCategory!) {
  Category(input: $input) {
    _id
    name
    products {
      _id
      name
      price
      count
    }
  }
}
    `;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const UserDocument = gql`
    query User {
  User {
    _id
    email
    shoppingCard {
      _id
      productId
      name
      price
      image
    }
    boughtProduct {
      _id
      name
      price
      image
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;