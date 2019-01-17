import React, { Component } from 'react';
import logo from '../harner-designs-logo.svg';


class Header extends Component {

	render(){
 
		return(<header className="App-header">
          <img className="logo" src={logo} alt="SoleConnect.net"/>
        </header>
        )

		
	}

}


        
export default Header;