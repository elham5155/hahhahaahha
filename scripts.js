document.addEventListener('DOMContentLoaded', function () {
    // Event listener for the start button
    document.getElementById('start-button').addEventListener('click', function () {
        this.style.display = 'none'; // Hide the start button
        startMining(); // Start the mining process
    });

    // Event listener for the referral button
    document.getElementById('referral-button').addEventListener('click', function () {
        // Copy current URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            // Show referral message for 2 seconds
            document.getElementById('referral-message').style.display = 'block';
            setTimeout(() => {
                document.getElementById('referral-message').style.display = 'none';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });

    // Event listeners for navigation buttons
    document.getElementById('tasks-button').addEventListener('click', function () {
        navigateToPage('tasks.html');
    });

    document.getElementById('wallet-button').addEventListener('click', function () {
        navigateToPage('wallet.html');
    });
});

// Function to start the mining process
function startMining() {
    let count = 0.0000;
    const miningRate = 1000000 / 36; // 1000000 coins per hour

    // Update coins count every 10 seconds (10000 ms)
    setInterval(function () {
        count += miningRate;
        document.getElementById('coins-count').textContent = `Coins: ${count.toFixed(4)}`;
    }, 10000); // Reduced interval to 10 seconds for better real-time update

    // Animate the logo with GSAP
    gsap.to('#logo', {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: 'linear'
    });
}

// Function to navigate to another page
function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}
