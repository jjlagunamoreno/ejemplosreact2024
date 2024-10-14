import Matematicas from "./Matematicas";
function PadreMatematicas() {

    const tripleNumero = (numPadre) => {
        console.log("El triple de este número es: ", numPadre * 3);
    }

    return (<div>

        <h1 style={{ color: "red" }}>
            Componente PadreMatemáticas
        </h1>
        <Matematicas numero="5" metodoPadre={tripleNumero}/>
        
    </div>)
}

export default PadreMatematicas;