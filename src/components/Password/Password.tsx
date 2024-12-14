import { useState } from 'react';
import Input, { InputProps } from '../Input';
import type { PasswordRule } from '../../types/PasswordRule';
import { HideIcon, ShowIcon } from '../Icons';
import './styles.css';

type PasswordProps = InputProps & {
    passwordRules?: PasswordRule[];
};

export const Password = ({ passwordRules, error, ...props }: PasswordProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const value = props.defaultValue || '';

    const getRuleClass = (rule: PasswordRule) => {
        return (rule.test(value) ? 'valid' : (!!error ? 'invalid' : ''));
    };

    const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <Input 
                type={showPassword ? 'text' : 'password'} 
                placeholder="Password" 
                actionButton={
                    <button className="show-password-button" onClick={handleShowPassword}>
                        {showPassword ? (<HideIcon />) : (<ShowIcon />)}
                    </button>
                }
                error={error}
                showError={false}
                {...props}
            />
            {passwordRules && (
                <ul className="password-rules">
                    {passwordRules.map((rule, index) => (
                        <li 
                        key={index}
                        className={`
                            rule-item 
                            ${getRuleClass(rule)}
                        `}
                    >
                        {rule.label}
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
};
