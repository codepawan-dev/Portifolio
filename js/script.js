// Dont try to other people's code .It's too hard to figure out.

let home = document.getElementById('home')
let about = document.getElementById('about');
let skill = document.getElementById('skill');
let contact = document.getElementById('contact');
let cont = document.getElementById('cont');

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

// close button
let closeButton = document.getElementById('closeButton');


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
    setTimeout('closeButton.style.color = "black"', 100);
    setTimeout('closeButton.style.backgroundColor = "white"', 100);
    setTimeout('closeButton.style.color = "white"', 200);
    setTimeout('closeButton.style.backgroundColor = "black"', 200);
    about.style.display = 'none';
    skill.style.display = 'none';
    contact.style.display = 'none';
    nav2.style.display = 'none';
    nav3.style.display = 'none';
    nav4.style.display = 'none';
    closeButton.style.display = 'block';
});

closeButton.addEventListener('click', function run() {
    home.style.display = 'block';
    about.style.display = 'block';
    skill.style.display = 'block';
    contact.style.display = 'block';
    closeButton.style.display = 'none';
    nav1.style.display = 'block';
    nav2.style.display = 'block';
    nav3.style.display = 'block';
    nav4.style.display = 'block';
});

nav2.addEventListener('click', function run() {
    closeButton.style.display = 'block';
    home.style.display = 'none';
    skill.style.display = 'none';
    contact.style.display = 'none';
    setTimeout('closeButton.style.color = "black"', 100);
    setTimeout('closeButton.style.backgroundColor = "white"', 100);
    setTimeout('closeButton.style.color = "white"', 200);
    setTimeout('closeButton.style.backgroundColor = "black"', 200);

    nav1.style.display = 'none';
    nav3.style.display = 'none';
    nav4.style.display = 'none';
});

nav3.addEventListener('click', function run() {
    closeButton.style.display = 'block';
    home.style.display = 'none';
    about.style.display = 'none';
    contact.style.display = 'none';
    setTimeout('closeButton.style.color = "black"', 100);
    setTimeout('closeButton.style.backgroundColor = "white"', 100);
    setTimeout('closeButton.style.color = "white"', 200);
    setTimeout('closeButton.style.backgroundColor = "black"', 200);

    nav1.style.display = 'none';
    nav2.style.display = 'none';
    nav4.style.display = 'none';
});

nav4.addEventListener('click', function run() {
    closeButton.style.display = 'block';
    home.style.display = 'none';
    about.style.display = 'none';
    skill.style.display = 'none';
    setTimeout('closeButton.style.color = "black"', 100);
    setTimeout('closeButton.style.backgroundColor = "white"', 100);
    setTimeout('closeButton.style.color = "white"', 200);
    setTimeout('closeButton.style.backgroundColor = "black"', 200);

    nav1.style.display = 'none';
    nav2.style.display = 'none';
    nav3.style.display = 'none';
});

// Date 
function updateTime() {
    timings = new Date();
    hours = timings.getHours();
    minutes = timings.getMinutes();
    seconds = timings.getSeconds();
    dt = `${hours}:${minutes}`;
    console.log(dt);
    document.getElementById('display_time').innerHTML = dt;
}

setInterval(updateTime, 1000);
