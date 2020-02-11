import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const SHOPPINGLISTS = gql`
  {
    shoppinglists{
        name
    }
  }
`;
const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      marginLeft: 459,
      marginTop: 100,
    },
  }));
export default function Shoppinglists() {
    const classes = useStyles();
    const { loading, error, data } = useQuery(SHOPPINGLISTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        return data.shoppinglists.map(({ name }) => (
            <ListItem button>
                <ListItemText inset primary={name} />
            </ListItem>
        ));
  }
