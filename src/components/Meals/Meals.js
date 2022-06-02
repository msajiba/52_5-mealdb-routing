import React from 'react';
import './Meals.css';
import { ArrowCircleRightIcon } from '@heroicons/react/solid'


const Meals = (props) => {

    const { idMeal, strArea, strMealThumb, strMeal,} = props.meal;

    return (
        <div className='items'>
            <img  src={strMealThumb} alt="" />
            <h4> {strMeal} </h4>
            <p> <small> {strArea} </small> </p>
            <button> add to <ArrowCircleRightIcon className="w-5"> </ArrowCircleRightIcon>  </button>
            
        </div>
    );
};

export default Meals;