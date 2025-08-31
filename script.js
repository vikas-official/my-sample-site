function showAlert() {
    alert('Hello! Welcome to my GitHub Pages site! 🎉');
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
});