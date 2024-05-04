const parallaxWrapper = document.querySelector("#parallax-wrapper");
const parallaxElement = parallaxWrapper.querySelectorAll(".parallax");
const navMenu = document.querySelector("nav .menu");

let xValue = 0,
    yValue = 0,
    scrollValue = 0;

let isLoading = false;
let isNavElementClicked = false;

function moveParallax(e) {
    if (isLoading) return;

    if (window.scrollY >= window.innerHeight) return;

    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parallaxElement.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    });
}

parallaxWrapper.addEventListener("mousemove", (e) => {
    moveParallax(e);
});

navMenu.addEventListener("mousemove", (e) => {
    moveParallax(e);
});

parallaxWrapper.addEventListener("mouseleave", () => {
    if (isLoading) return;

    parallaxElement.forEach((el) => {
        el.style.transform = "translateX(-50%) translateY(-50%)";
    });
});

let layer1 = parallaxWrapper.querySelector(".parallax-layer-1");
let layer2 = parallaxWrapper.querySelector(".parallax-layer-2");
let layer3 = parallaxWrapper.querySelector(".parallax-layer-3");
let layer4 = parallaxWrapper.querySelector(".parallax-layer-4");
let layer5 = parallaxWrapper.querySelector(".parallax-layer-5");
let layer6 = parallaxWrapper.querySelector(".parallax-layer-6");
let layer7 = parallaxWrapper.querySelector(".parallax-layer-7");
let layer8 = parallaxWrapper.querySelector(".parallax-layer-8");
let layer9 = parallaxWrapper.querySelector(".parallax-layer-9");
let layer10 = parallaxWrapper.querySelector(".parallax-layer-10");

window.addEventListener("scroll", () => {
    if (isLoading) return;

    scrollValue = window.scrollY;

    updateActiveTab();

    if (!(scrollValue >= window.innerHeight)) {
        parallaxElement.forEach((el) => {
            el.style.transform = "translateX(-50%) translateY(-50%)";
        });

        layer2.style.transform = `translateX(calc(-50%)) translateY(calc(-50% + ${-scrollValue * 0.3}px))`;
        layer3.style.transform = `translateX(calc(-50%)) translateY(calc(-50% + ${scrollValue * 0.3}px))`;
        layer4.style.transform = `translateX(calc(-50% + ${scrollValue * 0.3}px)) translateY(calc(-50% + ${scrollValue * 0.3}px))`;
        layer5.style.transform = `translateX(calc(-50% + ${-scrollValue * 0.3}px)) translateY(calc(-50% + ${scrollValue * 0.3}px))`;
        layer6.style.transform = `translateX(calc(-50%)) translateY(calc(-50% + ${scrollValue * 0.5}px))`;
        layer7.style.transform = `translateX(calc(-50%)) translateY(calc(-50% + ${scrollValue * 0.5}px))`;
        layer9.style.transform = `translateX(calc(-50% + ${-scrollValue * 0.5}px)) translateY(calc(-50%))`;
        layer10.style.transform = `translateX(calc(-50% + ${scrollValue * 0.5}px)) translateY(calc(-50%))`;
    }

    const section2 = document.getElementById("section2");
    const container360 = section2.querySelector(".container360");
    const models = section2.querySelector(".models");

    var section2Top = section2.offsetTop;

    if (scrollValue + (section2.offsetHeight / 3) * 2 >= section2Top) {
        container360.style.transform = "translateY(0%)";
        models.style.transform = "translateY(0%)";
    } else if (scrollValue <= section2Top - (section2.offsetHeight / 3) * 2) {
        container360.style.transform = "translateY(150%)";
        models.style.transform = "translateY(100%)";
    }

    const section3 = document.getElementById("section3");
    const mStrip = document.getElementById("mStrip");
    const stripBlue = mStrip.querySelector(".blue");
    const stripViolet = mStrip.querySelector(".violet");
    const stripRed = mStrip.querySelector(".red");

    const carousel = document.getElementById("carousel");
    const carouselElements = carousel.querySelectorAll("li");

    const carouselBase360 = document.getElementById("carouselBase360");

    var section3Top = section3.offsetTop;

    if (scrollValue + (section3.offsetHeight / 3) * 2 >= section3Top) {
        stripBlue.style.translate = 0;
        stripViolet.style.translate = 0;
        stripRed.style.translate = 0;

        carouselElements.forEach((el) => {
            const carouselImage = el.querySelector(".image");
            const carouselInfo = el.querySelector(".info");
            carouselImage.style.transform = "translateY(0%)";
            carouselInfo.style.transform = "translateY(0%)";
        });

        carouselBase360.style.transform = "translateY(0%)";
        carouselBase360.style.opacity = 1;
    } else if (scrollValue <= section3Top - (section3.offsetHeight / 3) * 2) {
        stripBlue.style.translate = "400%";
        stripViolet.style.translate = "300%";
        stripRed.style.translate = "200%";

        carouselElements.forEach((el) => {
            const carouselImage = el.querySelector(".image");
            const carouselInfo = el.querySelector(".info");
            carouselImage.style.transform = "translateY(200%)";
            carouselInfo.style.transform = "translateY(200%)";
        });

        carouselBase360.style.transform = "translateY(200%)";
        carouselBase360.style.opacity = 0;
    }

    const section4 = document.getElementById("section4");
    const details = section4.querySelector(".details");
    const imageContainer = section4.querySelector(".image-container");

    var section4Top = section4.offsetTop;

    if (scrollValue + (section4.offsetHeight / 3) * 2 >= section4Top) {
        details.style.transform = "translateX(0%)";
        imageContainer.style.transform = "translateX(0%)";
    } else if (scrollValue <= section4Top - (section4.offsetHeight / 3) * 2) {
        details.style.transform = "translateX(-100%)";
        imageContainer.style.transform = "translateX(100%)";
    }

    const section5 = document.getElementById("section5");
    const rows = section5.querySelectorAll(".row");

    var section5Top = section5.offsetTop;

    if (scrollValue + (section5.offsetHeight / 3) * 2 >= section5Top) {
        rows[0].style.transform = "translateX(0%)";
        rows[1].style.transform = "translateX(0%)";
        rows[2].style.transform = "translateX(0%)";
    } else if (scrollValue <= section5Top - (section5.offsetHeight / 3) * 2) {
        rows[0].style.transform = "translateX(100%)";
        rows[1].style.transform = "translateX(-100%)";
        rows[2].style.transform = "translateX(100%)";
    }

    const section6 = document.getElementById("section6");
    const contactForm = document.getElementById("contact-form");
    const contactFormRight = contactForm.querySelector(".right");
    const rightIcons = contactFormRight.querySelectorAll(".icon");
    const contactFormLeft = contactForm.querySelector(".left");
    const inputFields = contactFormLeft.querySelectorAll(".input-field");
    const inputLabels = contactFormLeft.querySelectorAll("label");
    const inputTextarea = contactFormLeft.querySelector(".input-textarea");
    const leftHeading = contactFormLeft.querySelector("h1");
    const sendBtn = contactFormLeft.querySelector(".send-btn");
    const sendLabel = contactFormLeft.querySelector(".send-label");

    var section6Top = section6.offsetTop;

    if (scrollValue + section6.offsetHeight / 2 >= section6Top) {
        contactForm.style.boxShadow = "32px 32px 64px #08304c, -32px -32px 64px #0c4a78";
        contactFormRight.style.transform = "translateX(1px)";

        rightIcons.forEach((el) => {
            el.style.boxShadow = "8px 8px 16px #052134, -8px -8px 16px #093b5e";
        });

        inputFields.forEach((el) => {
            el.style.boxShadow = "inset 5px 5px 10px #08304c, inset -5px -5px 10px #0c4a78";
        });

        inputLabels.forEach((el) => {
            el.style.opacity = 0.5;
        });

        leftHeading.style.opacity = 1;
        sendLabel.style.opacity = 1;
        inputTextarea.style.boxShadow = "inset 5px 5px 10px #08304c, inset -5px -5px 10px #0c4a78";
        sendBtn.style.boxShadow = "5px 5px 10px #08304c, -5px -5px 10px #0c4a78";
    } else if (scrollValue <= section6Top - section6.offsetHeight / 2) {
        contactForm.style.boxShadow = "none";
        contactFormRight.style.transform = "translateX(100%)";

        rightIcons.forEach((el) => {
            el.style.boxShadow = "none";
        });

        inputFields.forEach((el) => {
            el.style.boxShadow = "none";
        });

        inputLabels.forEach((el) => {
            el.style.opacity = 0;
        });

        leftHeading.style.opacity = 0;
        sendLabel.style.opacity = 0;
        inputTextarea.style.boxShadow = "none";
        sendBtn.style.boxShadow = "none";
    }
});

const preLoader = document.querySelector("#pre-loader");
const preLoaderLeft = preLoader.querySelector(".left");
const preLoaderRight = preLoader.querySelector(".right");

window.onload = function () {
    var mobileMessage = document.getElementById("mobileMessage");
    var mainWebsite = document.getElementById("main-website");
    var loadWebsite = true;

    function checkScreenWidth() {
        if (screen.width <= 1024) {
            mobileMessage.style.display = "flex";
            mainWebsite.style.display = "none";
            document.body.style.minWidth = "0";
            loadWebsite = false;
        } else {
            mobileMessage.style.display = "none";
            mainWebsite.style.display = "block";
            document.body.style.minWidth = "1024px";
            loadWebsite = true;
        }
    }

    // Check screen width on page load
    checkScreenWidth();

    // Check screen width on window resize
    window.addEventListener("resize", checkScreenWidth);

    if (loadWebsite) {
        scrollToSection("section1");
        preloadImages();
        updateCarousel();

        isLoading = true;

        let loadingTime = 2;
        let transitionType = "ease";

        // Moving layers to loading position
        layer9.style.transition = `none`;
        layer10.style.transition = `none`;
        layer9.style.transform = `translateX(calc(0%)) translateY(calc(-50%))`;
        layer10.style.transform = `translateX(calc(-100%)) translateY(calc(-50%))`;
        layer9.style.zIndex = 9999;
        layer10.style.zIndex = 9999;

        document.documentElement.style.overflow = "hidden";

        window.scrollTo(0, 0);

        // Moving layers to original position
        setTimeout(() => {
            layer9.style.transition = `${loadingTime}s ${transitionType}`;
            layer10.style.transition = `${loadingTime}s ${transitionType}`;
            layer9.style.transform = `translateX(calc(-50%)) translateY(calc(-50%))`;
            layer10.style.transform = `translateX(calc(-50%)) translateY(calc(-50%))`;
            layer9.style.zIndex = 9;
            layer10.style.zIndex = 9;
            preLoaderLeft.style.transition = `${loadingTime}s ${transitionType}`;
            preLoaderRight.style.transition = `${loadingTime}s ${transitionType}`;
            preLoaderLeft.style.transform = `translateX(calc(-203vh/2))`;
            preLoaderRight.style.transform = `translateX(calc(203vh/2))`;
            setHomeLine();
        }, 0);

        setTimeout(() => {
            layer9.style.transition = `0.4s cubic-bezier(0.2, 0.5, 0.3, 0.1)`;
            layer10.style.transition = `0.4s cubic-bezier(0.2, 0.5, 0.3, 0.1)`;
            preLoader.style.display = "none";
            isLoading = false;

            document.documentElement.style.overflow = "visible";
        }, loadingTime * 1000 + 1000);
    }
};

function setHomeLine() {
    const homeElement = navMenu.querySelector("li:first-child");
    if (homeElement) {
        homeElement.classList.add("active");
        const lineElement = homeElement.querySelector(".line");
        if (lineElement) {
            lineElement.style.transform = `translateY(0)`;
        }
    }
}

function addLine(clickedElement) {
    navMenu.querySelectorAll("li").forEach((li) => {
        li.classList.remove("active");
        const lineElement = li.querySelector(".line");
        if (lineElement) {
            lineElement.style.transform = `translateY(7px)`;
        }
    });

    clickedElement.classList.add("active");
    const clickedLine = clickedElement.querySelector(".line");
    if (clickedLine) {
        clickedLine.style.transform = `translateY(0)`;
    } else {
        setHomeLine();
    }
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    scrollToSection("section1");
};

function updateActiveTab() {
    const sections = document.querySelectorAll("section");

    let currentSection = null;
    for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            currentSection = section;
            break;
        }
    }

    if (currentSection) {
        const currentTab = document.querySelector(`.menu li a[href="#${currentSection.id}"]`);
        if (currentTab) {
            addLine(currentTab.parentElement);
        }
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
        });
    }
}

const colorPicker = document.querySelector("#color-picker");
let color1 = colorPicker.querySelector(".color1");
let color2 = colorPicker.querySelector(".color2");
let color3 = colorPicker.querySelector(".color3");
let modelName = document.querySelector(".main-content .details h2");
let bikeImage = document.querySelector("#bike-image");

color1.addEventListener("click", function () {
    bikeImage.style.backgroundImage = "url(Images/Bikes/0.png)";
    modelName.style.color = "#004fb5";
    color1.style.outline = "2px solid white";
    color2.style.outline = "none";
    color3.style.outline = "none";
});
color2.addEventListener("click", function () {
    bikeImage.style.backgroundImage = "url(Images/Bikes/1.png)";
    modelName.style.color = "black";
    color1.style.outline = "none";
    color2.style.outline = "2px solid white";
    color3.style.outline = "none";
});
color3.addEventListener("click", function () {
    bikeImage.style.backgroundImage = "url(Images/Bikes/2.png)";
    modelName.style.color = "#dc1111";
    color1.style.outline = "none";
    color2.style.outline = "none";
    color3.style.outline = "2px solid white";
});

let section2 = document.getElementById("section2");
let series2 = section2.querySelector(".series2");
let series5 = section2.querySelector(".series5");
let series6 = section2.querySelector(".series6");
let X3 = section2.querySelector(".X3");

var currentCar = "2";
var currentImage = 0;
var previousValue = 0;
var maxImages = 35;

series2.addEventListener("mouseover", function () {
    if (currentCar == "2") return;
    this.querySelector(".image").style.backgroundImage = `url(Images/Cars/2/8.png)`;
    this.querySelector("h1").style.opacity = 1;
});

series2.addEventListener("mouseout", function () {
    if (currentCar == "2") return;
    this.querySelector("h1").style.opacity = 0.5;
    this.querySelector(".image").style.backgroundImage = `url(Images/Cars/2/3.png)`;
});

series5.addEventListener("mouseover", function () {
    if (currentCar == "5") return;
    this.querySelector(".image").style.backgroundImage = `url(Images/Cars/5/8.png)`;
    this.querySelector("h1").style.opacity = 1;
});

series5.addEventListener("mouseout", function () {
    if (currentCar == "5") return;
    this.querySelector("h1").style.opacity = 0.5;
    this.querySelector(".image").style.backgroundImage = `url(Images/Cars/5/3.png)`;
});

series6.addEventListener("mouseover", function () {
    if (currentCar == "6") return;
    this.querySelector(".image").style.backgroundImage = `url(Images/Cars/6/8.png)`;
    this.querySelector("h1").style.opacity = 1;
});

series6.addEventListener("mouseout", function () {
    if (currentCar == "6") return;
    this.querySelector("h1").style.opacity = 0.5;
    this.querySelector(".image").style.backgroundImage = `url(Images/Cars/6/3.png)`;
});

X3.addEventListener("mouseover", function () {
    if (currentCar == "X3") return;
    this.querySelector(".image").style.backgroundImage = `url(Images/Cars/X3/8.png)`;
    this.querySelector("h1").style.opacity = 1;
});

X3.addEventListener("mouseout", function () {
    if (currentCar == "X3") return;
    this.querySelector("h1").style.opacity = 0.5;
    this.querySelector(".image").style.backgroundImage = `url(Images/Cars/X3/3.png)`;
});

function changeModelStyles(currentCarModel) {
    let allModels = section2.querySelector(".models").querySelectorAll(".models > div");

    let heading = null,
        image = null;
    var folderValues = ["2", "5", "6", "X3"];

    allModels.forEach((model, index) => {
        heading = model.querySelector("h1");
        image = model.querySelector(".image");
        if (!model.classList.contains(currentCarModel)) {
            heading.style.opacity = 0.5;
            image.style.backgroundImage = `url(Images/Cars/${folderValues[index]}/3.png)`;
        } else {
            heading.style.opacity = 1;
            image.style.backgroundImage = `url(Images/Cars/${folderValues[index]}/8.png)`;
        }
    });
}

series2.addEventListener("click", function () {
    if (currentCar == "2") return;

    currentCar = "2";
    if (currentImage == 35) {
        currentImage = 0;
    }
    maxImages = 35;
    update360(true);

    changeModelStyles("series2");
});

series5.addEventListener("click", function () {
    if (currentCar == "5") return;

    currentCar = "5";
    maxImages = 36;
    update360(true);

    changeModelStyles("series5");
});

series6.addEventListener("click", function () {
    if (currentCar == "6") return;

    currentCar = "6";
    maxImages = 36;
    update360(true);

    changeModelStyles("series6");
});

X3.addEventListener("click", function () {
    if (currentCar == "X3") return;

    currentCar = "X3";
    maxImages = 36;
    update360(true);

    changeModelStyles("X3");
});

function update360(justChangeImage = false) {
    if (!justChangeImage) {
        var slider = document.getElementById("slider-range");
        var sliderValue = slider.value;

        slider.addEventListener("mousedown", function () {
            slider.classList.remove("grab");
            slider.classList.add("grabbing");
        });

        slider.addEventListener("mouseup", function () {
            slider.classList.remove("grabbing");
            slider.classList.add("grab");
        });

        currentImage = sliderValue > previousValue ? (currentImage - 1 + maxImages) % maxImages : (currentImage + 1) % maxImages;
        previousValue = sliderValue;
    }

    var image360 = document.getElementById("image360");
    image360.src = `Images/Cars/${currentCar}/${currentImage}.png`;
}

function preloadImages() {
    var folderPaths = { "Images/Cars/2/": 35, "Images/Cars/5/": 36, "Images/Cars/6/": 36, "Images/Cars/X3/": 36, "Images/Cars/M/": 8, "Images/Bikes/": 3, "Images/Gallery/": 24 };

    Object.entries(folderPaths).forEach(([folderPath, totalImages]) => {
        for (let i = 0; i < totalImages; i++) {
            var img = new Image();
            if (folderPath.includes("Gallery")) {
                img.src = folderPath + `${i}.jpg`;
            } else {
                img.src = folderPath + `${i}.png`;
            }
        }
    });
}

const carousel = document.getElementById("carousel");
const carouselControl = carousel.querySelector(".controls");
const carouselControlLeft = carousel.querySelector(".left");
const carouselControlRight = carousel.querySelector(".right");

const carouselElements = carousel.querySelectorAll("li");
var maxCarouselElements = carouselElements.length;
var focusedCarousel = 0;

const section3 = document.getElementById("section3");

document.addEventListener("keydown", function (event) {
    var section3Top = section3.offsetTop;
    var windowScroll = window.scrollY;

    if (!(windowScroll + section3.offsetHeight / 3 >= section3Top && windowScroll <= section3Top + (section3.offsetHeight / 3) * 2)) return;

    if (event.key === "ArrowLeft") {
        focusedCarousel = (focusedCarousel + 1) % maxCarouselElements;
        updateCarousel();
    } else if (event.key === "ArrowRight") {
        focusedCarousel = (focusedCarousel - 1 + maxCarouselElements) % maxCarouselElements;
        updateCarousel();
    }
});

carouselControlLeft.addEventListener("click", function () {
    focusedCarousel = (focusedCarousel - 1 + maxCarouselElements) % maxCarouselElements;
    updateCarousel();
});

carouselControlRight.addEventListener("click", function () {
    focusedCarousel = (focusedCarousel + 1) % maxCarouselElements;
    updateCarousel();
});

function updateCarousel() {
    carouselElements[(focusedCarousel - 2 + maxCarouselElements) % maxCarouselElements].style.opacity = 0;
    carouselElements[(focusedCarousel - 2 + maxCarouselElements) % maxCarouselElements].style.transform = "translateX(-35%) translateY(-7%) scale(0.2)";
    carouselElements[(focusedCarousel - 2 + maxCarouselElements) % maxCarouselElements].style.zIndex = 0;

    carouselElements[(focusedCarousel - 1 + maxCarouselElements) % maxCarouselElements].style.opacity = 1;
    carouselElements[(focusedCarousel - 1 + maxCarouselElements) % maxCarouselElements].style.transform = "translateX(-45%) translateY(-5%) scale(0.4)";
    carouselElements[(focusedCarousel - 1 + maxCarouselElements) % maxCarouselElements].style.zIndex = 1;
    carouselElements[(focusedCarousel - 1 + maxCarouselElements) % maxCarouselElements].querySelector(".info").style.translate = "0 -100%";
    carouselElements[(focusedCarousel - 1 + maxCarouselElements) % maxCarouselElements].querySelector(".info").style.opacity = 0;

    carouselElements[focusedCarousel].style.opacity = 1;
    carouselElements[focusedCarousel].style.transform = "none";
    carouselElements[focusedCarousel].style.zIndex = 2;

    carouselElements[focusedCarousel].querySelector(".info").style.translate = "0";
    carouselElements[focusedCarousel].querySelector(".info").style.opacity = 1;

    carouselElements[(focusedCarousel + 1) % maxCarouselElements].style.opacity = 1;
    carouselElements[(focusedCarousel + 1) % maxCarouselElements].style.transform = "translateX(45%) translateY(-5%) scale(0.4)";
    carouselElements[(focusedCarousel + 1) % maxCarouselElements].style.zIndex = 1;
    carouselElements[(focusedCarousel + 1) % maxCarouselElements].querySelector(".info").style.translate = "0 -100%";
    carouselElements[(focusedCarousel + 1) % maxCarouselElements].querySelector(".info").style.opacity = 0;

    carouselElements[(focusedCarousel + 2) % maxCarouselElements].style.opacity = 0;
    carouselElements[(focusedCarousel + 2) % maxCarouselElements].style.transform = "translateX(35%) translateY(-7%) scale(0.2)";
    carouselElements[(focusedCarousel + 2) % maxCarouselElements].style.zIndex = 0;
}

const contactForm = document.getElementById("contact-form");
const inputFields = contactForm.querySelectorAll(".input-wrap input");
const textarea = contactForm.querySelector(".input-wrap textarea");
const labels = contactForm.querySelectorAll(".input-wrap label");

for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener("focus", (event) => {
        const label = labels[i];
        label.style.transform = "translateY(0)";
        label.style.translate = "0 -110%";
        label.style.opacity = 1;
        label.style.fontSize = "0.9rem";
    });

    inputFields[i].addEventListener("blur", (event) => {
        if (inputFields[i].value) return;
        const label = labels[i];
        label.style.transform = "translateY(25px)";
        label.style.translate = "0 -50%";
        label.style.opacity = 0.5;
        label.style.fontSize = "1.1rem";
    });

    inputFields[i].addEventListener("input", (event) => {
        const label = labels[i];
        if (inputFields[i].value) {
            label.style.transform = "translateY(0)";
            label.style.translate = "0 -110%";
            label.style.opacity = 1;
            label.style.fontSize = "0.9rem";
        } else {
            label.style.transform = "translateY(25px)";
            label.style.translate = "0 -50%";
            label.style.opacity = 0.5;
            label.style.fontSize = "1.1rem";
        }
    });
}

textarea.addEventListener("focus", (event) => {
    const label = labels[3];
    label.style.transform = "translateY(0)";
    label.style.translate = "0 -110%";
    label.style.opacity = 1;
    label.style.fontSize = "0.9rem";
});

textarea.addEventListener("blur", (event) => {
    if (textarea.value) return;
    const label = labels[3];
    label.style.transform = "translateY(25px)";
    label.style.translate = "0 -50%";
    label.style.opacity = 0.5;
    label.style.fontSize = "1.1rem";
});

textarea.addEventListener("input", (event) => {
    const label = labels[3];
    if (textarea.value) {
        label.style.transform = "translateY(0)";
        label.style.translate = "0 -110%";
        label.style.opacity = 1;
        label.style.fontSize = "0.9rem";
    } else {
        label.style.transform = "translateY(25px)";
        label.style.translate = "0 -50%";
        label.style.opacity = 0.5;
        label.style.fontSize = "1.1rem";
    }
});

var modal = document.getElementById("popup");

var images = document.querySelectorAll("#gallery img");
var modalImg = document.getElementById("popupImage");

images.forEach(function (img) {
    img.onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    };
});

function closePopup() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        closePopup();
    }
};
