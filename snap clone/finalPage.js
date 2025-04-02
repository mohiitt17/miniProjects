let chatLists = document.querySelectorAll(".item");
function showChatBox () {
    document.getElementById("chat-container").style.display = "block";
}

function hideChatBox () {
    document.getElementById("chat-container").style.display = "none";
}

let backBtn = document.querySelector('.back-btn');
backBtn.addEventListener("click", () => {
     hideChatBox();
    
    });


chatLists.forEach((items) => {
    items.addEventListener('click', () => {
        const personName = items.getAttribute('data-name');
        const avatarImg = items.getAttribute('data-avatar');
        let userData = document.querySelector('.user-data');
        const chatBoxAvatar = document.querySelector('.chatbox-avatar');
        const chatBoxPersonName = document.querySelector('.chatbox-person-name');
        chatBoxAvatar.src = avatarImg;
        chatBoxPersonName.textContent = personName;
        if(items) {
            showChatBox();
            userData.innerHTML = '';
        }
    }) 
})



function showInputMessage () {
    let userInput = document.getElementById("user-input");
    let userData = document.querySelector('.user-data');
    let newHtml = `  <div class="user-container">
              <p class="user-tag">ME</p>
              <div class="message-container">
            <p id="user-message"> ${userInput.value}</p>
          </div>
          </div>`;
 userData.innerHTML += newHtml;
 userInput.value = "";
        
}


let sendBtn = document.querySelector("#send-btn");

sendBtn.addEventListener("click", showInputMessage);


