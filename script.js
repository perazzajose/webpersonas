const personList = document.getElementById("personList");
const searchInput = document.getElementById("searchInput");
const modeButton = document.getElementById("modeButton");

async function fetchPersons() {
    try {
        const response = await fetch("data-uxh8OBAX1lc28WB3koA15.json"); // Reemplaza "URL_DEL_JSON" con la URL de tu servidor JSON
        const data = await response.json();
        data.forEach(person => {
            const li = document.createElement("li");
            li.textContent = `${person.name}, Vive en: ${person.address}, Teléfono: ${person.phone}`;
            personList.appendChild(li);
        });
    } catch (error) {
        console.error("Error al cargar las personas:", error);
    }
}

fetchPersons();

const savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
    document.querySelector(".container").classList.add("dark-mode");
}

modeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".container").classList.toggle("dark-mode");
    const currentMode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("mode", currentMode);
});
