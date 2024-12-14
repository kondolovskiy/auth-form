import Input from '@components/Input';
import Password from '@components/Password';
import Button from '@components/Button';
import { passwordRules } from './validation';
import { SignUpFormProps } from './types';
import { useForm } from './useForm';
import './styles.scss';

export const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
    const { submit, getInputProps } = useForm(onSubmit);

    return (
        <div className="sign-up-form">
            <form onSubmit={submit} noValidate>
                <h1 className="sign-up-form__title">Sign Up</h1>
                <Input
                    {...getInputProps('email')}
                    placeholder="Email"
                />
                <Password
                    {...getInputProps('password')}
                    passwordRules={passwordRules}
                    placeholder="Create your password"
                />
                <Button title="Sign up" type="submit" />
            </form>
        </div>
    );
};
