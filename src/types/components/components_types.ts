import * as React from "react";

export type IProvidersProps = {
    children: React.ReactNode
}

export interface IFoodCardProps {
    id: string | null,
    image: string | null,
    title: string | null,
    description: string | null,
    area: string | null,
    vegan: boolean | null,
    video: string | null
}

export type ISkeletonProps = {
    width?: string,
    height?: string,
    borderRadius?: string,
    gridArea?: string,
}


export type LoadingContainerProps = {
    heightC?: string,
    widthC?: string,
    heightI?: string,
    widthI?: string,
}

export type DetailHeaderProps = {
    title: string,
    ingredient_count: number,
    area: string,
    video: string,
}