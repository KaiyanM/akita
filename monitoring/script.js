fetch('/api/start', {
    method: 'POST',
})
.then(response => response.json())  // Parse JSON response
.then(data => {
    console.log(data.message);  // Should log "Simulation Resumed"
})
.catch(error => console.error('Error starting the program:', error));
