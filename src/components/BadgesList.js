import React from 'react';
import '../styles/BadgesList.css'

class BadgesList extends React.Component {
    render(){
        const { data } = this.props;

        return (
            <div className="BadgesList">
            <ul className='list-unstyled'>
                {data.map((badge)=>{
                    return (
                        <li className='BadgesListItem' key={badge.id}>{badge.firstName} {badge.lastName}</li>
                    )
                })}
        </ul>                  
            </div>
        );
    }
}

export default BadgesList;