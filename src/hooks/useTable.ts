import { useState, useEffect } from 'react';


const calculateRange = (data: any[], rowsPerPage: number) => {
    const range: number[] = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for(let i = 0; i < num; i++){
        range.push(i);
    }
    return range;
}

const sliceData = (data: any[], page:number ,rowsPerPage: number) => {
    return data.slice((page-1) * rowsPerPage, page * rowsPerPage);
}

export const useTable = (data: any[], page:number ,rowsPerPage: number) => {
    const [tableRange, setTableRange] = useState<number[]>([]);
    const [slice, setSlice] = useState<number[]>([]);

    useEffect(() => {
        const range = calculateRange(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
    },[data, setTableRange, page, setSlice]);

    return {slice, range: tableRange};
}