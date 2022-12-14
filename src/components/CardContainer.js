import React from 'react';
import Gamecard from '../components/Gamecard';
import '../styles/cardcontainer.css';

function CardContainer(props) {
    const { characters, selectCard } = props

    const chara = characters.map(character => <Gamecard character={character} key={character.id} selectCard={selectCard}/>)

  return (
    <div className='card-container'>
        {chara}
    </div>
  )
}

export default CardContainer