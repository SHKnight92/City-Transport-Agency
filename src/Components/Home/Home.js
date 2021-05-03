import React from 'react';
import Vehicles from '../Vehicles/Vehicles';
import './Home.css';
import fakeData from '../assets/fakeData/index.js'

const Home = () => {
    
    return (
        <div className="home">
            {
                fakeData.map(vehicles => <Vehicles key={vehicles.bedType} vehicles={vehicles}></Vehicles>)
            }
        </div>
    );
};

export default Home;