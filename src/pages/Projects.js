import React from 'react';
import Project from '../components/Project'
import prImg1 from '../img/prImages/pr1.jpg'

class Projects extends React.Component {
    render() { 
        return(
           <div>
                <h2 className="title">Projetos</h2>
               <div className='Projects'>
                   <a href="https://crizatip.github.io/trybetunes">
                       <Project
                        prTitle = "Trybetunes"
                        img = {prImg1}
                        textProject = "Aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.."
                        tags = "React Git Redux"
                       />
                   </a>
                      <Project
                    prTitle = "titulo projeto"
                    img = {prImg1}
                    textProject = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper risus orci, ut suscipit mi posuere a. Aenean diam turpis, egestas vel aliquam in, condimentum quis quam."
                    tags = "React Git Redux"
                   />       
               </div>
           </div>
        )
    }
}

export default Projects;