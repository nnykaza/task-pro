// app.js

document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const tasksList = document.getElementById('tasksList');
    const profileDetails = document.getElementById('profileDetails');
    const collaboratorsList = document.getElementById('collaboratorsList');
    const chatInput = document.getElementById('chatInput');
    const remindersList = document.getElementById('remindersList');
    const calendarContainer = document.getElementById('calendarContainer');

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

    // Example: Fetch collaborators from the server and display them
    fetch('/api/collaborators')
        .then(response => response.json())
        .then(collaborators => {
            collaborators.forEach(collaborator => {
                const collaboratorItem = document.createElement('li');
                collaboratorItem.textContent = collaborator.name;
                collaboratorsList.appendChild(collaboratorItem);
            });
        })
        .catch(error => console.error('Error fetching collaborators:', error));

    // Example: Send chat message to the server
    function sendMessage() {
        const message = chatInput.value;
        // Perform AJAX or fetch request to send the message to the server
        // For simplicity, we'll just log it here
        console.log(`Message Sent: ${message}`);
        chatInput.value = ''; // Clear the input field
    }

    // Example: Fetch reminders from the server and display them
    fetch('/api/reminders')
        .then(response => response.json())
        .then(reminders => {
            reminders.forEach(reminder => {
                const reminderItem = document.createElement('li');
                reminderItem.textContent = reminder.text;
                remindersList.appendChild(reminderItem);
            });
        })
        .catch(error => console.error('Error fetching reminders:', error));

    // Example: Fetch calendar events from the server and display them
    fetch('/api/calendar/events')
        .then(response => response.json())
        .then(events => {
            events.forEach(event => {
                const eventItem = document.createElement('div');
                eventItem.textContent = `${event.title} - ${event.date}`;
                calendarContainer.appendChild(eventItem);
            });
        })
        .catch(error => console.error('Error fetching calendar events:', error));
});
