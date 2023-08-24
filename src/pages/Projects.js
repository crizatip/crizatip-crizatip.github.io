import React from 'react';
import Project from '../components/Project'
import prImg1 from '../img/prImages/musicApp.gif'
import prImg2 from '../img/prImages/pr1.jpg'

class Projects extends React.Component {
    render() { 
        return(
           <div>
                <h2 className="title">Projetos<div className='detail'></div></h2>
               <div className='Projects'>
               <div  className='musicApp'>
                   <a 
                   href="https://crizatip.github.io/trybetunes/">
                       <Project
                        prTitle = "Trybetunes"
                        img = {prImg1}
                        textProject = "Aplicação com solução de reprodução de músicas com variadas bandas, artistas e opção de edição de perfil da pessoa usuária logada."
                        tags = "React Git Redux Tailwind"
                       />
                   </a>
                   </div >
                    <div className='musicApp'>
                        <a
                        href="https://github.com/crizatip">
                          <Project
                        prTitle = "Em desenvolvimento"
                        img = {prImg2}
                        textProject = "Projetos em desenvolvimento. Disponíveis para consulta da evolução através da minha página no GitHub."
                        tags = "React Git Redux"
                                           />
                                           </a>
                    </div>    
               </div>
           </div>
        )
    }
}

export default Projects;