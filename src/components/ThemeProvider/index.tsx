import React from "react";

export interface Theme {
    primaryColor: string;
}
const defaultTheme: Theme = {
    primaryColor: '#FF3535',
}

export default function ThemeProvider({children, theme = defaultTheme}: {children?: React.ReactNode, theme?: Theme}) {
    return (
        <>
            <style jsx global>{`
                * {
                    --primary: ${theme.primaryColor};
                }    
            `}</style>
            {children}
        </>
    )
}