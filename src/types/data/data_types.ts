export interface ICategoryResponse {
    categories: ICategory[];
}

export interface ICategory {
    idCategory:             string;
    strCategory:            string;
    strCategoryThumb:       string;
    strCategoryDescription: string;
}
