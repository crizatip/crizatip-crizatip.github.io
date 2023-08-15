import React from 'react';
import github from '../img/icons/GitHub-Logo.svg'
import linkedin from '../img/icons/linkedin.svg'

class Contacts extends React.Component{
    render(){
        return(
            <div className='Contact'>
                <h2>Onde me contactar</h2>
            
                <div className='Contact-icons'>
                    <a href="https://github.com/crizatip" target="_blank" rel="noreferrer">
                        <img src={github} alt="logo github"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/crpita/" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="logo linkedin"></img>
                    </a>
                </div>
                <p>Caso tenha alguma pergunta, duvida ou oportindade pode me enviar um e-mail agora mesmo!</p>
               
                <a className='Contact-mail' href = "mailto:crizatip@gmail.com">Enviar Email</a>

                <p>Design and built <br></br> by Cristiano Pita</p>


            </div>
        )
    }
}

export default Contacts