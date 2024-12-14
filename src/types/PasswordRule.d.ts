export type PasswordRule = {
    label: string;
    test: (value: string) => boolean;
}