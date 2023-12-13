// app.js

document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const tasksList = document.getElementById('tasksList');
    const profileDetails = document.getElementById('profileDetails');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        const priority = document.getElementById('taskPriority').value;
        const status = document.getElementById('taskStatus').value;

        // Perform AJAX or fetch request to save the task on the server
        // For simplicity, we'll just add it to the list here
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `<strong>${title}</strong> - ${description}, Priority: ${priority}, Status: ${status}`;
        tasksList.appendChild(taskItem);

        // Clear the form fields
        taskForm.reset();
    });

    // Example: Fetch user profile details from the server and display them
    fetch('/api/user/profile')
        .then(response => response.json())
        .then(profile => {
            profileDetails.innerHTML = `<p><strong>Name:</strong> ${profile.name}</p>
                                       <p><strong>Email:</strong> ${profile.email}</p>`;
        })
        .catch(error => console.error('Error fetching user profile:', error));
});
