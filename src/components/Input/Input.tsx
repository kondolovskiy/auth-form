import React, { useState } from 'react';
import './style.scss';

export type InputProps = {
    name: string;
    type?: string;
    placeholder?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    actionButton?: React.ReactNode;
    error?: string | false;
    showError?: boolean;
    isValid?: boolean;
};

export const Input = ({
    name,
    type = 'text',
    placeholder = '',
    defaultValue = '',
    onChange = () => {},
    onFocus = () => {},
    actionButton,
    error,
    isValid,
    showError = true,
}: InputProps) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange(e);
    };

    return (
        <div className="input-wrapper">
            <div className={`input-container ${isValid ? 'valid' : error ? 'invalid' : ''}`}>
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    onFocus={onFocus}
                    name={name}
                />
                {actionButton && actionButton}
            </div>
            {showError && !!error && <p className="error-message">{error}</p>}
        </div>
    )
};
