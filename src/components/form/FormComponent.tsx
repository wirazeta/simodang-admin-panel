import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input
} from "@chakra-ui/react";

import PropTypes from 'prop-types';

import { Formik, Form } from "formik";
import { Field } from "formik";

export default function FormComponent(props: any) {
    const {
        editableVariable,
        FormComponent,
        setOpenModal,
        openModal,
        onSubmit,
    } = props;

    console.log("Ini form component");

    const onClose = () => {
        setOpenModal(false);
    }

    return (
        <Modal isOpen={openModal} onClose={onClose}>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>Update Device</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Formik initialValues={
                            editableVariable
                        }
                            onSubmit={onSubmit}
                        >
                            {(props) => (
                                <Form>
                                    <FormComponent />
                                    <Button type="submit">Update</Button>
                                </Form>
                            )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
}

FormComponent.propTypes = {
    editableVariable: PropTypes.object,
    FormComponent: PropTypes.func,
    onSubmit: PropTypes.func,
    openModal: PropTypes.bool,
    setOpenModal: PropTypes.func
}