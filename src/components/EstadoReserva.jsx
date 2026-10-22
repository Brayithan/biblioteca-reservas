/**
 * Componente reutilizable que muestra el estado de una reserva.
 * Recibe el estado como propiedad y lo presenta en pantalla.
 */
function EstadoReserva({ estado }) {
    // Asigna una clase CSS según el estado de la reserva.
    const claseEstado = estado
        .toLowerCase()
        .replace(/\s+/g, "-");

    return (
        <span className={`estado-reserva ${claseEstado}`}>
            {estado}
        </span>
    );
}

export default EstadoReserva;