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
        rowsItem,
        columnItem,
        deleteHidden,
        updateHidden,
        detailHidden,
        functionUpdate,
    } = props;
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            {
                                rowsItem.map((item: any) => {
                                    return (
                                        <>
                                            <Th>{item}</Th>
                                        </>
                                    )
                                })
                            }
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            columnItem.map((item: any) => {
                                return (
                                    <>
                                        <Tr>
                                            {
                                                Object.values(item).map((value:any) => {
                                                    return(
                                                        <Td>{value}</Td>
                                                    )
                                                })
                                            }
                                            {
                                                <Td>
                                                    <Button
                                                        hidden={deleteHidden}
                                                    >Delete</Button>
                                                </Td>
                                            }
                                            {
                                                <Td>
                                                    <Button
                                                        hidden={updateHidden}
                                                        onClick={functionUpdate}
                                                    >Update</Button>
                                                </Td>
                                            }
                                            {
                                                <Td>
                                                    <Button
                                                        hidden={detailHidden}    
                                                    >Detail</Button>
                                                </Td>
                                            }
                                        </Tr>
                                    </>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

TableComponent.propTypes = {
    rowsItem: PropTypes.array,
    columnItem: PropTypes.array,
    deleteHidden: PropTypes.bool,
    updateHidden: PropTypes.bool,
    detailHidden: PropTypes.bool,
    functionUpdate: PropTypes.func,
}