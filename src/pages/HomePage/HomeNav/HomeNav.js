import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import './HomeNav.css'

export function HomeNav (props) {
    return (
        <Navigation>
            <ul className="ul-nav">
                <li className="li-nav"><Link>Search</Link></li>
                <li className="li-nav"><Link to="/">Home</Link></li>
                <li className="li-nav"><Link>History</Link></li>
                <li className="li-nav"><Link><div className="user-avatar"></div></Link></li>
            </ul>
        </Navigation>
    )
}

export default HomeNav