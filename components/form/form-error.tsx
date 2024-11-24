import { FaExclamationTriangle } from "react-icons/fa";
type FormErrorProps = {
  message?: string;
};

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className=" bg-destructive/15 p-3  w-full rounded-md flex gap-x-3 items-center  ">
      <FaExclamationTriangle className="w-5 h-5 text-destructive" />
      <p className="text-destructive text-sm ">{message}</p>
    </div>
  );
};
