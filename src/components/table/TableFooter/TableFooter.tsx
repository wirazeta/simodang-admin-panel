import {
    Button,
    Tfoot,
    Tr,
    Td,
} from '@chakra-ui/react';

import styles from './TableFooter.module.css';

import React, { useEffect } from 'react';

export const TableFooter = ({ range, setPage, page, slice}: {range: any[], setPage: Function, page: number, slice: any[]}) => {
    useEffect(() => {
        if(slice.length < 1 && page != 1){
            setPage(page - 1);
        }
    }, [slice, page, setPage]); 

    return (
        <Tfoot>
            {
                range.map((el, index) => (
                    <Button
                        key={index}
                        className={`${page === el ? styles.activeButton : styles.inactiveButton}`}
                        onClick={() => {setPage(el)}}
                    >
                        {el}
                    </Button>
                ))
            }
        </Tfoot>
    )
}