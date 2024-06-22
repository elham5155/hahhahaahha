// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    let coins = 0;
    const miningRate = 1000 / 3600; // 1000 coins per hour, converted to coins per second

    // Event listener for the start button
    document.getElementById('start-button').addEventListener('click', function () {
        this.style.display = 'none'; // Hide the start button
        startMining(); // Start the mining process
    });

    // Event listener for clicking on the logo to gain coins
    document.getElementById('logo').addEventListener('click', function () {
        coins++;
        updateCoinsDisplay();
        // Add animation or effect when clicking
        this.classList.add('logo-clicked');
        setTimeout(() => {
            this.classList.remove('logo-clicked');
        }, 300); // Adjust timing as needed
    });

    // Event listeners for navigation buttons
    document.getElementById('tasks-button').addEventListener('click', function () {
        window.location.href = 'tasks.html';
    });

    document.getElementById('wallet-button').addEventListener('click', function () {
        window.location.href = 'wallet.html';
    });

    // Function to start the mining process
    function startMining() {
        setInterval(function () {
            coins += miningRate;
            updateCoinsDisplay();
        }, 1000); // Update coins every second
    }

    // Function to update coins count display
    function updateCoinsDisplay() {
        document.getElementById('coins-count').textContent = `Coins: ${Math.floor(coins)}`;
    }
});
