const button = document.querySelector("button");

button.addEventListener("click", createParagraph);

function createParagraph() {
    const para = document.createElement("p");
    para.textContent = 'My name is Oyin. Some simple things about me are that I am Nigerian, born and raised in Brooklyn. My favorite color is brown, and my favorite number is 27.'
    document.body.appendChild(para);
}

const button1 = document.querySelector("button1");

button1.addEventListener("click", createOne);

function createOne() {
    const para1 = document.createElement("p1");
    para1.textContent = 'In my free time, I like to read, listen to music, and dance. My favorite song at the moment is Fotojenik (Rmx) by Wizboyy. I am also on this schools step team, the Lady Dragons.'
    document.body.appendChild(para1);
}

const button2 = document.querySelector("button2");

button2.addEventListener("click", createTwo);

function createTwo() {
    const para2 = document.createElement("p2");
    para2.textContent = 'I mostly listen to African music. Here are some of my favorites.'
    document.body.appendChild(para2);
}