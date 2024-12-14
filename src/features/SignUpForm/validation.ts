import type { PasswordRule } from '../../types/PasswordRule';
import * as Yup from 'yup';

export const passwordRules: PasswordRule[] = [
    {
        label: '8 characters or more (no spaces)',
        test: (value) => value.length >= 8 && !/\s/.test(value),
    },
    {
        label: 'Uppercase and lowercase letters',
        test: (value) => /[A-Z]/.test(value) && /[a-z]/.test(value),
    },
    {
        label: 'At least one digit',
        test: (value) => /\d/.test(value),
    },
    // there is requirement for 64 characters in the task but no relevant design for this message in figma. Uncomment if needed
    // {
    //     label: 'No more than 64 characters (no spaces)',
    //     test: (value) => value.length <= 64 && !/\s/.test(value),
    // },
];

export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .matches(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Invalid email address'
        )
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(64, 'Password must be at most 64 characters')
        .matches(/^(?=.*[A-Z])(?=.*\d)[^\s]+$/, 'Password must contain at least one uppercase letter and one digit')
        .required('Password is required'),
});