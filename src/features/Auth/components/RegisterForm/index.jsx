import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/FormControl/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';




RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};
RegisterForm.defaultProps = {
    onSubmit: null,
};

function RegisterForm(props) {
    const schema = yup.object({
        title: yup.string().required('Please enter title..'),
    }).required();

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
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
        <div>
            <Avatar sx={{ bgcolor: 'secondary.main' }} >
                <LockOutlined />
            </Avatar>

            <Typography component='h3' variant='h4' color="text.secondary" align="center">
                Create An Account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <InputField name="password" label="Password" form={form} />
                <InputField name="retypePassword" label="Retype Password" form={form} />

                <Button variant='contained' color='primary'>
                    Register
                </Button>
            </form>
        </div >
    );
}

export default RegisterForm;