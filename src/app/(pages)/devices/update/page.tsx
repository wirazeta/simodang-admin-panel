"use client";

import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

import PropTypes from 'prop-types'

export default function UpdateDevicePage(props: any) {
    const {
        column
    } = props

    return (
        <Formik initialValues={
            {
                name: '',
                notificationEnabled: 0,
                isSaved: 0,
                isChanged: 0,
                tempLow: 0,
                tempHigh: 0,
                phLow: 0,
                phHigh: 0,
                tdoLow: 0,
                tdoHigh: 0,
                tdsLow: 0,
                tdsHigh: 0,
                turbiditiesLow: 0,
                turbiditiesHigh: 0,
                userId: 'null',
                masterId: 'null'
            }
        }
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {(props) => (
                <Form>
                    <Field name="name">
                        {({ field, form }: { field: any, form: any }) => (
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input {...field} placeholder="name" />
                            </FormControl>
                        )}
                    </Field>
                    <Button type="submit">Update</Button>
                </Form>
            )}
        </Formik>
    )
}

UpdateDevicePage.propTypes = {
    column: PropTypes.any,
    id: PropTypes.number
}