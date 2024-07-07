function changeGoal() {
    document.getElementById('goal-text').innerText = 'In the next two years, I aim to contribute to open-source projects and enhance my knowledge in cloud computing and DevOps practices.';
}

function updateTime() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Etc/GMT-1' };

    document.getElementById('current-date').innerText = `Current Date: ${date.toLocaleDateString('en-GB', options)}`;
    document.getElementById('current-time').innerText = `Current Time (GMT+1): ${date.toLocaleTimeString('en-GB', timeOptions)}`;
}

setInterval(updateTime, 1000);
updateTime();  // Initial call to set date and time immediately when the page loads
