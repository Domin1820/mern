import React, {Component} from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <p>Welcome</p>
        </div>
    )
}

export const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid d-flex justify-content-around nav-height">
                <Link className="navbar-brand" to="/welcome">Home</Link>
                <Link className="navbar-brand" to="/cities">Cities</Link>
                {/* <Link className="navbar-brand" to="/schedule">Game Information</Link>
                <Link className="navbar-brand" to="/chat">Chat</Link> */}
            </div>
        </nav>
    )
}
export class Cities extends Component {
    render () {
    return (
        <div>
            <p>Cities</p>
        </div>
        )
    }
}


export default Welcome