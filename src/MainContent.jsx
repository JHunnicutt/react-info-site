import React from 'react'
import './index.css'

export default function MainContent() {
    return (
        <div className='main-content'>
            <div className="content-div">
                <h1>Fun facts about React</h1>
                <ul className="react-list">
                    <li className="react-list--item">Was first released in 2013</li>
                    <li className="react-list--item">Was originally created by Jordan Walke</li>
                    <li className="react-list--item">Has well over 100K stars on Github</li>
                    <li className="react-list--item">Is maintained by Facebook</li>
                    <li className="react-list--item">Powers thosands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </div>
    )
  }