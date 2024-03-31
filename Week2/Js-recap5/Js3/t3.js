async function testRequests() {
    try {
        //GET request(non-existent url)
        await fetch('https://reqres.in/api/unknown/23');
       //POST request(non-existent url)
        await fetch('https://reqres.in/api/unknown/23', { method: 'POST' });
        //PUT request(non-existent url)
        await fetch('https://reqres.in/api/unknown/23', { method: 'PUT' });
        //DELETE request(non-existent url)
        await fetch('https://reqres.in/api/unknown/23', { method: 'DELETE' });
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

testRequests();
