/**
 * Componente reutilizable para crear campos de formulario.
 * Recibe las propiedades necesarias para configurar cada campo.
 */
function CampoFormulario({
    etiqueta,
    nombre,
    valor,
    onChange,
    tipo = "text",
    requerido = true
}) {
    return (
        <div className="campo-formulario">
            <label htmlFor={nombre}>
                {etiqueta}
            </label>

            <input
                id={nombre}
                name={nombre}
                type={tipo}
                value={valor}
                onChange={onChange}
                required={requerido}
            />
        </div>
    );
}

export default CampoFormulario;