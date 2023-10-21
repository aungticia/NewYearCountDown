const countDownDate = new Date('Jan 1, 2024 12:00:00');
const crimsonDot = document.getElementById('crimson');
const yellowDot = document.getElementById('yellow');
const greyDot = document.getElementById('grey');
const purpleDot = document.getElementById('purple');
const labels = document.querySelectorAll('.label');

const dots = [crimsonDot, yellowDot, greyDot, purpleDot];

dots.forEach(dot => {
    let color = dot.getAttribute('data-color');
    dot.addEventListener('click', () => {
        labels.forEach(label => {
            label.style.background = color;
        });
    });
});

const currentTime = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const d = document.getElementById('day');
    d.textContent = days;
    const h = document.getElementById('hour');
    h.textContent = hours;
    const m = document.getElementById('minute');
    m.textContent = minutes;
    const s = document.getElementById('second');
    s.textContent = seconds;
}, 1000);







