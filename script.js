function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/WhatsApp Image 2024-10-25 at 7.40.05 PM.png");
    } else {
        img.setAttribute("src", "./assets/WhatsApp Image 2024-10-25 at 7.40.05 PM.png");
    }

    fetch('https://api.github.com/users/neres20030/repos')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Aqui você pode manipular os dados para exibir no seu portfólio
        })
        .catch(error => console.error('Erro:', error));
}
