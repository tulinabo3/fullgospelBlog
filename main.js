const navItems = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNav=()=>{
    navItems.style.display="flex";
    openNavBtn.style.display="none";
    closeNavBtn.style.display="inline-block";
}
openNavBtn.addEventListener('click', openNav);

closeNav=()=>{
    navItems.style.display="none";
    openNavBtn.style.display="inline-block";
    closeNavBtn.style.display="none";
}
closeNavBtn.addEventListener('click', closeNav);

const sidebar =document.querySelector('aside');
const showSidebarbtn=document.querySelector('#show__sidebar-btn')
const hideSidebarbtn=document.querySelector('#hide__sidebar-btn')
openSidebar=()=>{
    sidebar.style.left="0";
    showSidebarbtn.style.display="none";
    hideSidebarbtn.style.display="inline-block";
}
showSidebarbtn.addEventListener('click', openSidebar);

closeSidebar=()=>{
    sidebar.style.left="-100%";
    showSidebarbtn.style.display="inline-block";
    hideSidebarbtn.style.display="none";
}
hideSidebarbtn.addEventListener('click', closeSidebar);