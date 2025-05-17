function loadRestaurants() {
    const list = document.getElementById('restaurant-list');
    list.innerHTML = '';
    const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    restaurants.forEach((r, index) => {
        const item = document.createElement('li');
        item.innerHTML = `
            <strong>${r.name}</strong> - 
            <a href="${r.menu}" target="_blank">Menu</a> | 
            <a href="${r.reservation}" target="_blank">Reservation</a>
            <button onclick="removeRestaurant(${index})">Remove</button>
        `;
        list.appendChild(item);
    });
}

function addRestaurant(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const menu = document.getElementById('menu').value.trim();
    const reservation = document.getElementById('reservation').value.trim();
    const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    restaurants.push({ name, menu, reservation });
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
    document.getElementById('restaurant-form').reset();
    loadRestaurants();
}

function removeRestaurant(index) {
    const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    restaurants.splice(index, 1);
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
    loadRestaurants();
}

document.getElementById('restaurant-form').addEventListener('submit', addRestaurant);
window.addEventListener('load', loadRestaurants);
