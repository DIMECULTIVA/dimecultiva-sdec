// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab the elements from the HTML
    const slider = document.getElementById('kVa-slider');
    const output = document.getElementById('kVa-output');
    const recommendationText = document.getElementById('recommendation-text');

    // Add an event listener to detect when the user moves the slider
    slider.addEventListener('input', function() {
        const kVaValue = this.value;
        
        // Update the number on the screen dynamically
        output.textContent = kVaValue;

        // Provide logic to change the text based on the size chosen
        if (kVaValue <= 150) {
            recommendationText.textContent = "Perfect for small to medium construction sites or retail backup.";
        } else if (kVaValue > 150 && kVaValue <= 500) {
            recommendationText.textContent = "Ideal for medium industrial applications, large events, and clinics.";
        } else {
            recommendationText.textContent = "Heavy-duty power for mining, large manufacturing, or data centers.";
        }
    });
});