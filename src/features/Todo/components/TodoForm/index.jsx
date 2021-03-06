import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/FormControl/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit: null,
};

function TodoForm(props) {
    const schema = yup.object({
        title: yup.string().required('Please enter title..'),
    }).required();

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    })

    const handleSubmit = (values) => {
        // console.log('Todo value :', values);
        const { onSubmit } = props
        if (onSubmit) {
            onSubmit(values)
        }

        // focus form again
        form.reset()
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default TodoForm;