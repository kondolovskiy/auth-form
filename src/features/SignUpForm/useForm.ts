import { useFormik } from 'formik';
import { validationSchema } from './validation';
import type { FormValues } from './types';
import { InputProps } from '@components/Input/Input';

export const useForm = (onSubmit: (values: FormValues) => void) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            onSubmit(values);
        },
    });

    const getInputProps = (name: 'email' | 'password'): InputProps => {
        return {
            name,
            defaultValue: formik.values[name],
            onChange: formik.handleChange,
            onFocus: () => formik.setFieldTouched(name, false),
            error: formik.touched[name] && formik.errors[name],
            isValid: formik.touched[name] && !formik.errors[name],
        };
    };

    return {
        submit: formik.handleSubmit,
        getInputProps,
        formik,
    };
};