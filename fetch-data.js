// Step 1: Initialize the Async Function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Step 3: Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // Step 4: Fetch Data Using try-catch
    try {
        const response = await fetch(apiUrl); // Fetch data from the API
        const users = await response.json(); // Convert response to JSON

        // Step 5: Clear the Loading Message
        dataContainer.innerHTML = ''; // Clear loading message

        // Step 6: Create and Append User List
        const userList = document.createElement('ul'); // Create a <ul> element

        // Loop through the users array
        users.forEach(user => {
            const listItem = document.createElement('li'); // Create a <li> for each user
            listItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(listItem); // Append <li> to <ul>
        });

        dataContainer.appendChild(userList); // Append <ul> to the data container

    } catch (error) {
        // Step 7: Error Handling
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Display error message
    }
}

// Step 8: Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
