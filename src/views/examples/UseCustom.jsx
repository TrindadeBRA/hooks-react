import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'


const UseRef = (props) => {

    const [count, inc, dec] = useCounter(999)

    // const url = 'https://files.cod3r.com.br/curso/react/estados.json'
    const url = 'https://gist.githubusercontent.com/henriquejensen/1032c47a44d2cddaa2ef47fc531025db/raw/c58fdc848baf2a1fb53e617a0ad4e9754ec68e35/json-estados-brasileiros'
    const response = useFetch(url)

    function showStates(states){
        console.log(states.UF)
        return states.UF.map(state => <li key={state.sigla}>{state.nome} - {state.sigla}</li>)
    }


    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={inc}>+1</button>
                    <button className="btn" onClick={dec}>-1</button>
                </div>
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <ul>
                    {response.data ? showStates(response.data) : false}
                </ul>
            </div>

        </div>
    )
}

export default UseRef



