import React from 'react';
import logo from '../images/badge-header.svg';
import '../styles/Badges.css'
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';

class Badges extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nextPage:1,
            loading:true,
            error: null,
            data:{
                results:[]
            }
         };
     }

    componentDidMount(){
        this.fetchCharacters();
    }

    fetchCharacters = async () =>{
        this.setState({loading:true, error:null})

        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`);
            const data = await response.json(); 

            this.setState({
                loading:false,
                data: data,
                nextPage: this.state.nextPage + 1
            })           

        } catch (error) {
            this.setState({
                loading:false,
                error:error
            })             
        }


    }



    render(){
        console.log('2. render')
        return (
                <React.Fragment>
                    <div className='Badges'>
                        <div className='Badges__hero'> 
                            <div className='Badges__container'>
                                <img className='Badges_conf-logo' src={logo} alt="Logo"/>
                            </div>
                        </div>
                    </div>

                    <div className='Badges__container'>
                        <div className='Badges__buttons'>
                            <Link to='/badges/new' className='btn btn-primary'>New badge</Link>
                        </div>
                    </div>

                    <div className='Badges__list'>
                        <div className='Badges__container'>
                            <BadgesList 
                            data={this.state.data.results} 
                            loading={this.state.loading} 
                            error={this.state.error}  
                            fetchCharacters={this.fetchCharacters}
                            />
                        </div>
                    </div>

                </React.Fragment>
        );
    }

}

export default Badges;