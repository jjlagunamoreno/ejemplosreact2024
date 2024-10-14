function Matematicas(props) {
    //CAPTURAMOS EL NÚMERO QUE LE PASA EL COMPONENTE PADRE
    var numPadre = props.numero
    console.log('El número original que pasa el padre es: ', numPadre);

    const dobleNumero = (numPadre) => {
        console.log("El doble de este número es: ", numPadre * 2);
    }

    return (<div>

        <h1 style={{ color: "blue" }}>
            Componente Matemáticas
        </h1>
        <button onClick={() => dobleNumero(numPadre)}>Mostrar Doble</button>
        <button onClick={() => props.metodoPadre(numPadre)}>Mostrar Triple</button>
        <hr />
    </div>)
}

export default Matematicas;