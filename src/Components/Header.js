import React, { Component } from 'react'
import hamburger from '../Media/hamburger.png'
// import logo from '../Media/logo'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            toggleShow: false
        }
    }

    toggleShowFunc = () => {
        this.setState({
            toggleShow: true
        })
    }

    render() {
        return <div className='background'>
            <nav className='nav-bar'>
            <div>
                <h1 className='logo'>Start Bootstrap</h1>
            </div>
            
            <div>
                <button className='button'>MENU <img src={hamburger} alt='menu' className='hamburger'
                onClick={this.toggleShowFunc}/></button>
                <ul className={`nav-items ${this.state.toggleShow ? 'hidden' : ''}`}>
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </nav>
        
    </div>
    }
}

export default Header