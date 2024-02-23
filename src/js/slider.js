// residential/commercial (rc) slider
document.addEventListener("DOMContentLoaded", function () {
  //slider main img
  if (document.querySelectorAll('.slider-images img')) {
    const images = document.querySelectorAll('.slider-images img')
    let currentImgIndex = 0

    function showNextImage() {
      images[currentImgIndex].classList.remove('active')
      currentImgIndex = (currentImgIndex + 1) % images.length
      images[currentImgIndex].classList.add('active')
    }

    function startSlider() {
      let headerSlideInterval = setInterval(() => {
        showNextImage()
      }, 3000)
    }

    startSlider()
  }

  // попап з текстом
  function readMoreUpgrade() {
    const btnReadMore = document.querySelectorAll(".btn-more"),
      btnCancel = document.querySelectorAll(".btn-more-cancel"),
      desriptMore = document.querySelectorAll(".text-comment-block"),
      commentBlock = document.querySelector(".comment-block")

    btnReadMore.forEach((item, index) => {
      item.addEventListener("click", function (e) {
        console.log(item)
        e.preventDefault()
        desriptMore[index].classList.add("visible")
        btnCancel[index].style.display = "block"
        item.style.display = "none"
        commentBlock.style.paddingBottom = "100px"
      })
    })  
    
    btnCancel.forEach((item, index) => {
      item.addEventListener("click", function (e) {
        e.preventDefault()
        desriptMore[index].classList.remove("visible")
        btnReadMore[index].style.display = "block"
        item.style.display = "none"
        commentBlock.style.paddingBottom = ""
      })
    })
  }

  //слайдер на відгуки

  if (document.querySelector('.carousel')) {

    const carousel = document.querySelector('.carousel'),
      prevButton = document.querySelector('.left'),
      nextButton = document.querySelector('.right')

    let items = [...document.querySelectorAll(".carousel-item")]

    const itemWidth = items[0].offsetWidth + 60

    let currentIndex = 0,
      isAnimating = false

    function updateCarousel() {
      while (carousel.firstChild) {
        carousel.removeChild(carousel.firstChild)
      }

      const firstClone = items[items.length - 1].cloneNode(true)
      firstClone.style.left = `-${itemWidth}px`
      carousel.insertAdjacentElement("afterbegin", firstClone)

      for (let i = 0; i < items.length; i++) {
        const item = items[i].cloneNode(true)
        item.style.left = i * itemWidth + "px"
        carousel.appendChild(item)
      }
      readMoreUpgrade()
    }

    updateCarousel()

    function goToIndex(index) {
      isAnimating = true

      const distance = -index * itemWidth

      currentIndex = (currentIndex + items.length + index) % items.length

      carousel.style.transition = 'transform .5s ease-in-out'
      carousel.style.transform = `translateX(${distance}px)`

      setTimeout(() => {
        carousel.style.transition = 'none'
        carousel.style.transform = 'none'
        isAnimating = false
        updateCarousel()
      }, 500)
    }

    nextButton.addEventListener('click', (e) => {
      e.preventDefault()
      items.push(items.shift())
      goToIndex(1)
    })

    prevButton.addEventListener('click', (e) => {
      e.preventDefault()
      items.unshift(items.pop())
      goToIndex(-1)
    })

    // let touchStartX = 0,
    //   touchEndX = 0

    // carousel.addEventListener('touchstart', (e) => {
    //   touchStartX = e.touches[0].clientX
    // })

    // carousel.addEventListener('touchmove', (e) => {
    //   touchEndX = e.touches[0].clientX
    // })

    // carousel.addEventListener('touchend', () => {
    //   const touchDiff = touchStartX - touchEndX
    //   if (touchDiff > 50) {
    //     items.push(items.shift())
    //     goToIndex(1)
    //   } else if (touchDiff < -50) {
    //     items.unshift(items.pop())
    //     goToIndex(-1)
    //   }
    // })
  }

  //popup
  if(document.querySelector(".popap-block")) {
    const bgDark = document.querySelector(".opacity-bg"),
      popupForm = document.querySelector(".popap-more-info"),
      cancelPopap = document.querySelector(".cancel-popap"),
      openPopap = document.querySelector(".open-popap")

    bgDark.addEventListener("click", function (e) {
      e.preventDefault()
      cancelPopapBg ()
    })
    cancelPopap.addEventListener("click", function (e){
      e.preventDefault()
      cancelPopapBg ()
    })
    openPopap.addEventListener("click", function (e) {
      e.preventDefault()
      popupForm.style.display = "block"
      bgDark.style.display = "block"
    })
    function cancelPopapBg() {
      bgDark.style.display = "none"
      popupForm.style.display = "none"
    }
  }

  let //floors navigation for slider
    floorNumber = document.getElementsByName("floor"),
    floors = document.querySelectorAll(".floor"),
    currentFloor;

  initiateSlider();

  floorNumber.forEach((e) => {
    e.oninput = initiateSlider;
  })

  function initiateSlider() {
    for (var i = 0; i < floorNumber.length; i++) {
      if (floorNumber[i].checked) {
        for (let f = 0; f < floors.length; f++) {
          floors[f].style.display = "none";
          if (floors[f].getAttribute("data-floor-number") == floorNumber[i].value) {
            currentFloor = floors[f];
            currentFloor.style.display = "block";
          }
        }
        break;
      }
    }
    //slider
    let rc_btn_prev = document.querySelector(".btn-arrow-prev"),
      rc_btn_next = document.querySelector(".btn-arrow-next"),
      rc_slider_line = currentFloor.querySelector(".js-slider"),
      rc_slides = currentFloor.querySelectorAll(".slide"),
      scrollWidth = rc_slides[1].getBoundingClientRect().width,
      navigationButtons = document.querySelectorAll(".filter-queue__items input"),
      currentSlideBtn = document.querySelector(".currentSlideBtn"),
      currentSlide;

    for (let i = 0; i < rc_slides.length; i++) { // set data attribute with order numbers of each picture
      navigationButtons[i].dataset.orderNumber = i;
      rc_slides[i].dataset.orderNumber = i;
    }

    rc_slider_line.scroll(rc_slider_line.scrollLeft += scrollWidth * currentSlideBtn.getAttribute("data-order-number"), 0); // set start position for slider
    rc_slides[currentSlideBtn.getAttribute("data-order-number")].classList.add("currentSlide");

    currentSlide = document.querySelector(".currentSlide");

    buttonHide();

    navigationButtons.forEach(e => {
      e.onclick = goToSlide; //call function with click on navigation button for slider
    });

    rc_btn_next.onclick = goToNextSlide; // call function to move to next slide
    rc_btn_prev.onclick = goToPrevSlide; // call function to move to prev slide

    function goToNextSlide(event) {
      event.preventDefault();

      rc_slides = Array.from(rc_slides); //set class for current slide
      let currentSlideNumber = rc_slides.indexOf(currentSlide);
      currentSlide.classList.remove("currentSlide");
      rc_slides[currentSlideNumber + 1].classList.add("currentSlide");
      currentSlide = document.querySelector(".currentSlide");

      buttonHide();

      navigationButtons = Array.from(navigationButtons); //set class for current nav button
      let currentButtonNumber = navigationButtons.indexOf(currentSlideBtn);
      currentSlideBtn.classList.remove("currentSlideBtn");
      navigationButtons[currentButtonNumber + 1].classList.add("currentSlideBtn");
      currentSlideBtn = document.querySelector(".currentSlideBtn");

      rc_slider_line.scroll(rc_slider_line.scrollLeft += scrollWidth, 0); //slider scroll
    }

    function goToPrevSlide(event) {
      event.preventDefault();

      rc_slides = Array.from(rc_slides); //set class for current slide
      let currentSlideNumber = rc_slides.indexOf(currentSlide);
      currentSlide.classList.remove("currentSlide");
      rc_slides[currentSlideNumber - 1].classList.add("currentSlide");
      currentSlide = document.querySelector(".currentSlide");

      buttonHide();
      console.log(rc_btn_prev.innerText);

      navigationButtons = Array.from(navigationButtons); //set class for current nav button
      let currentButtonNumber = navigationButtons.indexOf(currentSlideBtn);
      currentSlideBtn.classList.remove("currentSlideBtn");
      navigationButtons[currentButtonNumber - 1].classList.add("currentSlideBtn");
      currentSlideBtn = document.querySelector(".currentSlideBtn");

      rc_slider_line.scroll(rc_slider_line.scrollLeft - scrollWidth, 0); //slider scroll

    }

    function goToSlide(event) {
      event.preventDefault();
      currentSlideBtn.classList.remove("currentSlideBtn"); //set class for current nav button
      event.target.classList.add("currentSlideBtn");

      navigationButtons = Array.from(navigationButtons); //set class for current slide
      rc_slides = Array.from(rc_slides);
      currentSlideBtn = document.querySelector(".currentSlideBtn");
      currentSlide.classList.remove("currentSlide");
      rc_slides[navigationButtons.indexOf(currentSlideBtn)].classList.add("currentSlide");
      currentSlide = document.querySelector(".currentSlide");

      buttonHide();

      rc_slider_line.scroll(rc_slider_line.scrollLeft = scrollWidth * navigationButtons.indexOf(currentSlideBtn), 0); //slider scroll
    }

    function buttonHide() {
      let btn_prev_text = rc_btn_prev.querySelector("span span"),
        btn_next_text = rc_btn_next.querySelector("span span"),
        order_name = document.querySelector(".plan-nav__title h3");
      rc_slides = Array.from(rc_slides);

      if (rc_slides.indexOf(currentSlide) == 1) {
        rc_btn_prev.style.visibility = "visible";
        rc_btn_next.style.visibility = "visible";

        order_name.innerText = `II черга`;
        btn_prev_text.innerText = `I черга`;
        btn_next_text.innerText = `III черга`;
      } else if (rc_slides.indexOf(currentSlide) == 0) {
        order_name.innerText = `I черга`;
        rc_btn_prev.style.visibility = "hidden";
        rc_btn_next.style.visibility = "visible";
        btn_next_text.innerText = `II черга`;
      } else if (rc_slides.indexOf(currentSlide) == 2) {
        order_name.innerText = `III черга`;
        rc_btn_prev.style.visibility = "visible";
        rc_btn_next.style.visibility = "hidden";
        btn_prev_text.innerText = `II черга`;
      }
    }
  }

})
