/* __________date__________ */

const HTMLdate = document.getElementById('date');

const date = new Date();
const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0');
const year = date.getFullYear();
const formattedDate = `${day}.${month}.${year}`;

HTMLdate.textContent = formattedDate;

/* __________time__________ */

const timeForm = document.querySelector('.form__time')
let timeInterval

function timer(seconds) {
    const currentTime = Date.now();
    const endTime = currentTime + seconds * 1000;
    displayTimer(seconds)

    timeInterval = setInterval(() => {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(timeInterval);
            return;
        }
        displayTimer(secondsLeft)
    }, 1000)
}

function displayTimer (seconds) {
    const hours = Math.floor(seconds / 60 / 60);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainderSeconds = seconds % 60;

    const display = `${hours}:${minutes < 10? '0' : ''}${minutes}:${remainderSeconds < 10? '0' : ''}${remainderSeconds}`;

    timeForm.textContent = display    
}

document.addEventListener('DOMContentLoaded', () => {
    timer(7200);
    $("[type='tel']").mask('+380 (00) 000-00-00'); 
});

