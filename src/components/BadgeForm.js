import React from 'react';

class BadgeForm extends React.Component {

    handleChange = (value) =>{
        console.log(value.target.value, value.target.name)
    }

    handleClick = (value) =>{
        console.log('Button was clicked')
    }

    render(){
        return (
            <div>
                <h1>New Attendant</h1>
                <form>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input onChange={this.handleChange} className='form-control' type='text' name='firstName'></input>
                    </div>

                    <button type='button' onClick={this.handleClick} className='btn btn-primary'>Save</button>
                </form>
            </div>
        );
    }

}

export default BadgeForm;