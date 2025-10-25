document.addEventListener('DOMContentLoaded', function() {
    // Datos y configuración del gráfico de popularidad (Ficticio)
    const ctx = document.getElementById('popularLanguagesChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Scala', 'F#', 'Kotlin', 'Clojure', 'Swift'],
            datasets: [{
                label: 'Relevancia/Adopción en IA (Ficticia)',
                data: [85, 65, 75, 55, 40], // Datos ficticios
                backgroundColor: [
                    '#0288D1', // Medium Blue
                    '#29B6F6', // Lighter Blue
                    '#01579B', // Dark Blue
                    '#4FC3F7', // Very Light Blue
                    '#81D4FA'  // Pale Blue
                ],
                borderColor: [
                    '#01579B',
                    '#01579B',
                    '#01579B',
                    '#01579B',
                    '#01579B'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Puntuación (Máx 100)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Popularidad/Enfoque de Lenguajes Híbridos en IA (Ejemplo)'
                }
            }
        }
    });
});