import * as React from "react";

export type IProvidersProps = {
    children: React.ReactNode
}

export interface IFoodCardProps {
    image: string,
    title: string,
    description: string,
    additional: string
}
