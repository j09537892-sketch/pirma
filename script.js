// Dati vielām un inventāram
const inventoryData = [
    { id: 1, name: "Nātrija hlorīds", type: "viela", amount: 500, unit: "g", location: "A1", date: "2024-03-01" },
    { id: 2, name: "Mērkolba", type: "inventars", amount: 10, unit: "gab", location: "B2", date: "2024-02-15" },
    { id: 3, name: "Etilspirts", type: "viela", amount: 1000, unit: "ml", location: "C3", date: "2024-03-10" },
    { id: 4, name: "Mikroskops", type: "inventars", amount: 2, unit: "gab", location: "D4", date: "2024-01-20" },
    { id: 5, name: "Hidrohlorskābe", type: "viela", amount: 250, unit: "ml", location: "A2", date: "2024-03-05" },
    { id: 6, name: "Pipete", type: "inventars", amount: 50, unit: "gab", location: "B3", date: "2024-02-28" },
    { id: 7, name: "Kālija hidroksīds", type: "viela", amount: 300, unit: "g", location: "C1", date: "2024-03-12" },
    { id: 8, name: "Karotīte", type: "inventars", amount: 15, unit: "gab", location: "D2", date: "2024-01-30" }
];

// Funkcija tabulas aizpildīšanai
function renderTable(filter = 'all') {
    const tableBody = document.querySelector('#data-table tbody');
    if (!tableBody) return; // Ja nav tabulas, neko nedarām
    
    tableBody.innerHTML = '';
    
    const filteredData = filter === 'all' 
        ? inventoryData 
        : inventoryData.filter(item => item.type === filter);
    
    filteredData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td><span class="type-badge ${item.type}">${item.type}</span></td>
            <td>${item.amount}</td>
            <td>${item.unit}</td>
            <td>${item.location}</td>
            <td>${item.date}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Filtra pogu funkcionalitāte
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTable(btn.dataset.filter);
        });
    });
}

// Reģistrācijas formas apstrāde
function setupRegistrationForm() {
    const form = document.getElementById('registration-form');
    if (!form) return;
    
    // Iestatām šodienas datumu
    const dateField = document.getElementById('date');
    if (dateField) {
        dateField.valueAsDate = new Date();
    }
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Reģistrācija veiksmīgi iesniegta!');
        // Šeit varētu pievienot datu nosūtīšanu uz serveri
    });
}

// Inicializācija kad lādējas DOM
document.addEventListener('DOMContentLoaded', function() {
    renderTable(); // Sākotnēji rādām visu
    setupFilterButtons();
    setupRegistrationForm();
});
