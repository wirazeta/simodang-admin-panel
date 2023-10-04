import {
    Button,
    Tfoot,
    Tr,
    Td,
} from '@chakra-ui/react';

import styles from './TableFooter.module.css';
import ReactPaginate from 'react-paginate';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Paginator } from 'chakra-paginator';
export const TableFooter = (props: any) => {
    const {
        handlePageClick,
        pageCount
    } = props;
    return (
        <div style={styles}>
            <Tfoot className='pagination'>
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </Tfoot>
        </div>
    )
}

TableFooter.propTypes = {
    handlePageClick: PropTypes.func,
    pageCount: PropTypes.number,
}