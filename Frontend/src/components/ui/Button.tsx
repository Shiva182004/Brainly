import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${defaultStyles} ${props.fullWidth ? " w-full flex justify-center items-center" : ""} ${
        sizeStyles[props.size]} ${props.loading ? " opacity-45" : ""}`} disabled = {props.loading}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
      {props.text}
      {props.endIcon ? <div className="pr-2">{props.endIcon}</div> : null}
    </button>
  );
};
