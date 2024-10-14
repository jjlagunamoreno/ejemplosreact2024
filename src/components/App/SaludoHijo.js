function SaludoHijo(props) {
    //CAPTURAMOS EN UNA VARIABLE EL MÉTODO DEL PARETN
    //QUE VIENE EN PROPS
    var ejecutarPadre = props.metodoPadre;
    var idhijo = props.idhijo;

    return (<div>

        <h2 style={{ color: "blue" }}>
            Saludo HIJO
        </h2>
        <button onClick={() => ejecutarPadre('Luke ' + idhijo)}>Llamar al Padre</button>

    </div>)
}

export default SaludoHijo;