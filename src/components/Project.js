import React from 'react';
import PropTypes from 'prop-types';

class Project extends React.Component {
  render() {
    const { img, textProject, tags, prTitle } = this.props;
    return (
      <div className='Project'>
        <img src={img} alt='Projeto X'></img>
        <p>{textProject}</p>
        <div>
          <div>
            <h3>{prTitle}</h3>
            <span>{tags}</span>
          </div>
        </div>
      </div>
    );
  }
}

Project.prototypes = {
  prTitle: PropTypes.string,
  img: PropTypes.string,
  textProject: PropTypes.string,
  tags: PropTypes.string,
}.isRequired;

export default Project;
