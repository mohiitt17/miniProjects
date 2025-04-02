let menu = document.querySelector("#menu");
let menuclickValue = 1;
let menuList = document.querySelector(".menu-list");
let item1 = document.querySelector("#item1");
let item1ClickValue = 1;
let item2 = document.querySelector("#item2");
let item2ClickValue = 1;
let item3 = document.querySelector("#item3");
let item3ClickValue = 1;
let item4 = document.querySelector("#item4");
let item4ClickValue = 1;
let numberText = document.querySelector("#number-format");
let numberTextClickCount = 1;
let usernameHeading = document.querySelector(".username-heading");
let inputText = document.querySelector("#username-input");
let loginButton = document.querySelector("#login-button");
let errorText = document.querySelector("#input-text");

menu.addEventListener("click", () => {
  menuclickValue++;
  if (menuclickValue % 2 == 0) {
    menuList.classList.add("listjs");
  } else if (menuclickValue % 2 == 1) {
    menuList.classList.remove("listjs");
  }
});

item1.addEventListener("click", () => {
  item1ClickValue++;
  if (item1ClickValue % 2 == 0) {
    item1.classList.add("oneitemjs");
  } else if (item1ClickValue % 2 == 1) {
    item1.classList.remove("oneitemjs");
  }
});

item2.addEventListener("click", () => {
  item2ClickValue++;
  if (item2ClickValue % 2 == 0) {
    item2.classList.add("oneitemjs");
  } else if (item1ClickValue % 2 == 1) {
    item2.classList.remove("oneitemjs");
  }
});
item3.addEventListener("click", () => {
  item3ClickValue++;
  if (item3ClickValue % 2 == 0) {
    item3.classList.add("oneitemjs");
  } else if (item3ClickValue % 2 == 1) {
    item3.classList.remove("oneitemjs");
  }
});
item4.addEventListener("click", () => {
  item4ClickValue++;
  if (item4ClickValue % 2 == 0) {
    item4.classList.add("oneitemjs");
  } else if (item4ClickValue % 2 == 1) {
    item4.classList.remove("oneitemjs");
  }
});

numberText.addEventListener("click", () => {
  numberTextClickCount++;
  if (numberTextClickCount % 2 == 0) {
    numberText.innerHTML = "use username or email address instead";
    usernameHeading.innerHTML = "Phone Number";
    document.getElementById("india-numformat").style.display = "block";
    document.getElementById("username-input").style.width = "290px"; 
    document.getElementById("username-input").style.left = "110px";
    errorText.innerHTML = ``;
    document.getElementById("username-input").style.border = "";
    document.getElementById("username-input").style.backgroundColor = "";
    document.getElementById("username-input").style.borderRadius = "";
  } else if (numberTextClickCount % 2 == 1) {
    numberText.innerHTML = "use phone number instead";
    usernameHeading.innerHTML = "Username or email address";
    document.getElementById("india-numformat").style.display = "none";
    document.getElementById("username-input").style.width = "390px";
    document.getElementById("username-input").style.left = "0px";
  }
});

loginButton.addEventListener("click", () => {
  document.getElementById("loader-container").style.visibility = "visible";
  document.getElementById("loader-item").style.visibility = "visible";
  document.getElementById("loader").style.visibility = "visible";
  document.getElementById("loader-p").style.visibility = "visible";
  document.getElementById("loader-container").style.visibility = "visible";
  setTimeout(() => {
    document.getElementById("loader-container").style.visibility = "hidden";
    document.getElementById("loader-item").style.visibility = "hidden";
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("loader-p").style.visibility = "hidden";
    document.getElementById("loader-container").style.visibility = "hidden";
  }, 1000);
  let userInput = inputText.value;
  if (userInput == "urr_mohitt" || userInput == "8512837245") {
    setTimeout(() => {
      document.getElementById("username-input").style.border =
        "2px solid #15B392";
      document.getElementById("username-input").style.backgroundColor = "#fff";
      document.getElementById("username-input").style.borderRadius = "10px";
      errorText.innerHTML = ``;
      window.location.href = "./loginPage2.html";

    }, 1000);
  } else if (userInput == "") {
    setTimeout(() => {
      errorText.innerHTML = `Input cannot be empty`;
      document.getElementById("username-input").style.border =
        "2px solid #D91656";
      document.getElementById("username-input").style.backgroundColor = "#fff";
      document.getElementById("username-input").style.borderRadius = "10px";
    }, 1000);
  } else {
    setTimeout(() => {
      errorText.innerHTML = `we could not find your account, Please try again !`;
      document.getElementById("username-input").style.border =
        "2px solid #D91656";
      document.getElementById("username-input").style.backgroundColor = "#fff";
      document.getElementById("username-input").style.borderRadius = "10px";
    }, 1000);
  }
});
