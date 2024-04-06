

// (function(){
//     const app = document.querySelector(".app");
//     const socket = io();

//     let uname;

//     app.querySelector(".join-screen #join-user").addEventListener("click", function(){
//         let username = app.querySelector(".join-screen #username").value;
//         if(username.length == 0) {
//             return;
//         }
//         socket.emit("newuser", username);
//         uname = username;
//         app.querySelector(".join-screen").classList.remove("active");
//         app.querySelector(".chat-screen").classList.add("active");
//     });

//     app.querySelector(".chat-screen #send-message").addEventListener('click', function(){
//         let message = app.querySelector(".chat-screen #message-input").value;
//         if(message.length == 0) {
//             return;
//         }
//         renderMessage("my", {
//             username: uname,
//             text: message
//         });
//         socket.emit("chat", {
//             username: uname,
//             text: message // corrected variable name here
//         });
//         app.querySelector(".chat-screen #message-input").value = "";
//     });

//     app.querySelector(".chat-screen #exit-chat").addEventListener("click", function(){
//         socket.emit("exituser", uname);
//         window.location.href = window.location.href;
//     });

//     socket.on("update", function(update){
//         renderMessage("update", update);
//     });

//     socket.on("chat", function(message){
//         renderMessage("other", message);
//     });

//     function renderMessage(type, message){
//         let messagecontainer = app.querySelector(".chat-screen .messages");
//         if(type === "my"){ // corrected comparison operator
//             let el = document.createElement("div");
//             el.setAttribute("class", "message my-message");
//             el.innerHTML = `<div>
//                 <div class="name">YOU</div>
//                 <div class="text">${message.text}</div>
//             </div>`; // corrected closing backticks
//             messagecontainer.appendChild(el);
//         } else if(type === "other"){ // corrected comparison operator
//             let el = document.createElement("div");
//             el.setAttribute("class", "message other-message");
//             el.innerHTML = `<div>
//                 <div class="name">${message.username}</div>
//                 <div class="text">${message.text}</div>
//             </div>`; // corrected closing backticks
//             messagecontainer.appendChild(el);
//         } else if(type === "update"){ // corrected comparison operator
//             let el = document.createElement("div");
//             el.setAttribute("class", "update");
//             el.innerText = message;
//             messagecontainer.appendChild(el);
//         }
//         messagecontainer.scrollTop = messagecontainer.scrollHeight - messagecontainer.clientHeight;
//     }
// })();
