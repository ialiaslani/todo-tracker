import {createContext, useState} from "react";


export const ThemeContext  = createContext()

export const ThemeProvider = (props) => {


    const [theme, setTheme] = useState({
        mode: 'light',
        taskBackgroundColor: 'black',
        taskColor: 'white',
        deleteBtnColor: 'orange'
    })

    return (
      <ThemeContext.Provider value={[theme, setTheme]} children={props.children} />
    );
}