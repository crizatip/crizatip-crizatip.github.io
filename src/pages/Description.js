import React from 'react';
import profile from '../img/profile.png';

class Description extends React.Component {
  render() {
    return (
      <div className='Description'>
        <div className='Description-content'>
          <div>
            <img src={profile} alt='foto de Cristiano Pita'></img>
            <div className='Profile-retangle'></div>
          </div>
          <div className='name'>
            <h1>Cristiano Pita</h1>
            <div className='detail'></div>
          </div>
          <p>
          Sou um desenvolvedor web full-stack formado pela Trybe, com graduação em design. Meu objetivo é integrar habilidades projetuais e metodologias de design ao desenvolvimento web, com o intuito de criar soluções completas e visualmente atraentes.
          </p>
          <div className='Tecnologias'>
            <h3>Tecnologias que mais utilizo:</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Git</li>
              <li>Github</li>
              <li>React Testing Library</li>
              <li>Sass</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
