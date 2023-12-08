document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskCategory = document.getElementById('task-category').value;

    // You can perform further validation here before sending the data to the backend

    console.log('Task Name:', taskName);
    console.log('Priority:', taskPriority);
    console.log('Category:', taskCategory);

    // Reset the form after processing
    this.reset();
});
