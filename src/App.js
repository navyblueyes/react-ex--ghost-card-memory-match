import React from 'react';
import './App.css';

// image for the pokemon
// https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png

const ghost = [
  { id: 4, name: 'boo' },
  { id: 10, name: 'candy' },
  { id: 77, name: 'pumpkin' },
  { id: 108, name: 'skull' },
  { id: 132, name: 'smile' },
  { id: 133, name: 'witch' },
];

const secondGhost = [...ghost, ...ghost];

function ghostCard({ ghost }) {
  return (
    <div className="card">
      <div className="inner">
        <div className="front">
          <img
            src={`../public/ghosts/${ghost.id}.png`}
            alt={ghost.name}
            width="100"
          />
        </div>
        <div className="back">?</div>
      </div>
    </div>
  )
}

export default function App() {
  return <div className="app">
    <div className="cards">
      Something should be here
      {secondGhost.map((ghost, i) =>(
        <ghostCard key={i} ghost={ghost} />
      ))}
    </div>
  </div>;
}
