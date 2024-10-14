function Matematicas(props)  {
    var numero = props.numero;
    var mostrarTriple = props.mostrarTriple;

    const mostrarDoble = () => {
        var resultado = parseInt(numero) * 2;
        console.log(resultado);
    }
    return (<div>
        <h1 style={{color:"fuchsia"}}>Matematicas Hijo: {numero}</h1>
        <button onClick={ () => mostrarDoble() }>
            Doble {numero}
        </button>
        <button onClick={ () => mostrarTriple(numero) }>
            Triple {numero}
        </button>
    </div>)
}

export default Matematicas;