function displayTime() {
    const now = new Date();
     const hours = String(now.getHours()).padStart(2, '0');
     const minutes = String(now.getMinutes()).padStart(2, '0');
     const seconds = String(now.getSeconds()).padStart(2, '0');
     const timeString = hours + ':' + minutes;
     document.getElementById('time').textContent = timeString;
    }
setInterval(displayTime, 1000);

function addList(button) {
    if (button.style.backgroundColor === 'transparent' || button.style.backgroundColor === '') {
        button.style.backgroundColor = '#E9B824';
        button.style.borderColor = 'black';
    } else {
        button.style.backgroundColor = 'transparent';
        button.style.borderColor = '#E9B824';
    }
}

function instaOpen(){
    const floater = document.getElementById("floatOpen");
    const mobileUI = document.getElementById("mobile");
    const userName = document.getElementById("username");
    const fullName = document.getElementById("fullName");
    const profileOpen = document.getElementById("profileButton");
    const appOpen = document.getElementById("appOpenButton");

    profileOpen.href = 'https://www.instagram.com/thinakaranmanokaran/'; 
    appOpen.href = 'https://www.instagram.com/'; 
    appOpen.textContent = 'Open Instagram'; 
    userName.textContent = '@thinakaranmanokaran';
    fullName.textContent = 'Thinakaran Manokaran';
    profileOpen.textContent = 'Go to Profile';
    floater.classList.add("floatCurrent");
    mobileUI.classList.add("backFilter");
}

function inOpen(){
    const floater = document.getElementById("floatOpen");
    const mobileUI = document.getElementById("mobile");
    const userName = document.getElementById("username");
    const fullName = document.getElementById("fullName");
    const profileOpen = document.getElementById("profileButton");
    const appOpen = document.getElementById("appOpenButton");

    profileOpen.href = 'https://www.linkedin.com/in/thinakaran-manohar/'; 
    appOpen.href = 'https://www.linkedin.com/';
    appOpen.textContent = 'Open Linkedin';  
    profileOpen.textContent = 'Go to Profile';
    userName.textContent = '@thinakaran-manohar';
    fullName.textContent = 'Thinakaran Manokaran';
    floater.classList.add("floatCurrent");
    mobileUI.classList.add("backFilter");
}

function mailOpen(){
    const floater = document.getElementById("floatOpen");
    const mobileUI = document.getElementById("mobile");
    const userName = document.getElementById("username");
    const fullName = document.getElementById("fullName");
    const profileOpen = document.getElementById("profileButton");
    const appOpen = document.getElementById("appOpenButton");

    profileOpen.href = 'mailto:dheenamanohar@gmail.com'; 
    appOpen.href = 'https://mail.google.com';
    appOpen.textContent = 'Open Mail';  
    profileOpen.textContent = 'Go to Chat';
    userName.textContent = 'dheenamanohar@gmail';
    fullName.textContent = 'Thinakaran Manokaran';
    floater.classList.add("floatCurrent");
    mobileUI.classList.add("backFilter");
}

function waOpen(){
    const floater = document.getElementById("floatOpen");
    const mobileUI = document.getElementById("mobile");
    const userName = document.getElementById("username");
    const fullName = document.getElementById("fullName");
    const profileOpen = document.getElementById("profileButton");
    const appOpen = document.getElementById("appOpenButton");

    profileOpen.href = 'https://wa.me/919655982558?text=Hi Thinakaran"'; 
    appOpen.href = 'https://www.whatsapp.com/';
    appOpen.textContent = 'Open Whatsapp';  
    profileOpen.textContent = 'Go to Chat';
    userName.textContent = '+91 96559 82558';
    fullName.textContent = 'Thinakaran Manokaran';
    floater.classList.add("floatCurrent");
    mobileUI.classList.add("backFilter");
}

function phOpen(){
    const floater = document.getElementById("floatOpen");
    const mobileUI = document.getElementById("mobile");
    const userName = document.getElementById("username");
    const fullName = document.getElementById("fullName");
    const profileOpen = document.getElementById("profileButton");
    const appOpen = document.getElementById("appOpenButton");

    profileOpen.href = 'tel:+919655982558"'; 
    appOpen.href = 'https://www.whatsapp.com/';
    appOpen.textContent = 'Open Phone';  
    profileOpen.textContent = 'Contact Him';
    userName.textContent = '+91 96559 82558';
    fullName.textContent = 'Thinakaran Manokaran';
    floater.classList.add("floatCurrent");
    mobileUI.classList.add("backFilter");
}

function smsOpen(){
    const floater = document.getElementById("floatOpen");
    const mobileUI = document.getElementById("mobile");
    const userName = document.getElementById("username");
    const fullName = document.getElementById("fullName");
    const profileOpen = document.getElementById("profileButton");
    const appOpen = document.getElementById("appOpenButton");

    profileOpen.href = 'sms:+919655982558'; 
    appOpen.href = '';
    appOpen.textContent = 'Open Message';  
    profileOpen.textContent = 'Go to Chat';
    userName.textContent = '+91 96559 82558';
    fullName.textContent = 'Thinakaran Manokaran';
    floater.classList.add("floatCurrent");
    mobileUI.classList.add("backFilter");
}

function twitterOpen(){
    const floater = document.getElementById("floatOpen");
    const mobileUI = document.getElementById("mobile");
    const userName = document.getElementById("username");
    const fullName = document.getElementById("fullName");
    const profileOpen = document.getElementById("profileButton");
    const appOpen = document.getElementById("appOpenButton");

    profileOpen.href = "https://x.com/DheenaManohar"; 
    appOpen.href = 'https://x.com/';
    appOpen.textContent = 'Open Twitter';  
    profileOpen.textContent = 'Go to Profile';
    userName.textContent = '@DheenaManohar';
    fullName.textContent = 'Thinakaran Manokaran';
    floater.classList.add("floatCurrent");
    mobileUI.classList.add("backFilter");
}

function floaClose(){
    const floater = document.getElementById("floatOpen");
    floater.classList.remove("floatCurrent");
}

document.addEventListener('DOMContentLoaded', function () {
    const nameGave = document.getElementById("inputName");
    const nameTook = document.getElementById("sendName");

    nameGave.addEventListener("input", () => {
        if (nameGave.value.trim() !== '') {
            nameTook.disabled = false;
        } else {
            nameTook.disabled = true;
        }
    });
});

function openChat(){
    const slider = document.getElementById("nameSlider");
    const chatApp = document.getElementById("chatPage");
    slider.classList.add("openChat");
    chatApp.classList.add("transformChat");
}

document.addEventListener('DOMContentLoaded', loadMessages);

function loadMessages() {
  const messages = JSON.parse(localStorage.getItem('messages')) || [];
  const messagesContainer = document.getElementById('messages');
  messagesContainer.innerHTML = '';

  messages.forEach((messageObj) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = messageObj.text;
    messageElement.classList.add('message');

    const metaInfoElement = document.createElement('div');
    metaInfoElement.classList.add('meta-info');

    const personNameElement = document.createElement('span');
    personNameElement.textContent = messageObj.messangerName;
    personNameElement.classList.add('personName');

    const timestampElement = document.createElement('span');
    timestampElement.textContent = messageObj.timestamp;
    timestampElement.classList.add('timestamp');

    metaInfoElement.appendChild(personNameElement);
    metaInfoElement.appendChild(timestampElement);
    messageElement.appendChild(metaInfoElement);
    messagesContainer.appendChild(messageElement);
  });

  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const messageText = messageInput.value.trim();
  const messangerName = document.getElementById("inputName").value.trim();

  if (messageText && messangerName) {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    const messageObj = { text: messageText, timestamp: timestamp, messangerName: messangerName };

    messages.push(messageObj);
    localStorage.setItem('messages', JSON.stringify(messages));
    loadMessages();
    messageInput.value = '';
  }
}

function changeList(){
    const smallList = document.getElementById("listIcon");
    const bigList = document.getElementById("sortIcon");
    var fileDataContainer = document.querySelectorAll('#filesContainer');
    var fileContainer = document.querySelectorAll("#fileDataContainer");
    var filePhoto = document.querySelectorAll("#filePhoto");
    var fileName = document.querySelectorAll(".fileDataName");

    if(smallList.style.display !== 'none'){
        bigList.style.display = 'inline';
        smallList.style.display = 'none';

        fileDataContainer.forEach(function(fileDataContain) {
            fileDataContain.classList.remove("filesSortListedContainer");
        });

        fileContainer.forEach( function(fileContaine) {
            fileContaine.classList.remove("fileDataSortListed");
        });

        filePhoto.forEach( function(filePic) {
            filePic.classList.remove("sortListedPhoto");
        });

        fileName.forEach( function(fileRename) {
            fileRename.classList.remove("sortListedName");
        });

        // console.log('sortlisted');
    } else{
        bigList.style.display = 'none';
        smallList.style.display = 'inline';

        fileDataContainer.forEach(function(fileDataContain) {
            fileDataContain.classList.add("filesSortListedContainer");
        });

        fileContainer.forEach( function(fileContaine) {
            fileContaine.classList.add("fileDataSortListed");
        });

        filePhoto.forEach( function(filePic) {
            filePic.classList.add("sortListedPhoto");
        });

        fileName.forEach( function(fileRename) {
            fileRename.classList.add("sortListedName");
        });

        // console.log('not sortlisted');
    }
}