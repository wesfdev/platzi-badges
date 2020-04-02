import React from 'react';
import '../styles/BadNews.css'
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg'
import gravatar from '../images/gravatar.png';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    render(){
        const name = 'Wesly';
        const lastName = 'Fernández';
        const job = 'Software developer';
        const twitter = '@wfernandez';

        const badge = <Badge name={name} lastName={lastName} job={job} twitter={twitter} avatar={gravatar} />;
        const badgeForm = <BadgeForm/>;
        return  (
            <div>
                <Navbar/>
                <div className='BadgeNew__hero'>
                    <img className='image-fluid' src={header} alt='Logo'></img>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            { badge }
                        </div>
                        <div className='col-6'>
                            { badgeForm }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default BadgeNew;