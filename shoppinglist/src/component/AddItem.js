import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
      marginLeft: 471,
      marginTop: 150,
    },
  },
}));
const ADD_ITEM = gql`
mutation postitem($shoppinglistId: String!, $item: String! , $price: Int){
    postitem(shoppinglistId: $shoppinglistId, item: $item, price: $price ){

    }
  }
`;


export default function AddItem() {
  const classes = useStyles();
  let item;
  let price;
  const [postitem, { data }] = useMutation(ADD_ITEM);

  return (
    <div className={classes.root}>

        <form  noValidate autoComplete="off"
         >
             Add item
            <input id="standard-basic" label="Add item"  ref={node => {
            item = node;
          }} /><br/>
           <input id="standard-basic" label="price"  ref={node => {
            price = node;
          }} /><br/>
            <Button variant="contained"                onClick={(e) => {
                         e.preventDefault();
                         postitem({variables:{item:item.value, price:price.value}})
                  }
                } >Submit</Button>
        </form>

    </div>

  );

}