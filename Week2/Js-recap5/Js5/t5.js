async function fetchRestaurantData() {
    try {
        const response = await fetch('https://10.120.32.94/restaurant/');
        if (!response.ok) {
            throw new Error('Failed to fetch restaurant data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}

fetchRestaurantData()
    .then(data => {
        console.log('Restaurant data:', data);
        displayRestaurantData(data);
    })
    .catch(error => {    
        console.error('Error fetching restaurant data:', error);
    });
    
function displayRestaurantData(restaurants) {
    const restaurantList = document.getElementById('restaurant-list');

    restaurantList.innerHTML = '';

    restaurants.forEach(restaurant => {
        const restaurantItem = document.createElement('div');
        restaurantItem.classList.add('restaurant-item');
        restaurantItem.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p>${restaurant.address}</p>
        `;
        restaurantList.appendChild(restaurantItem);
    });
}

const restaurantItems = document.querySelectorAll('.restaurant-item');

restaurantItems.forEach(item => {
    item.addEventListener('click', async () => {
        try {
            const menuResponse = await fetch(`https://10.120.32.94/restaurant/${item.id}/menu`);
            if (!menuResponse.ok) {
                throw new Error('Failed to fetch menu data');
            }
            const menuData = await menuResponse.json();
            displayModal(item, menuData);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    });
});

function displayModal(restaurant, menu) {
    const modal = document.getElementById('modal');
    modal.innerHTML = `
        <h2>${restaurant.name}</h2>
        <p>${restaurant.address}</p>
        <h3>Menu</h3>
        <ul>
            ${menu.items.map(item => `<li>${item.name} - ${item.price}</li>`).join('')}
        </ul>
    `;    
    modal.style.display = 'block';
}
