let userText = null;
function updateCode() {
    userText = document.getElementById("htmlArea").value;
    document.getElementById("codeBox").innerHTML = userText;
}