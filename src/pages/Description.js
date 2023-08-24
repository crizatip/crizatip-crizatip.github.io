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
          Sou Desenvolvedor Web Full Stack, com graduação em Design e pós-graduação em Gestão de Projetos. Meu objetivo é integrar habilidades projetuais e metodologias de Design ao Desenvolvimento Web, com intuito de criar soluções cada vez mais completas, visualmente atraentes e aderentes às necessidades dos usuários.
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
