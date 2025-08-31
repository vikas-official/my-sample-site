function showAlert() {
    // Show alert popup
    alert('Hello! Welcome to my GitHub Pages site! 🎉');
    
    // Also show visible message on page
    const container = document.querySelector('.container');
    const existingMessage = document.getElementById('success-message');
    
    // Remove existing message if any
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new success message
    const message = document.createElement('div');
    message.id = 'success-message';
    message.innerHTML = '✅ Button clicked successfully! Alert should have appeared! 🎉';
    message.style.cssText = `
        background: #4CAF50;
        color: white;
        padding: 15px;
        margin-top: 20px;
        border-radius: 5px;
        text-align: center;
        font-weight: bold;
        animation: fadeIn 0.5s ease-in;
    `;
    
    container.appendChild(message);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (message) {
            message.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => message.remove(), 500);
        }
    }, 5000);
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('demo-btn');
    
    // Add click animation
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Add welcome message to console
    console.log('Welcome to my sample site! Check out the source code on GitHub.');
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
});