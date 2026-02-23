function bigger(){
document.getElementById("Text").style.fontSize = "4em";
}
function fancify(){
    const text = document.getElementById("Text");
    const fancy = document.getElementById("fancy").checked;
    if (fancy) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    } 
}
function moo(){
    const text = document.getElementById("Text");
    let s = text.value;
    s = s.toUpperCase();
    const parts = s.split(".");
    for (let i = 0; i < parts.length - 1; i++) {
        let sentence = parts[i].trim();
        if (sentence.length === 0) continue;
        const words = sentence.split(/\s+/);
        words[words.length - 1] = words[words.length - 1] + "-Moo";
        parts[i] = words.join(" ");
    }
        text.value = parts.join(".");
}