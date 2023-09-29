"use client";

import { useState, useEffect } from "react";

import {
    Input,
    FormControl,
    FormLabel,
    Switch,
    Select,
    Stack,
} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import FormComponent from "@/components/form/FormComponent";
import { api } from "@/assets/api";
import { Field } from "formik";

export default function UpdateDevicePage(props: any) {
    const {
        data,
        openModal,
        setOpenModal
    } = props;

    console.log("Ini update device");

    const [users, setUser] = useState([{}]);
    const [masters, setMaster] = useState([{}]);

    // const editableVariable =
    // {
    //     name: data.name,
    //     notificationEnabled: data.notificationEnabled,
    //     notificationCount: data.notificationCount,
    //     isSaved: data.isSaved,
    //     isChanged: data.isChanged,
    //     autoWaterEnabled: data.autoWaterEnabled,
    //     tempLow: data.tempLow,
    //     tempHigh: data.tempHigh,
    //     phLow: data.phLow,
    //     phHigh: data.phHigh,
    //     tdoLow: data.tdoLow,
    //     tdoHigh: data.tdoHigh,
    //     tdsLow: data.tdsLow,
    //     tdsHigh: data.tdsHigh,
    //     turbiditiesLow: data.turbiditiesLow,
    //     turbiditiesHigh: data.turbiditiesHigh,
    //     userId: data.userId,
    //     masterId: data.masterId
    // }


    const editableVariable = {
        "name": "Wira"
    }

    const onSubmit = async (values: any) => {
        await api({
            url: `/devices/${data.id}`,
            method: 'patch',
            data: values,
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    }

    const selectItemUser = () => {
        useEffect(() => {
            const fetchData = async () => {
                const response = await api.get('/users');
                setUser(response.data);
            }
            fetchData();
        }, []);
    }

    const selectItemMaster = () => {
        useEffect(() => {
            const fetchData = async () => {
                const response = await api.get('/masters');
                setMaster(response.data);
            }
            fetchData();
        }, []);
    }

    const formComponent = () => {
        return (
            <>
                <Field name="name">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input {...field} placeholder="Name" />
                        </FormControl>
                    )}
                </Field>
                <Field name="notificationEnabled">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Notification Enabled</FormLabel>
                            <Switch {...field} placeholder="Notification Enabled" onChange={(event) => {
                                console.log(field);
                                if (event.target.checked === true) {
                                    field.value = 1;
                                } else {
                                    field.value = 0;
                                }
                            }} />
                        </FormControl>
                    )}
                </Field>
                <Field name="notificationCount">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Notification Count</FormLabel>
                            <Input {...field} placeholder="Notification Count" />
                        </FormControl>
                    )}
                </Field>
                <Field name="isSaved">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Saved</FormLabel>
                            <Switch {...field} onChange={(event) => {
                                if (event.target.checked === true) {
                                    field.value = 1;
                                } else {
                                    field.value = 0;
                                }
                            }} />
                        </FormControl>
                    )}
                </Field>
                <Field name="isChanged">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Changed</FormLabel>
                            <Switch {...field} onChange={(event) => {
                                if (event.target.checked === true) {
                                    field.value = 1;
                                } else {
                                    field.value= 0;
                                }
                            }} />
                        </FormControl>
                    )}
                </Field>
                <Field name="autoWaterEnabled">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Auto Water</FormLabel>
                            <Switch {...field} onChange={(event) => {
                                if (event.target.checked === true) {
                                    field.value = 1;
                                } else {
                                    field.value = 0;
                                }
                            }} />
                        </FormControl>
                    )}
                </Field>
                <Field name="tempLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Temp Low</FormLabel>
                            <Input {...field} placeholder="Temp Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tempLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Temp Low</FormLabel>
                            <Input {...field} placeholder="Temp Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tempHigh">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Temp High</FormLabel>
                            <Input {...field} placeholder="Temp High" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="phLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>pH Low</FormLabel>
                            <Input {...field} placeholder="pH Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="phHigh">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>pH High</FormLabel>
                            <Input {...field} placeholder="pH High" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tdoLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>TDO Low</FormLabel>
                            <Input {...field} placeholder="TDO Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tdoHigh">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>TDO High</FormLabel>
                            <Input {...field} placeholder="TDO High" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tdsLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>TDS Low</FormLabel>
                            <Input {...field} placeholder="TDS Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tdsHigh">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>TDS High</FormLabel>
                            <Input {...field} placeholder="TDS High" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="turbiditiesLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Turbidities Low</FormLabel>
                            <Input {...field} placeholder="Turbidities Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="turbiditiesHigh">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Turbidities High</FormLabel>
                            <Input {...field} placeholder="Turbidities High" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="userId">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>User</FormLabel>
                            <Stack {...field} spacing={3} onChange={selectItemUser}>
                                {
                                    users.map((user: any) => {
                                        return (
                                            <Select variant='outline' value={user.id}>{user.name}</Select>
                                        )
                                    })
                                }
                            </Stack>
                        </FormControl>
                    )}
                </Field>
                <Field name="masterId">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Master</FormLabel>
                            <Stack {...field} spacing={3} onChange={selectItemMaster}>
                                {
                                    masters.map((master: any) => {
                                        return (
                                            <Select variant='outline' value={master.id}>{master.name}</Select>
                                        )
                                    })
                                }
                            </Stack>
                        </FormControl>
                    )}
                </Field>
            </>
        )
    }

    return (
        <FormComponent
            editableVariable={editableVariable}
            onSubmit={onSubmit}
            FormComponent={formComponent}
            openModal={openModal}
            setOpenModal={setOpenModal}
        />
    )
}

UpdateDevicePage.propTypes = {
    data: PropTypes.object,
    openModal: PropTypes.bool,
    setOpenModal: PropTypes.func
}