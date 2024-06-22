// scripts.js
document.getElementById('start-button').addEventListener('click', function () {
    this.style.display = 'none';
    startMining();
});

function startMining() {
    let count = 0.0000;
    const miningRate = 1000000 / 3600; // 1000 coins per hour

    setInterval(function () {
        count += miningRate;
        document.getElementById('coins-count').textContent = `Coins: ${count.toFixed(4)}`;
    }, 1000);

    gsap.to('#logo', {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: 'linear'
    });
}
document.getElementById("referral-button").addEventListener("click", function() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        document.getElementById("referral-message").style.display = "block";
        setTimeout(() => {
            document.getElementById("referral-message").style.display = "none";
        }, 2000);
    });
});

// Navigation to other pages
document.getElementById('tasks-button').addEventListener('click', function () {
    window.location.href = 'tasks.html';
});

document.getElementById('wallet-button').addEventListener('click', function () {
    window.location.href = 'wallet.html';
});
