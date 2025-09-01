// This file contains JavaScript specific to the "Generalidades del predio" section, managing any interactive elements.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Initialize any interactive elements for the Generalidades section
    const infoButton = document.getElementById('info-button');
    const infoModal = document.getElementById('info-modal');

    if (infoButton) {
        infoButton.addEventListener('click', function() {
            infoModal.classList.toggle('is-active');
        });
    }

    const closeModal = document.getElementById('close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            infoModal.classList.remove('is-active');
        });
    }
});