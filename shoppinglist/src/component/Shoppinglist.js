import React from 'react';
import {  useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
export default function Shoppinglist(props) {
    let name  = props.match.params.id;
    const GET_ITEMS = gql`
  query Items($name: String){
    items(name:$name){
        name
        id
        price
        owner{
            name
        }
    }
  }
`;

const { loading, error, data} = useQuery(GET_ITEMS ,{
    variables:{name},
})
console.log(data)
if (loading) return "Loading";
if (error) return `Error! ${error}`;
return data.items.map(
    ({ name,price, id }) => (
        <Link>
          <ListItemText inset primary={name}/>
          <ListItemText inset primary={price}/>
          </Link>
))

  }