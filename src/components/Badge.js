import React from 'react';
import '../styles/Badge.css';
import logo from '../images/logo.svg';



class Badge extends React.Component{

    render(){

        const {name, lastName, job, twitter, avatar } = this.props;

        return <div className='Badge'>
                    <div className='Badge__header'>
                        <img src={logo} alt='Logo'></img>
                    </div>

                    <div className='Badge__section-name'>
                        <img className='Badge__avatar' src={avatar} alt="Avatar"></img>
                        <h1>{name} <br/> {lastName}</h1>
                    </div>  
                    <div className='Badge__section-info'>
                        <h3>{job}</h3>
                        <div>{twitter}</div>
                    </div>

                    <div className='Badge__footer'>
                        <p>#platziConf</p>
                    </div>
                </div> ;
    }

}

export default Badge;