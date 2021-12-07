import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

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

 
// const QuoteList = ({quotes}) =>
//   quotes.map(quote => <li key={quote}>{quote}</li>)

export const Citydb = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    axios
        .get('http://localhost:5000/cities/all')
        .then(res => {
            setPosts(res.data)
        })
      .catch(err => console.log(err));
        }
    )
    return (
        <div>
            <ul>
                {
                posts.map(posts => <li key={posts.id}>{posts.name}</li>)
                }
            </ul>
        </div>
    )
} 
  
 
 
// export default QuoteList
export default Welcome