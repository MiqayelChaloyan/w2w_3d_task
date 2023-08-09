import { createContext, useState } from 'react';

export const GlobalDataContext = createContext(undefined);

function GlobalData({ children }) {
    const [videoPath, setVideoPath] = useState();

    return (
        <GlobalDataContext.Provider value={{ videoPath, setVideoPath }}>
            {typeof children === 'function' ? children() : children}
        </GlobalDataContext.Provider>
    );
}

export default GlobalData;