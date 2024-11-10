import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.tsx";
import {TThemeContext} from "../../types/context/context_types.ts";

const useTheme: () => TThemeContext = (): TThemeContext => useContext(ThemeContext)

export default useTheme;