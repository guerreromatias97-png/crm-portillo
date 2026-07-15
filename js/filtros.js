console.log("Filtros.js cargado correctamente");

window.Filtros = {

    filtrarPorTexto(leads, texto) {

        if (!texto) return leads;

        texto = texto.toLowerCase();

        return leads.filter(l =>
            (l.nombre || "").toLowerCase().includes(texto) ||
            (l.telefono || "").includes(texto) ||
            (l.rut || "").includes(texto) ||
            (l.modelo || "").toLowerCase().includes(texto) ||
            (l.marca || "").toLowerCase().includes(texto)
        );

    }

};