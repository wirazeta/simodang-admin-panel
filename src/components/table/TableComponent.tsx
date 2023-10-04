import PropTypes from 'prop-types'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
} from '@chakra-ui/react'
import { TableFooter } from './TableFooter/TableFooter';

export default function TableComponent(props: any) {
    const {
        tableComponent,
        handlePageClick,
        pageCount,
    } = props;
    return (
        <div>
            <TableContainer>
                <Table variant='simple'>
                    {tableComponent()}
                    <TableFooter
                        handlePageClick={handlePageClick}
                        pageCount={pageCount}
                    />
                </Table>
            </TableContainer>
        </div>
    )
}

TableComponent.propTypes = {
    tableComponent: PropTypes.func,
    handlePageClick: PropTypes.func,
    pageCount: PropTypes.number
}