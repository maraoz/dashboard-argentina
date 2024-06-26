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
const poblacion = 46.23e6
const indicadores = {
    pobreza: {
        porcentaje: 57.4,
        absoluto: 57.4*poblacion/100
    },
    indigencia: {
        porcentaje: 17.5,
        absoluto: 17.5*poblacion/100
    },
    desempleo: {
        porcentaje: 8,
        absoluto: 8*poblacion/100
    },
    salarioMinimo: 195, // USD
    salarioPromedio: 500 // USD (estimado)
};

document.getElementById('indicadoresData').innerHTML = `
    <div class="text-center">
        <p class="text-4xl font-bold text-blue-600">${indicadores.pobreza.porcentaje}%</p>
        <p class="text-xl font-semibold">Pobreza</p>
        <p class="text-sm">${indicadores.pobreza.absoluto.toLocaleString()} personas</p>
    </div>
    <div class="text-center">
        <p class="text-4xl font-bold text-blue-600">${indicadores.indigencia.porcentaje}%</p>
        <p class="text-xl font-semibold">Indigencia</p>
        <p class="text-sm">${indicadores.indigencia.absoluto.toLocaleString()} personas</p>
    </div>
    <div class="text-center">
        <p class="text-4xl font-bold text-blue-600">${indicadores.desempleo.porcentaje}%</p>
        <p class="text-xl font-semibold">Desempleo</p>
        <p class="text-sm">${indicadores.desempleo.absoluto.toLocaleString()} personas</p>
    </div>
    <div class="text-center col-span-3 mt-4">
        <p class="text-3xl font-bold text-blue-600">USD ${indicadores.salarioMinimo}</p>
        <p class="text-xl font-semibold">Salario Mínimo</p>
    </div>
    <div class="text-center col-span-3 mt-2">
        <p class="text-3xl font-bold text-blue-600">USD ${indicadores.salarioPromedio}</p>
        <p class="text-xl font-semibold">Salario Promedio (estimado)</p>
    </div>
`;

// Updated trade balance data
const tradeData = {
    labels: ['Exportaciones', 'Importaciones'],
    datasets: [{
        label: 'Millones USD',
        data: [57000, 62000],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1
    }]
};

// Balanza Comercial chart
new Chart(document.getElementById('balanzaComercialChart'), {
    type: 'bar',
    data: tradeData,
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

// Calculate and display trade balance
const tradeBalance = tradeData.datasets[0].data[0] - tradeData.datasets[0].data[1];
const balanceElement = document.getElementById('balanzaComercialTotal');
balanceElement.innerHTML = `
    <p class="text-lg font-semibold">Balanza Comercial: 
        <span class="${tradeBalance >= 0 ? "text-green-600" : "text-red-600"}">
            ${tradeBalance >= 0 ? '+' : '-'}$${Math.abs(tradeBalance)} millones USD
        </span>
    </p>
`;


// Riesgo País
document.getElementById('riesgoPais').textContent = '1441';