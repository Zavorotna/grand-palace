// residential/commercial (rc) slider
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".popap-block")) {
    function isValidPhoneNumber(phoneNumber) {
      // Регулярний вираз для перевірки формату номеру телефону +380xxxxxxxxx
      const phoneRegex = /\+380[0-9]{9}$/;
      return phoneRegex.test(phoneNumber);
    }

    let userPhoneInput = document.querySelector("#phoneValidation") //інпут для введення номеру телефону

    userPhoneInput.addEventListener("change", function () {
      let validateNum = isValidPhoneNumber(userPhoneInput.value)
      console.log(validateNum);
      if (validateNum) {
        if (document.querySelector(".incorrect-number")) {
          userPhoneInput.classList.remove("incorrect-number")
          document.querySelector(".incorect-number-test").classList.add("d-none")
          userPhoneInput.classList.add("correct-number")
        } else {
          if (!document.querySelector(".correct-number")) {
            userPhoneInput.classList.add("correct-number")
          }

        }
      } else {
        document.querySelector(".incorect-number-test").classList.remove("d-none")
        if (document.querySelector(".correct-number")) {
          userPhoneInput.classList.remove("correct-number")
          document.querySelector(".incorect-number-test").classList.remove("d-none")
          userPhoneInput.classList.add("incorrect-number")
        } else {
          if (!document.querySelector(".incorrect-number")) {
            userPhoneInput.classList.add("incorrect-number")
          }
        }
      }

    })
  }
  //slider main img
  if (document.querySelector('.slider-images')) {
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

  if (document.querySelector(".popap-more-info")) {
    const popapMain = document.querySelector(".popap-more-info")
    popapHeight = window.innerHeight
    console.log(popapHeight);
    if (popapHeight < 600) {
      popapMain.style.overflowY = "scroll"
      popapMain.classList.add("scroll-style")
    } else {
      popapMain.style.overflowY = ""
      popapMain.classList.remove("scroll-style")
      // popapMain.style.height = "55vh"
    }
  }
  const screenWidth = window.innerWidth

  // попап з текстом
  function readMoreUpgrade() {
    const btnReadMore = document.querySelectorAll(".btn-more"),
      btnCancel = document.querySelectorAll(".btn-more-cancel"),
      desriptMore = document.querySelectorAll(".text-comment-block"),
      commentBlock = document.querySelector(".comment-block")

    let sizeComments = [] // масив для розмірів коментарів

    desriptMore.forEach(comment => {
      const sizeComment = comment.scrollHeight
      sizeComments.push(sizeComment)
    })
    sizeComments.forEach((size, index) => {
      if (size > 50) {
        btnReadMore[index].style.display = "block"
        btnCancel[index].style.display = "none"
      } else {
        btnReadMore[index].style.display = "none"
        btnCancel[index].style.display = "none"
      }
    })
    console.log(sizeComments);
    btnReadMore.forEach((item, index) => {
      item.addEventListener("click", function (e) {
        console.log(item)
        e.preventDefault()
        desriptMore[index].classList.add("visible")
        btnCancel[index].style.display = "block"
        item.style.display = "none"
        if (screenWidth >= 768) {
          // commentBlock.style.paddingBottom = "5%"
        } else if (screenWidth >= 375 && screenWidth < 425) {
          commentBlock.style.paddingBottom = "75%"
        } else if (screenWidth >= 425 && screenWidth < 768) {
          commentBlock.style.paddingBottom = "50%"
        } else if (screenWidth < 375) {
          commentBlock.style.paddingBottom = "60%"
        }
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
  window.addEventListener("resize", function () {
    setTimeout(() => {
      slaiderComment()
    }, 100)
  })
  slaiderComment()

  function slaiderComment() {
    if (document.querySelector('.carousel')) {

      const carousel = document.querySelector('.carousel'),
        prevButton = document.querySelector('.left'),
        nextButton = document.querySelector('.right')

      let items = [...document.querySelectorAll(".carousel-item")]
      const screenWidth = window.innerWidth

      let itemWidth

      if (screenWidth >= 1024) {
        const percent = 48

        itemWidth = screenWidth * (percent / 100)

      } else {
        itemWidth = items[0].offsetWidth + 75
      }

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
    }

  }

  function sliderGalery(carouselBlock, carouselItems, buttonArrow) {
    const carousel = document.querySelector(carouselBlock)
    console.log(carousel);
    let items = [...document.querySelectorAll(carouselItems)]

    console.log(items);
    const itemWidth = items[0].offsetWidth
    let currentIndex = 0,
      isAnimating = false,
      touchStartX = 0,
      touchEndX = 0,
      intervalId;

    function updateCarousel() {
      while (carousel.firstChild) {
        carousel.removeChild(carousel.firstChild)
      }

      const firstClone = items[items.length - 1].cloneNode(true)
      firstClone.style.transform = `translateX: (-${itemWidth}px)`
      carousel.insertAdjacentElement("afterbegin", firstClone)

      for (let i = 0; i < items.length; i++) {
        const item = items[i].cloneNode(true)
        item.style.transform = `translateX: (${i} * ${itemWidth}px)`
        carousel.appendChild(item)
      }
    }

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

    function nextSlide() {
      items.push(items.shift())
      goToIndex(1)
    }

    function prevSlide() {
      items.unshift(items.pop())
      goToIndex(-1)
    }

    function handleTouchStart(e) {
      touchStartX = e.touches[0].clientX
      stopSliderInterval()
    }

    function handleTouchMove(e) {
      touchEndX = e.touches[0].clientX
    }

    function handleTouchEnd() {
      const touchDiff = touchStartX - touchEndX
      if (touchDiff > 50) {
        nextSlide()
      } else if (touchDiff < -50) {
        prevSlide()
      }
      startSliderInterval()
    }

    function startSliderInterval() {
      intervalId = setInterval(nextSlide, 4000) // 4 seconds interval
    }

    function stopSliderInterval() {
      clearInterval(intervalId)
    }

    function setupSlider() {
      if (window.innerWidth < 600) {
        updateCarousel()
        carousel.addEventListener('touchstart', handleTouchStart)
        carousel.addEventListener('touchmove', handleTouchMove)
        carousel.addEventListener('touchend', handleTouchEnd)
        startSliderInterval()
      } else {
        carousel.removeEventListener('touchstart', handleTouchStart)
        carousel.removeEventListener('touchmove', handleTouchMove)
        carousel.removeEventListener('touchend', handleTouchEnd)
        stopSliderInterval()
      }
    }
    setupSlider()
  }

  if (screenWidth <= 540 && document.querySelector(".construction-progress")) {
    sliderGalery(".construction-progress__galery", ".construction-progress__img", false)
  }

  //popup
  if (document.querySelector(".popap-block")) {
    const bgDark = document.querySelector(".opacity-bg"),
      popupForm = document.querySelector(".popap-more-info"),
      cancelPopap = document.querySelector(".cancel-popap"),
      openPopap = document.querySelector(".open-popap")

    bgDark.addEventListener("click", function (e) {
      e.preventDefault()
      cancelPopapBg()
    })
    cancelPopap.addEventListener("click", function (e) {
      e.preventDefault()
      cancelPopapBg()
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

  // let //floors navigation for slider
  //   floorNumber = document.getElementsByName("floor"),
  //   floors = document.querySelectorAll(".floor"),
  //   currentFloor;

  // initiateSlider();

  // floorNumber.forEach((e) => {
  //   e.oninput = initiateSlider;
  // })

  // function initiateSlider() {
  // function currFloor() {
  //   for (var i = 0; i < floorNumber.length; i++) {
  //     if (floorNumber[i].checked) {
  //       for (let f = 0; f < floors.length; f++) {
  //         floors[f].style.display = "none";
  //         if (floors[f].getAttribute("data-floor-number") == floorNumber[i].value) {
  //           currentFloor = floors[f];
  //           currentFloor.style.display = "block";
  //           return currentFloor
  //         }
  //       }
  //       break;
  //     }
  //   }

  // }
  // currFloor()
  // //slider
  // currentFloor = currFloor()
  // console.log(currentFloor);
  // let rc_btn_prev = document.querySelector(".btn-arrow-prev"),
  //   rc_btn_next = document.querySelector(".btn-arrow-next"),
  //   rc_slider_line = document.querySelector(".js-slider"),
  //   rc_slides = document.querySelectorAll(".slide"),
  //   scrollWidth = rc_slides[1].getBoundingClientRect().width,
  //   navigationButtons = document.querySelectorAll(".filter-queue__items input"),
  //   currentSlideBtn = document.querySelector(".currentSlideBtn"),
  //   currentSlide;
  // // console.log(navigationButtons);
  // for (let i = 0; i < rc_slides.length; i++) { // set data attribute with order numbers of each picture
  //   // console.log(navigationButtons[i].dataset.orderNumber);
  //   navigationButtons[i].dataset.orderNumber = i;
  //   rc_slides[i].dataset.orderNumber = i;
  // }

  // rc_slider_line.scroll(rc_slider_line.scrollLeft += scrollWidth * currentSlideBtn.getAttribute("data-order-number"), 0); // set start position for slider
  // rc_slides[currentSlideBtn.getAttribute("data-order-number")].classList.add("currentSlide");

  // currentSlide = document.querySelector(".currentSlide");

  // buttonHide();

  // navigationButtons.forEach(e => {
  //   e.onclick = goToSlide; //call function with click on navigation button for slider
  // });

  // rc_btn_next.onclick = goToNextSlide; // call function to move to next slide
  // rc_btn_prev.onclick = goToPrevSlide; // call function to move to prev slide

  // function goToNextSlide(event) {
  //   event.preventDefault();

  //   rc_slides = Array.from(rc_slides); //set class for current slide
  //   let currentSlideNumber = rc_slides.indexOf(currentSlide);
  //   currentSlide.classList.remove("currentSlide");
  //   rc_slides[currentSlideNumber + 1].classList.add("currentSlide");
  //   currentSlide = document.querySelector(".currentSlide");

  //   buttonHide();

  //   navigationButtons = Array.from(navigationButtons); //set class for current nav button
  //   let currentButtonNumber = navigationButtons.indexOf(currentSlideBtn);
  //   currentSlideBtn.classList.remove("currentSlideBtn");
  //   navigationButtons[currentButtonNumber + 1].classList.add("currentSlideBtn");
  //   currentSlideBtn = document.querySelector(".currentSlideBtn");

  //   rc_slider_line.scroll(rc_slider_line.scrollLeft += scrollWidth, 0); //slider scroll
  // }

  // function goToPrevSlide(event) {
  //   event.preventDefault();

  //   rc_slides = Array.from(rc_slides); //set class for current slide
  //   let currentSlideNumber = rc_slides.indexOf(currentSlide);
  //   currentSlide.classList.remove("currentSlide");
  //   rc_slides[currentSlideNumber - 1].classList.add("currentSlide");
  //   currentSlide = document.querySelector(".currentSlide");

  //   buttonHide();
  //   console.log(rc_btn_prev.innerText);

  //   navigationButtons = Array.from(navigationButtons); //set class for current nav button
  //   let currentButtonNumber = navigationButtons.indexOf(currentSlideBtn);
  //   currentSlideBtn.classList.remove("currentSlideBtn");
  //   navigationButtons[currentButtonNumber - 1].classList.add("currentSlideBtn");
  //   currentSlideBtn = document.querySelector(".currentSlideBtn");

  //   rc_slider_line.scroll(rc_slider_line.scrollLeft - scrollWidth, 0); //slider scroll

  // }

  // function goToSlide(event) {
  //   event.preventDefault();
  //   currentSlideBtn.classList.remove("currentSlideBtn"); //set class for current nav button
  //   event.target.classList.add("currentSlideBtn");

  //   navigationButtons = Array.from(navigationButtons); //set class for current slide
  //   rc_slides = Array.from(rc_slides);
  //   currentSlideBtn = document.querySelector(".currentSlideBtn");
  //   currentSlide.classList.remove("currentSlide");
  //   rc_slides[navigationButtons.indexOf(currentSlideBtn)].classList.add("currentSlide");
  //   currentSlide = document.querySelector(".currentSlide");

  //   buttonHide();

  //   rc_slider_line.scroll(rc_slider_line.scrollLeft = scrollWidth * navigationButtons.indexOf(currentSlideBtn), 0); //slider scroll
  // }

  // function buttonHide() {
  //   let btn_prev_text = rc_btn_prev.querySelector("span span"),
  //     btn_next_text = rc_btn_next.querySelector("span span"),
  //     order_name = document.querySelector(".plan-nav__title h3");
  //   rc_slides = Array.from(rc_slides);

  //   if (rc_slides.indexOf(currentSlide) == 1) {
  //     rc_btn_prev.style.visibility = "visible";
  //     rc_btn_next.style.visibility = "visible";

  //     order_name.innerText = `II черга`;
  //     btn_prev_text.innerText = `I черга`;
  //     btn_next_text.innerText = `III черга`;
  //   } else if (rc_slides.indexOf(currentSlide) == 0) {
  //     order_name.innerText = `I черга`;
  //     rc_btn_prev.style.visibility = "hidden";
  //     rc_btn_next.style.visibility = "visible";
  //     btn_next_text.innerText = `II черга`;
  //   } else if (rc_slides.indexOf(currentSlide) == 2) {
  //     order_name.innerText = `III черга`;
  //     rc_btn_prev.style.visibility = "visible";
  //     rc_btn_next.style.visibility = "hidden";
  //     btn_prev_text.innerText = `II черга`;
  //   }
  // }
  // }

})


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.floor').forEach(function (floor) {
    if (floor.getAttribute('data-floor-number') == 1) {
      floor.style.display = 'block';
    } else {
      floor.style.display = 'none';

    }
  })
  const floorRadioButtons = document.querySelectorAll('.js-floor');

  floorRadioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
      const selectedFloor = this.value

      document.querySelectorAll('.floor').forEach(function (floor) {
        floor.style.display = 'none'
      })

      const selectedFloorContainer = document.querySelector(`.floor[data-floor-number="${selectedFloor}"]`)

      if (selectedFloorContainer) {
        selectedFloorContainer.style.display = 'block'
      } else {
        console.error(`Елемент з data-floor-number="${selectedFloor}" не знайдений.`)
      }
    })
  })

  // galery
  const imgGalery = document.querySelector(".construction-progress_galery-block"),
    videoGalery = document.querySelector(".construction-progress_galery-video"),
    ctaPhoto = document.querySelector(".photo"),
    ctaVideo = document.querySelector(".video")

    ctaPhoto.addEventListener("click", function (e){
      e.preventDefault();
      imgGalery.style.display = "grid";
      videoGalery.style.display = "none";
    });
    
    ctaVideo.addEventListener("click", function (e){
      e.preventDefault();
      imgGalery.style.display = "none";
      videoGalery.style.display = "grid";
    });

})
