var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
    

let mainEl = document.querySelector("main")

let mainBG = 'var(--main-bg)'

mainEl.style.backgroundColor = 'var(--main-bg)'

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu")

topMenuEl.style.height = '100%'

// let topMenuBG = 'var(--top-main-bg)'
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("--top-menu-bg");

topMenuEl.classList.add("flex-around");


//   var links = document.createElement('a');
// menuLinks.map(function(links) {
//       return '<li>' + links + '</li>';
//       document.getElementById("mylinks").href = "menuLinks";

    menuLinks.forEach(function (link){
    const elLink = document.createElement("a");
    elLink.textContent = link.text;
    topMenuEl.appendChild(elLink);
})

const subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = "var(--top-menu-bg)";

subMenuEl.classList.add("flex-aroundto");

subMenuEl.classList.position = "absolute";

subMenuEl.classList.top = "0";
