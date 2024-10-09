document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const area = document.getElementById('area').value;
    const bedrooms = document.getElementById('bedrooms').value;
    const bathrooms = document.getElementById('bathrooms').value;
    const garage = document.getElementById('garage').value;
    const location = document.getElementById('location').value;

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            area: area,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            garage: garage,
            location: location
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `Predicted Price: ₹${data.price}`;
    })
    .catch(error => console.error('Error:', error));
});
