import { useState, createContext} from "react";

export const NumerosContext = createContext();

export const NumerosContextProvider = ({ children }) => {
    const [pontuacao, setPontuacao] = useState(0);
    const [pontMax, setPontMax] = useState(0);
    const [movimentos, setMovimentos] = useState(0);

    return(
        <NumerosContext.Provider
            value={{
                pontuacao,
                setPontuacao,
                pontMax,
                setPontMax,
                movimentos,
                setMovimentos
            }}
        >

            {children}

        </NumerosContext.Provider>
    );
};