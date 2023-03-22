const typer = () => {
    const ola = document.querySelector('.ola');
    const textArray = ola.innerHTML.split(''); // Usando 'split('')' consigo separar as palavras por cada letra

    ola.innerHTML = ''; // Deixa o elemento em branco
    textArray.forEach((letra, i) => { // Cada letra
        setTimeout(() => ola.innerHTML += letra, 90 * i); // Vai ser adicionado a cada 90ms
    })
}
typer();
