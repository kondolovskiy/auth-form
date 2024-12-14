import Input from '@components/Input';
import Password from '@components/Password';
import Button from '@components/Button';
import { passwordRules } from './validation';
import { SignUpFormProps } from './types';
import { useForm } from './useForm';
import './styles.scss';

export const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
    const formik = useForm(onSubmit);

    const getProps = (name: 'email' | 'password') => {
        return {
            name,
            defaultValue: formik.values[name],
            onChange: formik.handleChange,
            onFocus: () => formik.setFieldTouched(name, false),
            error: formik.touched[name] && formik.errors[name],
            isValid: formik.touched[name] && !formik.errors[name],
        };
    };

    return (
        <div className="sign-up-form">
            <form onSubmit={formik.handleSubmit} noValidate>
                <h1 className="sign-up-form__title">Sign Up</h1>
                <Input
                    {...getProps('email')}
                    placeholder="Email"
                />
                <Password
                    {...getProps('password')}
                    passwordRules={passwordRules}
                    placeholder="Create your password"
                />
                <Button title="Sign up" type="submit" />
            </form>
        </div>
    );
};
