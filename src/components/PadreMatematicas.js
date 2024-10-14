import Matematicas from "./Matematicas";

function PadreMatematicas() {

    const mostrarTriple = (valor) => {
        var resultado = parseInt(valor) * 3;
        console.log(resultado);
    }

    return (<div>
        <h1>Padre Matematicas</h1>
        <Matematicas numero="4" mostrarTriple={mostrarTriple}/>
        <Matematicas numero="99" mostrarTriple={mostrarTriple}/>
    </div>)
}

export default PadreMatematicas;