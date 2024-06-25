// Datos para el gráfico del dólar
const meses = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const dolarBlue = [490, 735, 800, 1000, 950, 1025, 1150, 1120, 985, 1010, 1175, 1315];
const dolarOficial = [273, 350, 353, 356, 363, 808, 821, 834, 846, 859, 872, 915];

// Datos para el gráfico de inflación
const mesesInflacion = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic', 'Ene', 'Feb', 'Mar', 'Abr', 'May'];
const inflacionMensual = [6.03, 6.63, 7.68, 8.40, 7.77, 5.95, 6.34, 12.44, 12.75, 8.30, 12.81, 25.47, 20.61, 13.24, 11.01, 8.83, 4.18];

// Gráfico de evolución del dólar
new Chart(document.getElementById('dolarChart'), {
    type: 'line',
    data: {
        labels: meses,
        datasets: [
            {
                label: 'Dólar Blue',
                data: dolarBlue,
                borderColor: 'blue',
                fill: false
            },
            {
                label: 'Dólar Oficial',
                data: dolarOficial,
                borderColor: 'green',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

// Gráfico de inflación mensual
new Chart(document.getElementById('inflacionChart'), {
    type: 'line',
    data: {
        labels: mesesInflacion,
        datasets: [{
            label: 'Inflación Mensual (%)',
            data: inflacionMensual,
            borderColor: 'red',
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

// Indicadores socioeconómicos
const indicadores = {
    pobreza: {
        porcentaje: 57.4,
        absoluto: 25000000
    },
    indigencia: {
        porcentaje: 17.5,
        absoluto: 7800000
    },
    desempleo: {
        porcentaje: 8,
        absoluto: 1600000
    },
    salarioMinimo: 195, // USD
    salarioPromedio: 500 // USD (estimado)
};

document.getElementById('indicadoresData').innerHTML = `
    <p><strong>Pobreza:</strong> ${indicadores.pobreza.porcentaje}% (${indicadores.pobreza.absoluto.toLocaleString()} personas)</p>
    <p><strong>Indigencia:</strong> ${indicadores.indigencia.porcentaje}% (${indicadores.indigencia.absoluto.toLocaleString()} personas)</p>
    <p><strong>Desempleo:</strong> ${indicadores.desempleo.porcentaje}% (${indicadores.desempleo.absoluto.toLocaleString()} personas)</p>
    <p><strong>Salario Mínimo:</strong> USD ${indicadores.salarioMinimo}</p>
    <p><strong>Salario Promedio (estimado):</strong> USD ${indicadores.salarioPromedio}</p>
`;


// Datos de exportaciones (en millones de USD)
const exportaciones = {
    labels: ['Agro', 'Minería', 'Pesca', 'Vitivinícola', 'Ganadería', 'Energía', 'Otros'],
    data: [33000, 3800, 2200, 800, 3500, 5000, 8700]
};

new Chart(document.getElementById('exportacionesChart'), {
    type: 'bar',
    data: {
        labels: exportaciones.labels,
        datasets: [{
            label: 'Exportaciones (millones USD)',
            data: exportaciones.data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Datos de importaciones (en millones de USD)
const importaciones = {
    labels: ['Bienes de capital', 'Bienes intermedios', 'Combustibles', 'Piezas para bienes de capital', 'Bienes de consumo', 'Vehículos'],
    data: [11000, 22000, 9000, 8000, 7000, 5000]
};

new Chart(document.getElementById('importacionesChart'), {
    type: 'bar',
    data: {
        labels: importaciones.labels,
        datasets: [{
            label: 'Importaciones (millones USD)',
            data: importaciones.data,
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});