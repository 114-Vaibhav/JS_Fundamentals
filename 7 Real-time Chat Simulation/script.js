const chatVg = document.getElementById('chat-vg');
const chatSk = document.getElementById('chat-sk');
const messageVg = document.getElementById('message-vg');
const messageSk = document.getElementById('message-sk');
const sendVg = document.getElementById('send-vg');
const sendSk = document.getElementById('send-sk');

let conversation = [];

function addMessage(sender, text, timestamp) {
    const message = { sender, text, timestamp };
    conversation.push(message);
    updateChat();
}
sendVg.addEventListener('click', () => {
    const text = messageVg.value.trim();
    if (text) {
        addMessage('VG', text, new Date());
        messageVg.value = '';
    }
    updateChat();
});

messageVg.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const text = messageVg.value.trim();
        if (text) {
            addMessage('VG', text, new Date());
            messageVg.value = '';
        }
        updateChat();
    }
});

messageSk.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const text = messageSk.value.trim();
        if (text) {
            addMessage('SK', text, new Date());
            messageSk.value = '';
        }
        updateChat();
    }
});

sendSk.addEventListener('click', () => {
    const text = messageSk.value.trim();
    if (text) {
        addMessage('SK', text, new Date());
        messageSk.value = '';
    }
    updateChat();
});

function scrollToBottom(chatBox) {
    chatBox.scrollTop = chatBox.scrollHeight;
}
function updateChat() {
    chatVg.innerHTML = '';
    chatSk.innerHTML = '';
    // let currentDay = conversation.length > 0 ? new Date(conversation[0].timestamp.getDate()) : null;
    // let currentMonth = conversation.length > 0 ? new Date(conversation[0].timestamp.getMonth()) : null;
    // let currentYear = conversation.length > 0 ? new Date(conversation[0].timestamp.getFullYear()) : null;

    conversation.forEach((msg) => {
        // let msgDay = new Date(msg.timestamp.getDate());
        // let msgMonth = new Date(msg.timestamp.getMonth());
        // let msgYear = new Date(msg.timestamp.getFullYear());
        let msgTime = msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        // console.log("msgTime", msgTime);
        // console.log("currentDay", currentDay);
        // console.log("msgDay", msgDay);
        // console.log("currentMonth", currentMonth);
        // console.log("msgMonth", msgMonth);
        // console.log("currentYear", currentYear);
        // console.log("msgYear", msgYear);

        const msgElementSender = document.createElement('div');
        msgElementSender.classList.add('mb-2', 'text-right', 'border', 'border-gray-300', 'rounded-lg', 'p-2', 'bg-blue-100', 'text-blue-800');
        msgElementSender.innerHTML = `<strong>${msg.sender}:</strong> ${msg.text} <subscript class="text-xs text-gray-500">${msgTime}</subscript>`;
        const msgElementReceiver = document.createElement('div');
        msgElementReceiver.classList.add('mb-2', 'text-left', 'border', 'border-gray-300', 'rounded-lg', 'p-2', 'bg-gray-100', 'text-gray-800');
        msgElementReceiver.innerHTML = `<strong>${msg.sender}:</strong> ${msg.text} <subscript class="text-xs text-gray-500">${msgTime}</subscript>`;

        if (msg.sender === 'VG') {
            chatVg.appendChild(msgElementSender);
            chatSk.appendChild(msgElementReceiver);
        } else {
            chatSk.appendChild(msgElementSender);
            chatVg.appendChild(msgElementReceiver);
        }

        // console.log('Message added:', msg);
        // console.log(msgElementSender);
        // console.log(msgElementReceiver);
    });
    scrollToBottom(chatVg);
    scrollToBottom(chatSk);
}
