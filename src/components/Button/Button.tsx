import './style.css';

type ButtonProps = {
    title: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
};

export const Button = ({ title, type = 'button', onClick }: ButtonProps) => {
    return <button className="submit-button" type={type} onClick={onClick}>{title}</button>;
};
