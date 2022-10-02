window.addEventListener('load', function() {
    changePage(location.hash);
    setActive(location.hash);
    galleryGenerate();
})
window.addEventListener("hashchange", function() {
    changePage(location.hash);
    setActive(location.hash);
    
  });

let home = document.getElementById('home');
let inventory = document.getElementById('inventory');
let about = document.getElementById('about');
let gallery = document.getElementById('gallery');
let faq = document.getElementById('faq');
let contact = document.getElementById('contact');

gallery.addEventListener('load', function() {

})

let arrayOfPages = [home, inventory, about, gallery, faq, contact];

function changePage(location) {
    switch (location) {
        case "#home": 
            for (page of arrayOfPages) {
                if (page !== home) {
                    page.style.display = "none";
                } else {
                    page.style.display = "block";
                }
            }
            break;
        case "#": 
            for (page of arrayOfPages) {
                if (page !== home) {
                    page.style.display = "none";
                } else {
                    page.style.display = "block";
                }
            }
            break;
        case "#inventory":
            for (page of arrayOfPages) {
                if (page !== inventory) {
                    page.style.display = "none";
                } else {
                    page.style.display = "block";
                }
            }
            break;
        case "#about":
            for (page of arrayOfPages) {
                if (page !== about) {
                    page.style.display = "none";
                } else {
                    page.style.display = "block";
                }
            }
            break;
        case "#gallery":
            for (page of arrayOfPages) {
                if (page !== gallery) {
                    page.style.display = "none";
                } else {
                    page.style.display = "flex";
                    page.classList.add("flex-wrap");
                }
            }
            break;
        case "#faq":
            for (page of arrayOfPages) {
                if (page !== faq) {
                    page.style.display = "none";
                } else {
                    page.style.display = "block";
                }
            }
            break;
        case "#contact":
            for (page of arrayOfPages) {
                if (page !== contact) {
                    page.style.display = "none";
                } else {
                    page.style.display = "block";
                }
            }
            break;
        default: 
            for (page of arrayOfPages) {
                if (page !== home) {
                    page.style.display = "none";
                } else {
                    page.style.display = "block";
                }
            }
            // home
    }
}

let inventoryLink = document.getElementById('inventoryLink');
let aboutLink = document.getElementById('aboutLink');
let galleryLink = document.getElementById('galleryLink');
let faqLink = document.getElementById('faqLink');
let contactLink = document.getElementById('contactLink');

let arrayOfLinks = [inventoryLink, aboutLink, galleryLink, faqLink, contactLink];

function setActive(location) {
    switch(location) {
        case "#inventory":
            for (link of arrayOfLinks) {
                if (link !== inventoryLink) {
                    link.classList.remove('active');
                } else {
                    link.classList.add('active')
                }
            } 
            break;
        case "#about":
            for (link of arrayOfLinks) {
                if (link !== aboutLink) {
                    link.classList.remove('active');
                } else {
                    link.classList.add('active')
                }
            } 
            break;
        case "#gallery":
            for (link of arrayOfLinks) {
                if (link !== galleryLink) {
                    link.classList.remove('active');
                } else {
                    link.classList.add('active')
                }
            } 
            break;
        case "#faq":
            for (link of arrayOfLinks) {
                if (link !== faqLink) {
                    link.classList.remove('active');
                } else {
                    link.classList.add('active')
                }
            } 
            break;
        case "#contact":
            for (link of arrayOfLinks) {
                if (link !== contactLink) {
                    link.classList.remove('active');
                } else {
                    link.classList.add('active')
                }
            } 
            break;
        default: 
            for (link of arrayOfLinks) {
                link.classList.remove('active');
            } 
            break;
    }
}

function emailForm() {
    let personName = document.getElementById("personName").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    window.location.href = `mailto:jessedeanroberts@gmail.com?subject=${subject}&body=Hi, my name is ${personName} and I'm contacting you about ${subject}. ${message}`;
    becomeContactForm();
}


function galleryGenerate() {
    gallery.innerHTML = '';
    const galleryItem = (item) => {
        return  `<div class="card mx-auto col-12 col-md-4">
                    <img src="./images/${item}.jpg" class="card-img-top" alt="...">
                </div>`
    }
    for (let i = 0; i < 21; i++) {
        gallery.innerHTML += galleryItem(i);
    }
}

$(".nav-link").on('click', () => {
    if (document.getElementById('navbar-toggle').ariaExpanded == 'true') {
        console.log('click');
        document.getElementById('navbar-toggle').click();
    }
})