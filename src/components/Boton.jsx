
/**
 * Componente reutilizable para mostrar botones.
 * Permite ejecutar una acción cuando el usuario hace clic.
 */
function Boton({ texto, onClick, tipo = "button" }) {
    return (
        <button
            type={tipo}
            onClick={onClick}
            className="boton"
        >
            {texto}
        </button>
    );
}

export default Boton;