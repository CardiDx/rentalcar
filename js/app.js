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
