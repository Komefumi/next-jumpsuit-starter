import { ReactNode } from "react";

export interface WrapperProps {
  children?: ReactNode;
};

export interface BasicLayoutProps extends WrapperProps {
  title?: string;
}
