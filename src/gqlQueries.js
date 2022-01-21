import { gql } from '@apollo/client';

export const HEADER_TARCKS = gql`
  query Query {
    categories {
      name
    }
    currencies
  }
`;

export const PROD_OVERWIEW_TARCKS = gql`
query Query($categoryInput: CategoryInput) {
  category(input: $categoryInput) {
    name
    products {
      name
      id
      inStock
      gallery
      category
      prices {
        currency
        amount
      }
      brand
    }
  }
}, 
`

export const SELECTED_PROD_TARCKS = gql`
query Query($productId: String!) {
  product(id: $productId) {
    id
    name
    inStock
    gallery
    description
    category
    attributes {
      id
      name
      type
      items {
        displayValue
        value
        id
      }
    }
    prices {
      currency
      amount
    }
    brand
  }
}`