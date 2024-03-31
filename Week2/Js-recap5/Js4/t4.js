// script.js

// Define an async function named fetchData
async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Request failed: ' + response.statusText);
        }
        return await response.json();
    } catch (error) {
        throw new Error('An error occurred: ' + error.message);
    }
}

// Define an async function to use the fetchData function
async function fetchDataExample() {
    try {
        const user = {
            name: 'John Doe',
            job: 'Developer'
        };
        const url = 'https://reqres.in/api/users';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };
        const userData = await fetchData(url, options); // This code should be inside an async function
        console.log(userData);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Call the fetchDataExample function to trigger the async operation
fetchDataExample();
