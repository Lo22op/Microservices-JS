/* global wora */
/* eslint-disable no-unused-vars */


const Category = {
    R: document.getElementById("CategoryR"),
    D: document.getElementById("CategoryD"),
    C: document.getElementById("CategoryC"),
    A: document.getElementById("CategoryA"),
    U: document.getElementById("CategoryU"),
    N: document.getElementById("CategoryN"),
};

const aside = {
    R: document.getElementById("asideR"),
    D: document.getElementById("asideD"),
    C: document.getElementById("asideC"),
    A: document.getElementById("asideA"),
    U: document.getElementById("asideU"),
    N: document.getElementById("asideN"),
};

function hideAllAsides() {
    Object.values(aside).forEach(element => {
        element.style.display = 'none';
    });
}

Object.keys(Category).forEach(key => {
    Category[key].addEventListener('click', function () {
        const targetAside = aside[key];
        if (targetAside.style.display === 'grid') {
            targetAside.style.display = 'none';
        } else {
            hideAllAsides(); 
            targetAside.style.display = 'grid'; 
        }
    });
});

const Boxes = document.querySelectorAll('#Box');

Boxes.forEach(box => {
    const button = box.querySelector('#Buy');
    box.addEventListener('click', () => {
        button.classList.toggle('hidden');
    });
});

let cartCount = 0;
const Cart = document.getElementById("cart");
const boxes = document.querySelectorAll('#Box');

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
cartCount = cartItems.length;
Cart.textContent = `المشتريات (${cartCount})`;

boxes.forEach(box => {
    const button = box.querySelector('.buy-btn');

    box.addEventListener('click', () => {
        button.classList.toggle('hidden');
    });

    button.addEventListener('click', (e) => {
        e.stopPropagation(); 
        const title = box.querySelector('p')?.textContent.trim() || 'عنوان غير معروف';
        const img = box.querySelector('img')?.src || '';
        const description = "لا يوجد وصف حالياً"; 

        const book = {
            title,
            image: img,
            description
        };

        cartItems.push(book);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        cartCount++;
        Cart.textContent = `المشتريات (${cartCount})`;
        console.log(`📚 تمت إضافة "${title}" إلى المشتريات.`);
    });
});

const username = localStorage.getItem("username");
const userType = localStorage.getItem("userType");

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const welcomeMsg = document.getElementById("welcomeMsg");
const userInfo = document.getElementById("userInfo");

if (username && userType) {
    welcomeMsg.textContent = ` ${username} مرحبًا بك`;
    userInfo.textContent = `نوع المستخدم: ${userType}`;
    loginBtn.classList.add("hidden");
    logoutBtn.classList.remove("hidden");
}

function Logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

function OpenCart(){
    window.location.href = "cart.html";
}
