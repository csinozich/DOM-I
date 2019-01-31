const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"] ["img-src"])

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"] ["middle-img-src"]);

//==============

let navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];
navItems[0].style.color = "green";
navItems[1].style.color = "green";
navItems[2].style.color = "green";
navItems[3].style.color = "green";
navItems[4].style.color = "green";
navItems[5].style.color = "green";

let newNavItem1 = document.createElement('a');
newNavItem1.setAttribute('href', '#');
newNavItem1.textContent = ('Button One');

let newNavItem2 = document.createElement('a');
newNavItem2.setAttribute('href', '#');
newNavItem2.textContent = ('Button Two')

const mainNav = document.querySelector('nav');
mainNav.appendChild(newNavItem1);
mainNav.prepend(newNavItem2)

// let ctaFlex = document.getElementsByClassName(".cta")[0];
// ctaFlex.style.marginTop = "72px";
// ctaFlex.style.justifyContent = "flex-end";
//This doesn't work, but I'm not sure why... And as a result, I can't seem to get the header centered correctly.


let ctaHeader = document.querySelector("h1");
ctaHeader.textContent = siteContent["cta"]["h1"];
ctaHeader.style.fontSize = "72px"
ctaHeader.style.textAlign = "center"
ctaHeader.style.spacing = "5px"
ctaHeader.style.justifyContent = "center";
ctaHeader.style.flexFlow = "column";
ctaHeader.style.alignItems = "center"
ctaHeader.style.width = "40%"
ctaHeader.style.margin = "0 82px 0 0"; //Fix ctaHeader centering

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];
ctaButton.style.border = "1px solid black";
ctaButton.style.width = "170px";
ctaButton.style.height = "32px";
ctaButton.style.fontSize = "16px";
ctaButton.style.marginTop = "10px";
ctaButton.style.cursor = "pointer";

let mainContentHeaders = document.querySelectorAll("h4");
mainContentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
mainContentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
mainContentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
mainContentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
mainContentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
mainContentHeaders[5].textContent = siteContent["contact"]["contact-h4"];

let paragraphs = document.querySelectorAll("p");
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];
paragraphs[5].textContent = siteContent["contact"]["address"];
paragraphs[6].textContent = siteContent["contact"]["phone"];
paragraphs[7].textContent = siteContent["contact"]["email"];
paragraphs[8].textContent = siteContent["footer"]["copyright"];

document.getElementsByTagName("footer")[0].style.textAlign = "center";
document.getElementsByTagName("footer")[0].style.margin = "40px 0 20px";
