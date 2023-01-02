import React from 'react'
import PropTypes from 'prop-types';

class Project extends React.Component{
    render(){
        const { img, textProject, tags, prTitle } = this.props;
        return(
        <div className='Project'>
                <h3>{prTitle}</h3>
                <img src= {img} alt="Projeto X" ></img>
                <p>{textProject}</p>
                <span>{tags}</span>
        </div>
        )
    }
}

Project.prototypes = {
    prTitle:PropTypes.string,
    img: PropTypes.string,
    textProject:PropTypes.string,
    tags:PropTypes.string,
}.isRequired;



export default Project