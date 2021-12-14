import React from 'react';



function Table ({data}) {
    return (
        <div>
            <table className='cities' cellSpacing='15'>
                <thead className='table--font'>
                    <tr>
                        <td>Name</td>
                        <td>Country</td>
                        <td>Image</td>

                    </tr>
                </thead>
                    <tbody className='table--font'>
                        {data.map(data => 
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.country}</td>
                                <td><a href="data.image">{data.image}</a></td>
                            </tr>)
                        }                
                    </tbody>
            </table>
        </div>
    )
}

export default Table