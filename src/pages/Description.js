import React from 'react';
import profile from '../img/profile.png';

class Description extends React.Component {
  render() {
    return (
      <div className='Description'>
        <div className='Description-content'>
          <h1>Cristiano Pita</h1>
          <p>
            Sou desenvolvedor web atualmente estudando na trybe, cursando o
            modulo de back-end. Por formação sou designer e busco integrar meus
            conhecimentos projetuais e métodologias de design com
            desenvolvimento web.
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
          <img src={profile} alt='foto de Cristiano Pita'></img>
          <div className='Profile-retangle'></div>
        </div>
      </div>
    );
  }
}

export default Description;
