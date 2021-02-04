import React, { Component } from 'react'
// import hamburger from '../Media/hamburger'
import startbootstrap from '../Media/startbootstrap'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            toggleShow: false
        }
    }

    render() {
        return <header>
            <div>
                <img src={startbootstrap} />
            </div>
        </header>
    }
}

export default Header