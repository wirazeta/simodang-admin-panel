"use client";

import { useEffect, useState } from "react";
import TableComponent from "@/components/table/TableComponent";
import { api } from "@/assets/api";
import UpdateDevicePage from "./update/page";
import { Button, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export default function DevicesPage() {
    const [data, setData] = useState([{}]);
    const [openModal, setOpenModal] = useState(false);
    const [deviceItem, setDeviceItem] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await api({
                url: "/devices",
                method: "get",
            });
            setData(response.data);
        }
        fetchData();
        console.log(data);
    }, []);

    const handleUpdate = (item:any) => {
        setOpenModal(true);
        setDeviceItem(item);
    }

    const tableComponent = () => {
        return (
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
                    {data.map((item) => {
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

    return (
        <>
            <TableComponent
                tableComponent={tableComponent}
            />
            <UpdateDevicePage
                data={deviceItem}
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </>
    )
}