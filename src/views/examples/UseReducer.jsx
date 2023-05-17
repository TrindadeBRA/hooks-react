import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {
                    state.user ?
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Deslogado</span> 
                }
                
                <span className="text">{state.number}</span>
                <div><button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button></div>

                <div><button className="btn" onClick={() => dispatch({type: "double"})}>x2</button></div>

                <div><button className="btn" onClick={() => login(dispatch, "Jão")}>login</button></div>

                <div>
                    <input className="input" type="number" value={state.number} onChange={(e) => dispatch({type: "addCustom", number: e.target.value})}/>
                </div>

            </div>
        </div>
    )
}

export default UseReducer
