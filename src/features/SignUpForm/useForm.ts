import { useFormik } from 'formik';
import { validationSchema } from './validation';
import type { FormValues } from './types';

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

    return formik;
};