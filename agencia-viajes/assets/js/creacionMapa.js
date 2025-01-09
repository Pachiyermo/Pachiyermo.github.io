// Selecciona todos los elementos <path> del documento
const paths = document.querySelectorAll("path");

// Inicializa un arreglo para guardar los datos
const pathData = [];

// Itera por cada elemento <path> para extraer los atributos
paths.forEach(path => {
    const id = path.getAttribute("id");
    const name = path.getAttribute("name");
    const d = path.getAttribute("d");

    // Almacena los datos en el arreglo
    pathData.push({ id, name, d });
});

// Muestra los datos en la consola o haz lo que necesites con ellos
// console.log(pathData);

// Ejemplo: Convertir a JSON para exportar
const pathDataJSON = JSON.stringify(pathData, null, 2);
// console.log(pathDataJSON);

// Ruta del archivo JSON
const jsonFile = "/agencia-viajes/assets/data/paises.json";

// Función para capitalizar la primera letra de una palabra
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Función para cargar y procesar el JSON
fetch(jsonFile)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        // Seleccionar el contenedor .map__svg
        const mapSvg = document.querySelector('.map__svg');

        // Procesar cada elemento del JSON
        data.forEach(pais => {
            // Crear enlace
            const link = document.createElement('a');
            link.setAttribute('href', `/agencia-viajes/paises/${pais.name}/${pais.name}.html`);
            link.setAttribute('xlink:title', capitalize(pais.name));
            link.setAttribute('target', '_blank');

            // Crear path SVG
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pais.d);
            path.setAttribute('id', pais.id);
            path.setAttribute('name', capitalize(pais.name));

            // Añadir el path al enlace
            link.appendChild(path);

            // Añadir el enlace al contenedor
            mapSvg.appendChild(link);
        });

        // Crear círculos adicionales
        const circles = [
            { cx: "399.9", cy: "390.8", id: "0" },
            { cx: "575.4", cy: "412", id: "1" },
            { cx: "521", cy: "266.6", id: "2" }
        ];

        circles.forEach(circleData => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', circleData.cx);
            circle.setAttribute('cy', circleData.cy);
            circle.setAttribute('id', circleData.id);

            // Añadir el círculo al contenedor
            mapSvg.appendChild(circle);
        });
    })
    .catch(error => {
        console.error("Error al procesar el JSON:", error);
    });
