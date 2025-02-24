document.getElementById('agentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture form data
    const customerName = document.getElementById('customerName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const centerName = document.getElementById('centerName').value;
    const agentName = document.getElementById('agentName').value;
    const month = document.getElementById('month').value;
    const date = document.getElementById('date').value;
    const year = document.getElementById('year').value;
    const option = document.getElementById('options').value;

    // Send data to the backend
    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            customerName,
            phoneNumber,
            centerName,
            agentName,
            month,
            date,
            year,
            option
        })
    })
    .then(response => response.text())
    .then(data => {
        // Display the response from the server
        document.body.innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
});
