import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './Home.css';


const Home = () => {

    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);



    useEffect(()=> {

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
            fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));

    },[searchText])


    const searchFood= e => {
        setSearchText(e.target.value);
    }

    return (
        <div >
            <div className="text-center">
            <h2> Find the food you want...</h2>  
            <input onChange={searchFood} type="text" placeholder='search your food item' className='border' />
            <h3> totoal meal {meals.length} </h3>
            </div>

            <div className="foods-container">
                {
                    meals.map(meal=> <Meals meal={meal}> </Meals>)
                }
            </div>

        </div>
    );
};

export default Home;