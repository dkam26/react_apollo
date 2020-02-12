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
const ADDSHOPPINGLISTS = gql`
mutation PostMutation($name: String!){
    postshopplinglist(name: $name){
      name
    }
  }
`;


export default function AddShoppinglist() {
  const classes = useStyles();
  let input;
  const [PostMutation, { data }] = useMutation(ADDSHOPPINGLISTS);

  return (
    <div className={classes.root}>

        <form  noValidate autoComplete="off"
         >
             Add shoppinglist
            <input id="standard-basic" label="Add shoppinglist"  ref={node => {
            input = node;
          }} /><br/>
            <Button variant="contained"                onClick={(e) => {
                         e.preventDefault();
                         PostMutation({variables:{name:input.value}})
                  }
                } >Submit</Button>
        </form>

    </div>

  );

}