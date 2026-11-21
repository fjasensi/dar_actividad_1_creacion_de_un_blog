const button = document.getElementById("theme-toggle");
const logo = document.getElementById("logo");
const logoBaseUrl = new URL(".", logo.src);

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;

    logo.src = new URL(`logo-${theme}.png`, logoBaseUrl).href;

    button.textContent = theme === "dark" ? "☀️" : "🌙";

    localStorage.setItem("theme", theme);
}

button.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;

    setTheme(currentTheme === "dark" ? "light" : "dark");
});

// Recuperar el tema guardado
const savedTheme = localStorage.getItem("theme") || "light";

setTheme(savedTheme);
