"use client";

import { useEffect, useState } from "react";
import TableComponent from "@/components/table/TableComponent";
import { api } from "@/assets/api";
import UpdateDevicePage from "./update/page";
import { Button, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
// import { useTable } from "@/hooks/useTable";
// import { TableFooter } from "@/components/table/TableFooter/TableFooter";


function TableComponent ({data, handleUpdate}: {data: any[], handleUpdate:Function}) {
    return
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
                {data.map((item: any) => {
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

}

export default function DevicesPage() {
    const [data, setData] = useState([{}]);
    const [openModal, setOpenModal] = useState(false);
    const [deviceItem, setDeviceItem] = useState({});

    const handleUpdate = (item: any) => {
        setOpenModal(true);
        setDeviceItem(item);
    }

    const paginatedItems = ({ itemsPerPage }: { itemsPerPage: number }) => {
        const [currentItems, setCurrentItems] = useState({});
        const [pageCount, setPageCount] = useState(0);
        const [itemOffSet, setItemOffSet] = useState(0);

        useEffect(() => {
            const fetchData = async () => {
                const response = await api({
                    url: "/devices",
                    method: "get",
                });
                setData(response.data);
            }
            fetchData();
            const endOffSet = itemOffSet + itemsPerPage;
            setCurrentItems(data.slice(itemOffSet, endOffSet));
            setPageCount(Math.ceil(data.length / itemsPerPage));
        }, [itemOffSet, itemsPerPage]);

        const handlePageClick = (event: any) => {
            const newOffSet = event.selected * itemsPerPage % data.length;
            setItemOffSet(newOffSet);
        }
    }
    return (
        <>
            {/* <TableComponent
                tableComponent={<TableComponent data={currentItems}/>}
            /> */}
            <UpdateDevicePage
                data={deviceItem}
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </>
    )
}