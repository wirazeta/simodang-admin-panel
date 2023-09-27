"use client";
import { useState, useEffect } from "react";
import TableComponent from "@/components/table/TableComponent";
import { api } from "@/assets/api";

export default function MasterPage(){
    const [data, setData] = useState([{}]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/masters');
            setData(response.data);
        }
        fetchData();
    },[])

    return(
        <TableComponent
            columnItem={data}
            rowsItem={Object.keys(data[0])}
        />
    )
}