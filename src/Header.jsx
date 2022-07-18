import React from 'react'
import mainLogo from './assets/react_logo.png'
import './index.css'

export default function Header() {
    return (
        <header>
            <div className="content-div">
                <nav className="main-nav">
                <img src={mainLogo} className="nav-logo" />
                    <ul className="nav-items">
                        <li className="nav-item">Pricing</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
  }