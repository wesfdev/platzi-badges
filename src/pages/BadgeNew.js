import React from 'react';
import '../styles/BadNews.css'
import header from '../images/badge-header.svg'
import gravatar from '../images/gravatar.png';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {

    state = { 
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: 'Software developer',
            twitter: ''
        } 
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    render(){
        const {firstName, lastName, jobTitle, twitter } = this.state.form;
        const badge = <Badge name={firstName} lastName={lastName} job={jobTitle} twitter={twitter} avatar={gravatar} />;
        const badgeForm = <BadgeForm onChange={this.handleChange} formValues={this.state.form} />;
        return  (
            <div>
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