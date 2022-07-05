/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
THIS IS A GENERATED FILE, use `npm run codegen` to generate
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
  User: User;
  addProductToBoughtList: User;
  addProductToCat: Category;
  addProductToShoppingList: User;
  createAdmimUser: User;
  createCat: Category;
  createNormalUser: User;
  createProduct: Product;
  createRating: Review;
  createReview: Review;
  createReviewAndRating: Review;
  delAllCats: Scalars['String'];
  delCat: Scalars['String'];
  deleteReview: Scalars['String'];
  deleteReviewsOnProduct: Scalars['String'];
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

export type AllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsQuery = { __typename?: 'Query', allProducts: Array<{ __typename?: 'Product', _id: string, productId: string, name: string, price: string, count: string, image: string }> };


export const AllProductsDocument = gql`
    query allProducts {
  allProducts {
    _id
    productId
    name
    price
    count
    image
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