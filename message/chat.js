const inputText = document.querySelector('.chat-input');
const inputSend = document.querySelector('.send-btn');

const feed = document.querySelector('.message-feed');

let messages = [
    {type: "r", message: "How was your day?"},
    {type: "r", message: "My day was pretty good."}
]

function updateMessages() {
    let newCards = "";
    let card = "";
    messages.forEach(function(item) {
        if (item.type == "r") {
            card = `
            <p id="receive" class="message-card">${item.message}</p>
            `
        }
        else {
            card = `
            <p id="send" class="message-card">${item.message}</p>`
        }

        newCards += card;
        }
    )
    feed.innerHTML = newCards;
}
inputSend.addEventListener('click', function() {
    getText()
})

inputText.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {getText()}
})
function getText() {
    const text = inputText.value;
    if (text.trim() !== "") {
        messages.push({type: "s", message: text});
        updateMessages();
        inputText.value = "";

    }
}
updateMessages();