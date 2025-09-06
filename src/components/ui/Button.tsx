import { memo, type ButtonHTMLAttributes, type ReactNode } from "react";
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "max-w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
  return (
    <button
      className={`${className} ${width} text-white p-2 w-full cursor-pointer rounded-md font-medium`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default memo(Button);
