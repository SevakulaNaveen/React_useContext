import { createContext } from "react"

const FruitContext = createContext();

export const FruitProvider = ({ children }) => {
    const fruits = [
        { id: 1, name: 'Apple', price: 1.5 },
        { id: 2, name: 'Banana', price: 0.5 },
        { id: 3, name: 'Cherry', price: 2.0 },
        { id: 4, name: 'Date', price: 3.0 },
        { id: 5, name: 'Elderberry', price: 4.0 }
    ];

    return (
        <FruitContext.Provider value={{ fruits }}>
            {children}
        </FruitContext.Provider>
    )
}

export default FruitContext;