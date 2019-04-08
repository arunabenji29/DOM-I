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

let anchorTag = document.getElementsByTagName('a')
let anchorArray = [siteContent["nav"]["nav-item-1"],siteContent["nav"]["nav-item-2"],siteContent["nav"]["nav-item-3"],
siteContent["nav"]["nav-item-4"],siteContent["nav"]["nav-item-5"],siteContent["nav"]["nav-item-6"]];
let madeAnchorArray = Array.from(anchorTag);
let j=0;
madeAnchorArray.forEach( function(element){ element.textContent =  anchorArray[j]; j=j+1})

const headerOne = document.querySelector('h1');
headerOne.textContent = siteContent['cta']["h1"]

let buttonText = document.querySelector('button')
buttonText.textContent = siteContent['cta']["button"]

let globe = document.getElementById("cta-img");
globe.setAttribute('src', siteContent["cta"]["img-src"])

let header4 = document.getElementsByTagName('h4')
let header4Array = [siteContent['main-content']["features-h4"],siteContent["main-content"]['about-h4'],
siteContent["main-content"]["services-h4"],siteContent['main-content']["product-h4"],siteContent['main-content']["vision-h4"],
siteContent["contact"]["contact-h4"]]
let madeArrayHeader4 = Array.from(header4);
let k=0
madeArrayHeader4.forEach(function(element) { element.textContent = header4Array[k];k=k+1})

let para = document.getElementsByTagName('p')
let paraArray = [siteContent['main-content']["features-content"],siteContent["main-content"]['about-content'],
siteContent["main-content"]["services-content"],siteContent['main-content']["product-content"],
siteContent['main-content']["vision-content"]]
let madeArrayPara = Array.from(para);
let x=0
madeArrayPara.forEach(function(element) { element.textContent = paraArray[x];x=x+1})

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let contactContent=document.querySelectorAll('.contact p')
let contactArray = [siteContent["contact"]["address"],siteContent["contact"]["phone"],siteContent["contact"]["email"]]
let y=0;
contactContent.forEach(function(element) {element.textContent = contactArray[y];y=y+1})

let footContent = document.querySelector('footer p')
footContent.textContent=siteContent["footer"]["copyright"]