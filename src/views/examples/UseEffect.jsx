import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {

    // Exercicio 01
    function calcFatorial(num){
        const n = parseInt(num)
        if (n < 0) return -1
        if (n === 0) return 1
        return calcFatorial(n - 1) * n
    }

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        if(fatorial > 1000000){
            document.title = "Mais de 1M!"
        } else {
            document.title = "React app"
        }
    }, [fatorial])


    // Exercicio 02
    const [status, setStatus] = useState("Impar")

    useEffect(function() {
        setStatus(number % 2 === 0 ? "Par" : "Impar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                <input type="number" class="input" value={number} onChange={(e) => setNumber(+e.target.value)}/>
            </div>

            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <span className="text">Status: {number}</span>
                {/* <span className="text red">{number % 2 === 0 ? "Par" : "Impar"}</span> */}
                <span className="text red">{status}</span>
            </div>

        </div>
    )
}

export default UseEffect
