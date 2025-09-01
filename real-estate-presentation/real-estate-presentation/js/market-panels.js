// Ensure this file is included after main.js in index.html

document.addEventListener('DOMContentLoaded', function() {
    // Project panel handling
    document.addEventListener('click', function(e) {
        // Check if clicked on a marker or its icon
        const marker = e.target.closest('.marker');
        if (marker) {
            const projectId = marker.getAttribute('data-project');
            const panel = document.getElementById(projectId);
            
            // Hide all panels first
            document.querySelectorAll('.project-panel').forEach(p => {
                p.style.display = 'none';
            });
            
            // Show selected panel
            if (panel) {
                panel.style.display = 'block';
            }
        }
        
        // Close panel button handling
        if (e.target.classList.contains('close-panel')) {
            const panel = e.target.closest('.project-panel');
            if (panel) {
                panel.style.display = 'none';
            }
        }
    });
});     