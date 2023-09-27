"use client";

import { useEffect, useState } from "react";
import TableComponent from "@/components/table/TableComponent";
import { api } from "@/assets/api";

export default function DevicesPage(){
    const [data, setData] = useState([{}]);
    useEffect(() => {
        const fetchData = async() => {
            const response = await api({
                url: "/devices",
                method: "get",
            });
            console.log(response.data);
            setData(response.data);
        }
        fetchData();
        console.log(data);
    },[]);
    const updateDevice = () => {
        
    }
    return(
        <TableComponent
            columnItem={data}
            rowsItem={Object.keys(data[0])}
        />
    )
}