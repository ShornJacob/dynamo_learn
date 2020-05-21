import React from 'react'

export default function Pagination({postsPerPage, totalPosts, setCurrentPage}) {

    let pageNumbers = []

    for(let i = 1 ; i <= Math.ceil(totalPosts/ postsPerPage); i++) {
        pageNumbers = pageNumbers.concat(i)
    }

    return (
       <nav>
           <ul className="pagination">
               {
                   pageNumbers.map( number => (
                       <li key={number} className='page-item'>
                           <a onClick={() => setCurrentPage(number)}  className='page-link' href="#">
                               {number}
                           </a>
                       </li>
                   ))
               }
           </ul>
       </nav>
    )
}
