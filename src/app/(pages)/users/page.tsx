"use client";

import { useState, useEffect } from "react";
import TableComponent from "@/components/table/TableComponent";
import { api } from "@/assets/api";

export default function UserPage() {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        const fetchData = async () => {
            await api.get('/users').then((response) => {
                response.data.map((item: any) => {
                    delete item.token;
                })
                setData(response.data);
            }).catch((err) => {
                throw err;
            })
        }
        fetchData();
    }, []);

    const updateFunction = () => {
        console.log("Hello World");
    }

    return (
        <TableComponent
            rowsItem={Object.keys(data[0])}
            columnItem={data}
            updateHidden={false}
        />
    );
}