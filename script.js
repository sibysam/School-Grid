// Smooth Scroll for "Explore Rankings" button
document.querySelector('button').addEventListener('click', function () {
    // Scrolls to the rankings section smoothly
    document.querySelector('#rankings').scrollIntoView({
        behavior: 'smooth'
    });
});

// Handle form submission and update the rankings table
document.getElementById('school-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    // Get values from the form inputs
    const schoolName = document.getElementById('school-name').value;
    const schoolLocation = document.getElementById('school-location').value;
    const schoolScore = document.getElementById('school-score').value;

    // Create a new table row with the submitted details
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td></td>
        <td>${schoolName}</td>
        <td>${schoolLocation}</td>
        <td>${schoolScore}%</td>
    `;

    // Add the new row to the rankings table
    const tableBody = document.getElementById('rankings-list');
    tableBody.appendChild(newRow);

    // Clear the form fields after submission
    document.getElementById('school-form').reset();

    // Optional: You can implement sorting functionality here to sort by score or rank
});
