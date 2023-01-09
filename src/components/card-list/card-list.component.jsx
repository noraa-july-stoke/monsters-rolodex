// import { Component } from 'react';
import Card from '../card/card.component'
import './card-list.styles.css';

//({monsters}) -> this is destructuring "props" as monsters.
const CardList = ({monsters}) => {

    return (
        <div className='card-list'>
            {monsters.map(monster => {
                return (
                    <Card
                        className={'card-container'}
                        monster={monster}
                        key={monster.id}
                    />
                )
                })}
            </div>
    )
}

// class CardList extends Component {
//     render () {
//         const { monsters } = this.props;
//         return (
//             <div className='card-list'>
//                 {monsters.map(monster => {
//                     return (
//                         <Card
//                             className={'card-container'}
//                             monster={monster}
//                             key={monster.id}
//                         />
//                     )
//                 })}
//             </div>
// )}};


export default CardList;


//render happens when state is updated or props change
// if compnents aren't updating it's probbly because of this
