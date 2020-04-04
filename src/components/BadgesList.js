import React from 'react';
import '../styles/BadgesList.css'
import '../styles/Badge.css';

class BadgesList extends React.Component {
    render(){
        const { data, loading, error, fetchCharacters } = this.props;

        return (
            <div className="BadgesList">
                
                {!loading && (
                    <div>
                        <button className='btn btn-primary' onClick={fetchCharacters}>Siguiente</button>
                        <br/><br/>
                    </div>
                )}                
                        
            <ul className='list-unstyled'>
        
                {!loading && data.map((badge)=>{
                    return (
                        <li className='BadgesListItem' key={badge.id}>
                            <div className='Badge__section-name'>
                                <img className='Badge__avatar' src={badge.image} alt='Logo'></img>
                                {badge.name} 
                            </div>
                        </li>
                    )
                })}
            </ul>

            {loading && (
                <div> Cargando...</div>
            )}

            {error && (
                <div>error</div>
            )}

            </div>
        );
    }
}

export default BadgesList;