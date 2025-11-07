document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;
    
    const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, message })
    });
    const data = await response.json();
    alert(data.message);
    document.getElementById('feedbackForm').reset();
});
