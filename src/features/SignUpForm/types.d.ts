export type SignUpFormProps = {
    onSubmit: (values: FormValues) => void;
};

export interface FormValues {
    email: string;
    password: string;
}
