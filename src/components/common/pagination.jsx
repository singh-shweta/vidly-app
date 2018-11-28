import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = props => {
  const {
    itemsCount,
    pageSize,
    onPageChange: handlePageChange,
    currentPage
  } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  if (pagesCount === 1) {
    return null;
  }

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => handlePageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes;
export default Pagination;
