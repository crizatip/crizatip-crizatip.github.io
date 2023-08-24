import React from 'react';
import darkmode_icon from '../img/icons/darkmode.svg'
class DarkmMode extends React.Component {
    constructor() {
        super();
    
        this.state = {
            darkmode: 'white',
        };
      }
      
      componentDidMount = () => {
        this.setState({darkmode: 'white',})
        this.darkmodeHanddler()   
    }

      bgHandle = () => {
        const {darkmode} = this.state
        if(darkmode === 'black'){
            document.querySelector("body").setAttribute('data-theme', 'dark')
        }else{
             document.querySelector("body").setAttribute('data-theme', 'white')
        }
    }

    darkmodeHanddler = () => {
    const {darkmode} = this.state
        if (darkmode === 'white'){
            this.setState({darkmode: 'black',})
        } else {
            this.setState({darkmode: 'white',})
        }
        this.bgHandle()
    } 

   

    render() {
        const {darkmode} = this.state
    return (
      <div 
      className='button_darkmode'
      onClick={this.darkmodeHanddler}>
        <img src={darkmode_icon} alt="darkmode" className={darkmode}></img>
      </div>
    );
  }
}

export default DarkmMode;
