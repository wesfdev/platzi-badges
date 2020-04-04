import React from 'react';

class BadgeForm extends React.Component {
    state = {};
      
    handleClick = e =>{
        console.log('Button was clicked')
    }

    handleSubmit = e =>{
        console.log('submitted')
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        const { formValues } = this.props;

        return (
            <React.Fragment>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input onChange={this.props.onChange} className='form-control' type='text' name='firstName'
                         value={formValues.firstName}></input>
                    </div>
                    <div className='form-group'>
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} className='form-control' type='text' name='lastName'
                        value={formValues.lastName}></input>
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input onChange={this.props.onChange} className='form-control' type='email' name='email'
                        value={formValues.email}></input>
                    </div>                                                            
                    <div className='form-group'>
                        <label>Job Tittle</label>
                        <input onChange={this.props.onChange} className='form-control' type='text' name='jobTitle'
                        value={formValues.jobTitle}></input>
                    </div>    
                    <div className='form-group'>
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} className='form-control' type='text' name='twitter'
                        value={formValues.twitter}></input>
                    </div>

                    <button onClick={this.handleClick} className='btn btn-primary'>Save</button>
                </form>
            </React.Fragment>
        );
    }

}

export default BadgeForm;