const firstEye = document.getElementsByClassName("ball");
const secondEye = document.getElementsByClassName("ballTwo");

document.onmousemove = (event) => {
    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';

    for(let i = 0; i < 2; i++) {
        firstEye[i].style.left = x;
        firstEye[i].style.top = y;
        firstEye[i].transform = 'translate(-' + x + ',-' + y + ')';
        secondEye[i].style.left = x;
        secondEye[i].style.top = y;
        secondEye[i].transform = 'translate(-' + x + ',-' + y + ')';
    }
};