import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
const burger = (props) => {
    let transormedIngredients = Object.keys(props.ingredients).map(
        igKey => {
            return [...Array(props.ingredients[igKey])].map(
                (_,i)=> {
                 return   <BurgerIngredients key = {igKey + i } type={igKey}/>;
                }
            );
        }
    )
    .reduce((arr,el)=>{return   arr.concat(el)},[]);
    if(transormedIngredients.length === 0 ){
        transormedIngredients = <p>Please start adding ingredients to your Burger</p>
    }
    return(
        <div className = {classes.Burger}>
        <BurgerIngredients type="bread-top" />
       {transormedIngredients}
         <BurgerIngredients type="bread-bottom" />
            </div>

    )
};
export default burger;