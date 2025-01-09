let home = document.getElementById('home')
let about = document.getElementById('about');
let skill = document.getElementById('skill');
let contact = document.getElementById('contact');

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');

let nav1 = document.getElementById('nav1');
let nav2 = document.getElementById('nav2');
let nav3 = document.getElementById('nav3');
let nav4 = document.getElementById('nav4');

function large1() {
    btn1.style.display = 'block';
    about.style.display = 'none';
    skill.style.display = 'none';
    contact.style.display = 'none';

    nav2.style.display = 'none';
    nav3.style.display = 'none';
    nav4.style.display = 'none';

    if (home.style.width != "1200px" && home.style.height != "360px") {
        home.style.width = '1200px';
        home.style.height = '360px';
        about.style.width = '684px';
        about.style.height = '280px';
        skill.style.width = '684px';
        skill.style.height = '280px';
        contact.style.width = '684px';
        contact.style.height = '280px';

    }
    else {
        home.style.width = '684px';
        home.style.height = '280px';
    }
}

function large2() {
    btn2.style.display = 'block';
    home.style.display = 'none';
    skill.style.display = 'none';
    contact.style.display = 'none';

    nav1.style.display = 'none';
    nav3.style.display = 'none';
    nav4.style.display = 'none';


    if (about.style.width != "1200px" && about.style.height != "360px") {
        about.style.width = '1200px';
        about.style.height = '360px';
        home.style.width = '684px';
        home.style.height = '280px';
        skill.style.width = '684px';
        skill.style.height = '280px';
        contact.style.width = '684px';
        contact.style.height = '280px';
    }
    else {
        about.style.width = '684px';
        about.style.height = '280px';
    }
}

function large3() {
    btn3.style.display = 'block';
    home.style.display = 'none';
    about.style.display = 'none';
    contact.style.display = 'none';

    nav1.style.display = 'none';
    nav2.style.display = 'none';
    nav4.style.display = 'none';


    if (skill.style.width != "1200px" && skill.style.height != "360px") {
        skill.style.width = '1200px';
        skill.style.height = '360px';
        home.style.width = '684px';
        home.style.height = '280px';
        about.style.width = '684px';
        about.style.height = '280px';
        contact.style.width = '684px';
        contact.style.height = '280px';
    }
    else {
        skill.style.width = '684px';
        skill.style.height = '280px';
    }
}

function large4() {
    btn4.style.display = 'block';
    home.style.display = 'none';
    about.style.display = 'none';
    skill.style.display = 'none';

    nav1.style.display = 'none';
    nav2.style.display = 'none';
    nav3.style.display = 'none';

    if (contact.style.width != "1200px" && contact.style.height != "360px") {
        contact.style.width = '1200px';
        contact.style.height = '360px';
        home.style.width = '684px';
        home.style.height = '280px';
        about.style.width = '684px';
        about.style.height = '280px';
        skill.style.width = '684px';
        skill.style.height = '280px';
    }
    else {
        contact.style.width = '684px';
        contact.style.height = '280px';
    }
}

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
