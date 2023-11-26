import React from "react";
export default function DessertsList(props) {
    const lowCalories = props.data
      .filter((dessert) => { return dessert.calories < 500;})
      .sort((a, b) => { return a.calories - b.calories;})
      .map((dessert) => { return <li>{dessert.name} - {dessert.calories} cal</li>;});
    return(
    <ul>
      {lowCalories}
    </ul>)
    
  }
  
   
  