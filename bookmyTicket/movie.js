const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

 
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
const body = document.getElementById('bg-overlay');

// Map of movie values to background images
const backgrounds = {
    '12': 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa', // Space/Interstellar
    '15': 'https://images.unsplash.com/photo-1509248961158-e54f6934749c', // Dark/Batman
    '10': 'https://images.unsplash.com/photo-1506466010722-395aa2bef877'  // Desert/Dune
};

// Function to change background
function changeBackground(value) {
    const imageUrl = backgrounds[value];
    body.style.backgroundImage = `linear-gradient(rgba(15, 5, 123, 0.8), rgba(0, 0, 0, 0.8)), url('${imageUrl}')`;
}

// Add this to your existing change event listener
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    
    // New: Change the background image
    changeBackground(e.target.value);
    
    updateSelectedCount();
});
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});