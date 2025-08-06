// Dark Mode Toggle
/*const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("dark-mode");
    toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});*/

// Typing Animation
window.onload = () => {
    const nameText = "Shubham Sanap";
    const textElement = document.getElementById("text");
    const cursor = document.getElementById("cursor");
    const subtitle = document.getElementById("subtitle");

    let index = 0;

    const typeWriter = () => {
        if (index < nameText.length) {
            textElement.textContent += nameText[index];
            index++;
            setTimeout(typeWriter, 150);
        } else {
            cursor.style.animation = "none";
            cursor.style.display = "none";
            // 🔥 Show the subtitle after typing is done
            subtitle.classList.add("show-subtitle");
        }
    };

    typeWriter();
};

