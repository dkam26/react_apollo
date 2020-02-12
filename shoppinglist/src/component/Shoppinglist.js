import React from 'react';
import {  useParams } from 'react-router-dom'
export default function Shoppinglist(props) {
    let { id } = props.match.params.id;
 return(props.match.params.id);
  }