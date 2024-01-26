export const generarId = () => {
    const randomString = Math.random().toString(36).substring(2);
    const randomDate = Date.now().toString(36);

    return randomString + randomDate
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return fechaNueva.toLocaleDateString('es-ES', opciones)
}