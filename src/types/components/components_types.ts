import * as React from "react";
import {Meal} from "../data/data_types.ts";


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
    video: string | null,
    link?: string | null
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

export type DetailContainerProps = {
    data: Meal,
    ingredients: string[],
    measures: string[],
}

export type DetailHeaderProps = {
    title: string,
    ingredient_count: number,
    area: string,
    video: string,
}

export type DetailInfoProps = {
    ingredients: string[],
    measures: string[],
    instructions: string,
    youtube: string
}

export type SearchBarProps = {
    setShowSearch: React.Dispatch<React.SetStateAction<boolean>>
}