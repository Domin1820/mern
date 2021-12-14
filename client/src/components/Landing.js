import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import axios from 'axios'
import '../App.css'
import Table from './Table'

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
    const [data, setData] = useState([]);
    const [q, setQ] = useState('');

    useEffect(() => {
    
        fetch('http://localhost:5000/cities/all')
        .then((response) => response.json())
        .then((json => setData(json)))
    },[]);

        function search (rows) {
            return rows.filter(
                (row) => row.name.toLowerCase().indexOf(q) > -1);
        }

    return (
        <div className='container'>
            <div>
                <input 
                    type='text'
                    className='col-md-12 input'
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
            </div>
            <div>
                <Table data={search(data)} />
            </div>
        </div>

    )
} 
  
 
 
// export default QuoteList
export default Welcome