"use client";

import { useEffect, useState } from "react";
import TableComponent from "@/components/table/TableComponent";
import { api } from "@/assets/api";
import UpdateDevicePage from "./update/page";
import { Button, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";

export default function DevicesPage() {
    const [data, setData] = useState([{}]);
    const [openModal, setOpenModal] = useState(false);
    const [deviceItem, setDeviceItem] = useState({});
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentItems, setCurrentItems] = useState<{}[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffSet, setItemOffSet] = useState(0);
    const endOffSet = itemOffSet + itemsPerPage;

    useEffect(() => {
        const fetchData = async () => {
            await api({
                url: "/devices",
                method: "get",
            }).then((response) => {
                setData(response.data);
                setCurrentItems(response.data.slice(itemOffSet, endOffSet));
                setPageCount(Math.ceil(response.data.length / itemsPerPage));
            });
        }
        fetchData();
    }, [itemOffSet, itemsPerPage]);

    // useEffect(() => {
    //     setCurrentItems(data.slice(itemOffSet, endOffSet));
    //     setPageCount(Math.ceil(data.length / itemsPerPage));
    // }, [itemOffSet, itemsPerPage]);

    const handlePageClick = (event: any) => {
        const newOffSet = event.selected * itemsPerPage % data.length;
        setItemOffSet(newOffSet);
    }

    const handleUpdate = (item: any) => {
        setOpenModal(true);
        setDeviceItem(item);
    }

    const tableComponent = () => {
        // console.log("current item: "+currentItems);
        // console.log("Ini data utama" + data);
        return (
            (
                <>
                    <Thead>
                        <Tr>
                            {
                                Object.keys(data[0]).map((item) => {
                                    return (
                                        <Th>{item}</Th>
                                    )
                                })
                            }
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {currentItems.map((item: any) => {
                            return (
                                <>
                                    <Tr>
                                        {
                                            Object.values(item).map((value: any) => {
                                                return (
                                                    <Td>{value}</Td>
                                                )
                                            })
                                        }
                                        <Td>
                                            <Button onClick={() => handleUpdate(item)}>Update</Button>
                                        </Td>
                                        <Td>
                                            <Button>Delete</Button>
                                        </Td>
                                        <Td>
                                            <Button>Detail</Button>
                                        </Td>
                                    </Tr>
                                </>
                            )
                        })}
                    </Tbody>
                </>
            )
        )
    }

    return (
        <>
            <TableComponent
                tableComponent={tableComponent}
            />
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
            <UpdateDevicePage
                data={deviceItem}
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </>
    )
}