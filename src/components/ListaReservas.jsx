import ReservaItem from "./ReservaItem";

/**
 * Componente que muestra la lista de reservas registradas.
 * Recibe las reservas y la función para cancelar una reserva.
 */
function ListaReservas({ reservas, onCancelar }) {
    // Muestra un mensaje cuando todavía no hay reservas.
    if (reservas.length === 0) {
        return (
            <p className="sin-reservas">
                No hay reservas registradas.
            </p>
        );
    }

    return (
        <section className="lista-reservas">
            <h2>Reservas registradas</h2>

            <div className="reservas-grid">
                {reservas.map((reserva) => (
                    <ReservaItem
                        key={reserva.id}
                        reserva={reserva}
                        onCancelar={onCancelar}
                    />
                ))}
            </div>
        </section>
    );
}

export default ListaReservas;