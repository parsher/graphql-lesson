import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Header from './header.component';

// @client searching the value in front end only
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const HeaderContainer = () => (
  <Query query={GET_CART_HIDDEN}>
    {
      ({data: {cartHidden}}) => <Header hidden={cartHidden} />
    }
  </Query>
);

export default HeaderContainer;
