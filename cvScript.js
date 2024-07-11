document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status === 200) {
                    alert("Form submitted successfully");
                } else {
                    console.log(response);
                    alert(json.message);
                }
            })
            .catch(error => {
                console.log(error);
                alert("Something went wrong!");
            })
            .then(function() {
                form.reset();
            });
    });
});

const emojiButtons = document.querySelectorAll('.emoji-button');
const confettiContainer = document.getElementById('body-container');

emojiButtons.forEach(button => {
    button.addEventListener('click', () => {
        for (let i = 0; i < 10 + Math.floor(Math.random() * 11); i++) {
            const emoji = document.createElement('div');
            emoji.classList.add('emoji');
            emoji.innerText = button.innerText;

            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * -window.innerHeight;

            emoji.style.left = `${randomX}px`;
            emoji.style.top = `${randomY}px`;

            confettiContainer.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, 3000);
        }
    });
});

function rocketBoom(){
    const responseSend = document.getElementById("response-icon");
    responseSend.classList.add("response-rocket");
};


const mailButton = document.getElementById("response-send");
const responseInput = document.getElementById("response-input");

responseInput.addEventListener('input', () => {
    if (responseInput.value.trim() !== "") {
        mailButton.disabled = false;
    } else {
        mailButton.disabled = true;
    }
});
