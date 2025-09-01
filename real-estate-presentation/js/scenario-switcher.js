document.addEventListener('DOMContentLoaded', function() {
    // Set up event delegation for scenario buttons
    document.body.addEventListener('click', function(e) {
        // Check if the clicked element is a scenario button
        if (e.target.classList.contains('scenario-btn') || 
            (e.target.parentElement && e.target.parentElement.classList.contains('scenario-btn'))) {
            
            // Get the button (handling clicks on the span inside the button too)
            const btn = e.target.classList.contains('scenario-btn') ? e.target : e.target.parentElement;
            const scenarioId = btn.id.split('-')[1];
            
            // Get all scenario data elements and buttons
            const scenarioData = document.querySelectorAll('.scenario-data');
            const scenarioBtns = document.querySelectorAll('.scenario-btn');
            
            // Hide all scenarios
            scenarioData.forEach(data => {
                data.style.display = 'none';
            });
            
            // Show selected scenario
            const selectedScenario = document.getElementById(scenarioId + '-data');
            if (selectedScenario) {
                selectedScenario.style.display = 'block';
            }
            
            // Update button styles
            scenarioBtns.forEach(b => {
                b.style.opacity = '0.8';
                b.style.transform = 'scale(1)';
            });
            
            // Highlight active button
            btn.style.opacity = '1';
            btn.style.transform = 'scale(1.05)';
            
            console.log('Switched to scenario: ' + scenarioId);
        }
    });
});