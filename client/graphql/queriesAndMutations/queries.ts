import { gql } from "@apollo/client";

// get category

export const CATEGORY = gql`
  query Category($input:{_id:String}){
    Category(input:$input) {
      _id,
      name,
      products
    }
  }
`;

export const ALL_CATEGORIES = gql`
  query allCategories {
    allCategories {
      _id
      name
      products
    }
  }
`;

export const ALL_PRODUCTS = gql`
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

export const FILTER_PRODUCTS_BASE_ON_CAT = gql`
  query filterProductsBaseOnCat($input:category:String){
    filterProductsBaseOnCat(input:$input) {
      _id
      productId
      name
      price
      count
      image
      category
    }
  }`;

export const PRODUCT = gql`
  query product($input:{productId: String}){
    product(input:$input) {
      _id
      productId
      name
      description
      price
      count
      image
      category
      reviews
    }
  }`;

export const ME = gql`
  query user {
    me {
      _id
      email
      Admin
      shoppingCard
      boughtProduct
    }
  }
`;

export const ALL_USERS = gql`
  query allUsers {
    allUsers {
      _id
      email
      Admin
      shoppingCard
      boughtProduct
    }
  }
`;
