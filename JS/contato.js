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

document.head.appendChild(style);