import { ReactNode } from "react";


export type withChildren<T> = T & { children:ReactNode };

