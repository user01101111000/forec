import {Context, createContext, FC, JSX, useState} from "react";
import {ETheme, TThemeContext, TThemeContextProviderProps} from "../types/context/context_types.ts";


const ThemeContext: Context<TThemeContext> = createContext<TThemeContext>({
    theme: ETheme.LIGHT,
    changeTheme: (): void => {
    },
})

const ThemeContextProvider: FC<TThemeContextProviderProps> = (props: TThemeContextProviderProps): JSX.Element => {

    const current_theme: ETheme = localStorage.getItem('theme') as ETheme ?? ETheme.LIGHT;

    document.body.setAttribute('data-theme', current_theme);

    const [theme, setTheme] = useState<ETheme>(current_theme);

    function changeTheme(): void {
        setTheme((theme: ETheme): ETheme => {
            const current_theme: ETheme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
            localStorage.setItem('theme', current_theme);

            document.body.setAttribute('data-theme', current_theme);

            return current_theme;
        })
    }

    const data: TThemeContext = {
        theme,
        changeTheme,
    }

    return <ThemeContext.Provider value={data}>{props.children}</ThemeContext.Provider>
}


export {ThemeContextProvider, ThemeContext}