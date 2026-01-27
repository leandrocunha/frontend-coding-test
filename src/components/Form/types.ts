export interface FormProps {
    handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    taskTitle: string;
    setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
}