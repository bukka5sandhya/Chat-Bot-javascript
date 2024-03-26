let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEle = document.getElementById("chatContainer");
let userInputEle = document.getElementById("userInput");


function sendMsgToChatBox() {

    let userMsg = userInputEle.value;
    let msgContainerEle = document.createElement("div");
    msgContainerEle.classList.add("msg-to-chatbot-container");
    chatContainerEle.appendChild(msgContainerEle);

    let userMsgEle = document.createElement("span");
    userMsgEle.textContent = userMsg;
    userMsgEle.classList.add("msg-to-chatbot");
    msgContainerEle.appendChild(userMsgEle);

    userInputEle.value = "";
    getReplyFromChatBox();
}

function getReplyFromChatBox() {
    let noOFChatMsgs = chatbotMsgList.length;
    let chatBoxMsg = chatbotMsgList[Math.ceil(Math.random() * noOFChatMsgs) - 1];

    let msgContainerEle = document.createElement("div");
    msgContainerEle.classList.add("msg-to-chat-container");
    chatContainerEle.appendChild(msgContainerEle);

    let chatbotMsgEle = document.createElement("span");
    chatbotMsgEle.textContent = chatBoxMsg;
    chatbotMsgEle.classList.add("msg-to-chatbox");
    msgContainerEle.appendChild(chatbotMsgEle);
}