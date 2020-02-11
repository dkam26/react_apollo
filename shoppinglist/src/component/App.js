import React, {useReducer, useEffect} from 'react';
import '../App.css';



export default function App() {
  const classes = useStyles();
  return (
    <Card className={classes.addForm}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <form className={classes.root} noValidate autoComplete="off">
          <Input defaultValue="Add shoppinglist" inputProps={{ 'aria-label': 'description' }} />
        </form>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Submit</Button>
      </CardActions>
    </Card>
  );
}


