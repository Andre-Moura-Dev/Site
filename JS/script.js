//Mudar o tema de fundo da página

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

//Criação de um LISTENER para clicar na imagem e aparecer um janela e aparecer as informações sobre o produto
const modal = document.getElementById('infoModal');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDetails = document.getElementById('modalDetails');

//Função abrir modal
function openModal(title, price, details) {
    modalTitle = textContent = title;
    modalPrice = textContent = price;
    modalDetails.innerHTML = details.map(detail => `<li>${detail}</li>`).join('');
    modal.style.display = "block";
}

document.querySelector(".close").onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }

    else if(event.target != modal) {
        modal.style.display = "none";
    }
}

document.querySelectorAll('article img').forEach((img) => {
    img.addEventListener('click', function() {
        const article = img.closest('article');
        const title = article.querySelector('h2').textContent;
        const price = article.querySelector('p').textContent;
        const details = Array.from(article.querySelector('ol').children).map(li => li.textContent);
        
        openModal(title, price, details);
    });
});