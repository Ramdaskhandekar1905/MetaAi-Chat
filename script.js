const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

async function sendMessage() {
  const message = userInput.value;
  if (!message.trim()) return;

  addMessage("You", message, "user");
  userInput.value = "";

  const res = await fetch("http://127.0.0.1:8000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  addMessage("SakhiChat", data.reply, "bot");
}

function addMessage(sender, text, cls) {
  const div = document.createElement("div");
  div.classList.add("message", cls);
  div.innerHTML = `<b>${sender}:</b> ${text}`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}
