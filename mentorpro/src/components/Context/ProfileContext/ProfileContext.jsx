import {createContext , useEffect, useReducer} from 'react'
import reducer from './Reducer'
import PropTypes from 'prop-types'

const INITIAL_STATE = {
    ui: JSON.parse(localStorage.getItem("ui")) || 'profile',
}

export const Context = createContext(INITIAL_STATE);


export const UiContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem("ui", JSON.stringify(state.ui))
    }, [state.ui])

    return (
        <Context.Provider value={{
            ui: state.ui,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}
UiContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
