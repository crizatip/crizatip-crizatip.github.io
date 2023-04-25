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
                        textProject = "Aplicação capaz de reproduzir músicas das mais variadas bandas e artistas e editar o perfil da pessoa usuária logada."
                        tags = "React Git Redux Tailwind"
                       />
                   </a>
                   </div >
                    <div className='musicApp'>
                        <a
                        href="https://github.com/crizatip">
                          <Project
                        prTitle = "Projeto em desenvolvimento"
                        img = {prImg2}
                        textProject = "Projeto ainda em desenvolvimento, você pode checar o progresso no meu github."
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