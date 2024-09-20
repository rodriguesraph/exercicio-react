import { useState } from "react"
import './calc.css'

const Calc = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    function calculaIMC(){
        const imc = peso / (altura * altura);

        if (imc >= 40) {
            return (
                <p>Seu IMC é de {imc}. Você está com Obesidade Grau III.</p>
            )
        } else if (imc < 40 && imc >= 35) {
            return (
                <p>Seu IMC é de {imc}. Você está com Obesidade Grau II.</p>
            )
        } else if (imc < 35 && imc >= 30) {
            return (
                <p>Seu IMC é de {imc}. Você está com Obesidade Grau I.</p>
            )
        } else if (imc < 30 && imc >= 25) {
            return (
                <p>Seu IMC é de {imc}. Você está com Sobrepeso.</p>
            )
        } else if (imc < 25 && imc > 18.5) {
            return (
                <p>Seu IMC é de {imc}. Você está com o peso considerado Normal.</p>
            )
        } else if (Number.isFinite(imc) == false) {
            return (
                <p>Por favor, digite seu peso e sua altura.</p>
            )
        } else {
            return (
                <p>Seu IMC é de {imc}. Você está com o peso considerado Abaixo do Normal.</p>
            )
        }
    }

    return (
        <>
            <h1 className="title">Calculadora de IMC</h1>
            <div className="formulario">
                <form>
                    <input type="number" placeholder="Digite seu peso" onChange={evento => setPeso(parseFloat(evento.target.value))} />
                    <input type="number" placeholder="Digite sua altura" onChange={evento => setAltura(parseFloat(evento.target.value))} />
                    {calculaIMC()}
                </form>
            </div>
        </>
    )
}

export default Calc