

import { FaCheckCircle } from "react-icons/fa";
interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) {
    return null;
  }
  
  return (
    <div className=" bg-emerald-500/15 p-3 text-emerald-500  rounded-md flex gap-x-2 items-center  ">
      <FaCheckCircle className="w-5 h-5 " />
      <p className="text-emerald-500 tracking-tight text-md">{message}</p>
    </div>
  );
};
