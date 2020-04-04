import React from 'react';
import './styles/Home.css';
import stars from '../images/astronauts.svg';
import head from '../images/badge-header.svg';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render(){
        return (
            <div className='Home'>
                <img className='Home__col' src={head} alt='Logo'></img>                
                <img className='Home__col' src={stars} alt='Logo'></img>
                <Link to='/badges/new' className='btn btn-primary'>Start now</Link>
            </div>
        );
    }
}

export default Home;