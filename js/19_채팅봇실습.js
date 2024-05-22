function sendMessage(){
    const inputbox = document.getElementById("user-input");
    const message = inputbox.value.teim
    if(message == "") {
        return;
    }
    메세지보이기(message, "user");
    inputbox.value = "";
    setTineout(() =>{
        메세지보이기("저는 채팅봇 입니다.", "bot");
    }, 1000);
}

function 메세지보이기(message,sender) {
    const chatbox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message",   sender    + "-message") 
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
}