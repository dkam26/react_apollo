import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
const SHOPPINGLISTS = gql`
  {
    shoppinglists{
        name
    }
  }
`;
export default function Shoppinglists() {
    const { loading, error, data } = useQuery(SHOPPINGLISTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return data.shoppinglists.map(({ name }) => (
        <div key={name}>
          <p>
            {name}
          </p>
        </div>
      ));;
  }
