import { default as React } from "react";
interface NotFoundProps {
  message?: string;
  styles?: {
    primaryColor?: string;
    secondaryColor?: string;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    inputFocusColor?: string;
  };
}
declare const NotFound: React.FC<NotFoundProps>;
export default NotFound;
