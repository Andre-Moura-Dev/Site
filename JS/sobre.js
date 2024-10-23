//Mudar cor de fundo da pagina
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

document.getElementById('changeTheme').addEventListener('click', toggleTheme);

const style = document.createElement('style');

style.textContent = `
    .dark-theme {
        background-color: #333;
        color: #f4f4f4;
    }
    .dark-theme header, .dark-theme footer {
        background-color: #222;
    }
    .dark-theme article {
        background-color: #444;
        color: #f4f4f4;
    }
`;

// Array de cores para controle de botão
const themes = [
    { background: 'lightblue', color: 'black' },
    { background: 'lightgray', color: 'black' },
    { background: 'lightgreen', color: 'black' },
    { background: 'lightcoral', color: 'white' },
];

let currentThemeIndex = 0; //Inicialização da variável

document.getElementById("changeTheme").addEventListener("click", function() {
    // Altera para o próximo tema
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    // Aplica o novo tema com uma transição suave
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    document.body.style.backgroundColor = themes[currentThemeIndex].background;
    document.body.style.color = themes[currentThemeIndex].color;
});