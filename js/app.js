//open mobile menu
const header = document.querySelector(".c-header");
const headerHamburgerIcon = document.querySelector(".c-header__burger");
const headerHamburger =
  document.querySelector(".c-header__mobile-column") || "";
const headerMobileMenu = document.querySelector(".c-header__right-side") || "";

headerHamburgerIcon.addEventListener("click", function () {
  header.classList.toggle("c-header--opened");
  headerMobileMenu.classList.toggle("c-header__right-side--opened");
  headerHamburgerIcon.classList.toggle("c-header__burger--active");
});

// checkbox serach panel

let checkboxSearch = document.getElementById("check1");
const addInput = document.querySelector(".c-search-panel__field--hidden");

checkboxSearch.addEventListener("change", function () {
  if (this.checked) {
    addInput.style.display = "block";
  } else {
    addInput.style.display = "none";
  }
});

// price range

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

// // popups

// $(document).on("click", ".show-sontact-us", function () {
//   let service = $(this).data("service");
//   $(".popup__select").val(service);
// });

// $(".show-sontact-us").magnificPopup({
//   items: {
//     src: ".popup--contact-us",
//   },
//   type: "inline",
//   mainClass: "my-mfp-slide-bottom",
//   fixedContentPos: true,
// });

// $(".show-thank-you").magnificPopup({
//   items: {
//     src: ".popup--thank-you",
//   },
//   type: "inline",
//   mainClass: "my-mfp-slide-bottom",
//   fixedContentPos: true,
// });

// // send message on email Ajax
// $("#main-form").submit(function () {
//   $.ajax({
//     type: "POST",
//     url: "mail.php",
//     data: $(this).serialize(),
//   }).done(function () {
//     $(this).find("input").val("");

//     $.magnificPopup.open({
//       items: {
//         src: "#thankyou",
//       },
//       mainClass: "mfp-letter",
//     });
//   });
//   return false;
// });
