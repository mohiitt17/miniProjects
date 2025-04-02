let passwordInput = document.querySelector('#pass-input');
let nextPageBtn = document.querySelector('#next-btn');
let viewPass = document.querySelector('#visible');
let hidePass  = document.querySelector('#visible-off');
let showMessage = document.querySelector('#show-message');
let loader = document.querySelector(".loader");

function changeFormat () {
    if (passwordInput.type == 'password') {
    passwordInput.type = "text"
    hidePass.style.display = "block"
    viewPass.style.display = 'none';
} else {
    passwordInput.type = "password"
    hidePass.style.display = "none"
    viewPass.style.display = 'block';

}
}

function checkInput () {
    let inputValue = passwordInput.value; 
    loader.style.display = 'block';
    loader.style.top = '57%';
    nextPageBtn.style.color = '#656b73';
    nextPageBtn.style.backgroundColor= '#bfc1c233';
    setTimeout( () => {
        if (inputValue == '') {
            showMessage.innerHTML = `pass : 17oct2005`
            passwordInput.style.border = "2px solid #d91656";
            viewPass.style.top = '45%';
            hidePass.style.top = '45%';
            loader.style.display = 'none';
            nextPageBtn.style.top= '22px';
            passwordInput.style.backgroundColor = 'white'
            nextPageBtn.style.color = 'white';
            nextPageBtn.style.backgroundColor= '#0fadff';
              } else if (inputValue == '17oct2005') {
                  passwordInput.style.border = "2px solid #15B392";
                  showMessage.innerHTML = "";
                  loader.style.display = 'block'; 
                  loader.style.display = 'none';
                  nextPageBtn.style.color = 'white';
                  nextPageBtn.style.top= '22px';
                  viewPass.style.top = '41.5%';
                  hidePass.style.top = '41.5%';
                  nextPageBtn.style.backgroundColor= '#0fadff';
                  passwordInput.style.backgroundColor = 'white'
                  window.location.href = "../html/finalPage.html";
              } else {
                  showMessage.innerHTML = `pass : 17oct2005`
                  passwordInput.style.border = "2px solid #d91656";
                  viewPass.style.top = '45%';
                  hidePass.style.top = '45%';
                  loader.style.display = 'block';  
                  loader.style.display = 'none';
                  nextPageBtn.style.color = 'white';
                  nextPageBtn.style.backgroundColor= '#0fadff';
                  nextPageBtn.style.top= '22px';
                  passwordInput.style.backgroundColor = 'white'
           }
    },1500 )
 
}

nextPageBtn.addEventListener('click', checkInput);

viewPass.addEventListener('click', changeFormat);
hidePass.addEventListener('click', changeFormat);


