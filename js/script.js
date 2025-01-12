let home = document.getElementById('home')
let about = document.getElementById('about');
let skill = document.getElementById('skill');
let contact = document.getElementById('contact');
let cont = document.getElementById('cont');

// Buttons
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');

// Navbars
let nav1 = document.getElementById('nav1');
let nav2 = document.getElementById('nav2');
let nav3 = document.getElementById('nav3');
let nav4 = document.getElementById('nav4');

// Display
let disp = document.getElementById('disp');
let loading = document.getElementById('loading');

// loading screen
let ld_title = document.getElementById('ld-title');
let ld_bg = document.getElementById('ld-bg');


disp.style.display = "none";
ld_title.style.display = "block";
ld_bg.style.display = "block";
ld_title.textContent = 'Loading';

setTimeout('ld_title.textContent = "Loading"', 1000);
setTimeout('ld_title.textContent = "•.."', 700);
setTimeout('ld_title.textContent = "••."', 800);
setTimeout('ld_title.textContent = "•••"', 900);
setTimeout('loading.style.display="none"', 1000);
setTimeout('disp.style.display="block"', 1000);
setTimeout('ld_title.style.display="none"', 1000);
setTimeout('ld_bg.style.display="none"', 1000);
setTimeout('cont.style.display="flex"', 1000);


nav1.addEventListener('click', function run() {
    btn1.style.display = 'block';
    setTimeout('btn1.style.color = "white"', 100);
    setTimeout('btn1.style.backgroundColor = "black"', 100);
    setTimeout('btn1.style.color = "black"', 200);
    setTimeout('btn1.style.backgroundColor = "white"', 200);
    about.style.display = 'none';
    skill.style.display = 'none';
    contact.style.display = 'none';
    nav2.style.display = 'none';
    nav3.style.display = 'none';
    nav4.style.display = 'none';
    document.querySelector('.card').classList.toggle('dark');
});

nav2.addEventListener('click', function run() {
    btn2.style.display = 'block';
    home.style.display = 'none';
    skill.style.display = 'none';
    contact.style.display = 'none';
    setTimeout('btn2.style.color = "white"', 100);
    setTimeout('btn2.style.backgroundColor = "black"', 100);
    setTimeout('btn2.style.color = "black"', 200);
    setTimeout('btn2.style.backgroundColor = "white"', 200);

    nav1.style.display = 'none';
    nav3.style.display = 'none';
    nav4.style.display = 'none';
});

nav3.addEventListener('click', function run() {
    btn3.style.display = 'block';
    home.style.display = 'none';
    about.style.display = 'none';
    contact.style.display = 'none';
    setTimeout('btn3.style.color = "white"', 100);
    setTimeout('btn3.style.backgroundColor = "black"', 100);
    setTimeout('btn3.style.color = "black"', 200);
    setTimeout('btn3.style.backgroundColor = "white"', 200);

    nav1.style.display = 'none';
    nav2.style.display = 'none';
    nav4.style.display = 'none';
});

nav4.addEventListener('click', function large4() {
    btn4.style.display = 'block';
    home.style.display = 'none';
    about.style.display = 'none';
    skill.style.display = 'none';
    setTimeout('btn4.style.color = "white"', 100);
    setTimeout('btn4.style.backgroundColor = "black"', 100);
    setTimeout('btn4.style.color = "black"', 200);
    setTimeout('btn4.style.backgroundColor = "white"', 200);

    nav1.style.display = 'none';
    nav2.style.display = 'none';
    nav3.style.display = 'none';
});

btn1.addEventListener('click', function run() {
    home.style.width = '684px';
    home.style.height = '280px';
    btn1.style.display = 'none';
    about.style.display = 'block';
    skill.style.display = 'block';
    contact.style.display = 'block';
    nav1.style.display = 'flex';
    nav2.style.display = 'flex';
    nav3.style.display = 'flex';
    nav4.style.display = 'flex';
});

btn2.addEventListener('click', function run() {
    about.style.width = '684px';
    about.style.height = '280px';
    btn2.style.display = 'none';
    home.style.display = 'block';
    skill.style.display = 'block';
    contact.style.display = 'block';
    nav1.style.display = 'flex';
    nav2.style.display = 'flex';
    nav3.style.display = 'flex';
    nav4.style.display = 'flex';
});

btn3.addEventListener('click', function run() {
    skill.style.width = '684px';
    skill.style.height = '280px';
    btn3.style.display = 'none';
    home.style.display = 'block';
    about.style.display = 'block';
    contact.style.display = 'block';
    nav1.style.display = 'flex';
    nav2.style.display = 'flex';
    nav3.style.display = 'flex';
    nav4.style.display = 'flex';
});

btn4.addEventListener('click', function run() {
    contact.style.width = '684px';
    contact.style.height = '280px';
    btn4.style.display = 'none';
    home.style.display = 'block';
    about.style.display = 'block';
    skill.style.display = 'block';
    nav1.style.display = 'flex';
    nav2.style.display = 'flex';
    nav3.style.display = 'flex';
    nav4.style.display = 'flex';
});


// Date 
function updateTime() {
    timings = new Date();
    hours = timings.getHours();
    minutes = timings.getMinutes();
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
}

setInterval(updateTime, 1000);
