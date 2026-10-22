import EstadoReserva from "./EstadoReserva";

/**
 * Componente que muestra la información de una reserva.
 * Recibe los datos de la reserva mediante la propiedad reserva.
 */
function ReservaItem({ reserva, onCancelar }) {
    return (
        <article className="reserva-item">
            <h3>{reserva.libro}</h3>

            <p>
                <strong>Lector:</strong> {reserva.lector}
            </p>

            <p>
                <strong>Fecha de reserva:</strong> {reserva.fecha}
            </p>

            <p>
                <strong>Estado:</strong>{" "}
                <EstadoReserva estado={reserva.estado} />
            </p>

            {reserva.estado !== "Cancelada" && (
                <button
                    type="button"
                    className="boton"
                    onClick={() => onCancelar(reserva.id)}
                >
                    Cancelar reserva
                </button>
            )}
        </article>
    );
}

export default ReservaItem;