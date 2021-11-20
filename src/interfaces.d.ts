import React from "react";

// ITheme is used to determine direction of global theme
export interface ITheme{
    direction: string;
}

export interface ChildrenProps {
    children: React.ReactNode
}