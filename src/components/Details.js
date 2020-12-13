import React, { Fragment } from 'react';

import Pagination from '../hooks/Pagination';

const Details = ({ data, itemsPerPage, startFrom }) => {
  const { slicedData, pagination, prevPage, nextPage, changePage } = Pagination({ itemsPerPage, data, startFrom });
  
  return(
    <Fragment>
      <table className="table  table-bordered">
        <thead>
          <tr className="table-info">
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Job</th>
            <th>City</th>
            <th>Phone</th>
            <th>Fav Movie</th>
          </tr>
        </thead>
        <tbody>
          {slicedData.map(item => (

            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.company}</td>
              <td>{item.job}</td>
              <td>{item.city}</td>
              <td>{item.phone}</td>
              <td>{item.favmovie}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="pagination">
        <a href="/#" className="pagination-previous bg-light b-warning" onClick={prevPage}>Previous</a>
        <a href="/#" className="pagination-next bg-light b-warning" onClick={nextPage}>Next</a>
        <ul className="pagination-list ">
          {pagination.map(page => {
              if(!page.ellipsis) {
                return <li key={page.id}>
                  <a 
                    href="/#"
                    className={page.current ? 'pagination-link is-current bg-warning' : 'bg-light pagination-link '}
                    onClick={(e) => changePage(page.id, e)}
                  >
                    {page.id}
                  </a>
                </li>
              }else {
                return <li key={page.id}><span className="pagination-ellipsis">&hellip;</span></li>
              }
          })}
        </ul>
      </nav>
    </Fragment>
  );
}

export default Details;