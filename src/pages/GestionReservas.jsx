import { useState } from "react";
import Boton from "../components/Boton";
import CampoFormulario from "../components/CampoFormulario";
import ListaReservas from "../components/ListaReservas";

/**
 * Componente principal para gestionar las reservas de libros.
 * Permite registrar, visualizar y cancelar reservas.
 */
function GestionReservas() {
    // Guarda los datos del formulario.
    const [formulario, setFormulario] = useState({
        lector: "",
        libro: "",
        fecha: ""
    });

    // Guarda las reservas registradas durante la sesión.
    const [reservas, setReservas] = useState([]);

    // Actualiza el campo que el usuario modifica.
    function manejarCambio(evento) {
        const { name, value } = evento.target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    // Registra una nueva reserva.
    function registrarReserva(evento) {
        evento.preventDefault();

        const nuevaReserva = {
            id: Date.now(),
            lector: formulario.lector.trim(),
            libro: formulario.libro.trim(),
            fecha: formulario.fecha,
            estado: "Pendiente"
        };

        setReservas((reservasAnteriores) => [
            ...reservasAnteriores,
            nuevaReserva
        ]);

        // Limpia los campos después del registro.
        setFormulario({
            lector: "",
            libro: "",
            fecha: ""
        });
    }

    // Cancela una reserva identificada por su ID.
    function cancelarReserva(id) {
        setReservas((reservasAnteriores) =>
            reservasAnteriores.map((reserva) =>
                reserva.id === id
                    ? { ...reserva, estado: "Cancelada" }
                    : reserva
            )
        );
    }

    return (
        <main className="gestion-reservas">
            <header className="encabezado">
                <h1>Gestión de reservas</h1>
                <p>
                    Sistema de gestión de reservas de la biblioteca.
                </p>
            </header>

            <section className="formulario-seccion">
                <h2>Registrar una reserva</h2>

                <form onSubmit={registrarReserva}>
                    <CampoFormulario
                        etiqueta="Nombre del lector"
                        nombre="lector"
                        valor={formulario.lector}
                        onChange={manejarCambio}
                    />

                    <CampoFormulario
                        etiqueta="Título del libro"
                        nombre="libro"
                        valor={formulario.libro}
                        onChange={manejarCambio}
                    />

                    <CampoFormulario
                        etiqueta="Fecha de reserva"
                        nombre="fecha"
                        tipo="date"
                        valor={formulario.fecha}
                        onChange={manejarCambio}
                    />

                    <Boton
                        texto="Registrar reserva"
                        tipo="submit"
                    />
                </form>
            </section>

            <ListaReservas
                reservas={reservas}
                onCancelar={cancelarReserva}
            />
        </main>
    );
}

export default GestionReservas;