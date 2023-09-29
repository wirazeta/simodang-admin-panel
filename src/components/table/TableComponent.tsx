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

export default function TableComponent(props: any) {
    const {
        tableComponent
    } = props;
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                   {tableComponent()}
                </Table>
            </TableContainer>
        </>
    )
}

TableComponent.propTypes = {
    tableComponent: PropTypes.func
}