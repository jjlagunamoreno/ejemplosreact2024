import SaludoHijo from "./SaludoHijo";
function SaludoPadre() {
    //NECESITAMOS UN MÉTODO EN ESTE CÓDIGO PARA
    //QUE EL HIJO SEA CAPAZ DE EJECUTARLO

    const metodoPadre = (nombre) => {
        console.log("yo soy tu padre,", nombre);
    }

    return (<div>

        <h1 style={{ color: "brown" }}>
            Saludo PADRE
        </h1>
        {/* DESDE PROPS ENVIAREMOS EL MÉTODO DEL PARENT PARA QUE 
        EL HIJO PUEDA REALIZAR LA LLAMADA */}

        {/* <SaludoHijo metodoPadre={metodoPadre} /> */}


        <SaludoHijo idhijo="1" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo="2" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo="3" metodoPadre={metodoPadre}/>
    </div>)
}

export default SaludoPadre;