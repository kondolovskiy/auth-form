export type SignUpFormProps = {
    onSubmit: (values: FormValues) => void;
};

export type FormValues = {
    email: string;
    password: string;
}
