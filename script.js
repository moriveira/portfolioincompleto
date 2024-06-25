window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const aboutElement = document.querySelector('#sobremim');

    if (scrollPosition > 480) {
        aboutElement.style.width = '850px';
        aboutElement.style.height = '370px';
        aboutElement.style.opacity = '100%';
    } else {
        aboutElement.style.width = '300px';
        aboutElement.style.opacity = '0%';
    }

    // Ajustar o posicionamento do .user com base na posição de rolagem
    const userElement = document.querySelector('.user');
    if (scrollPosition > 480) {
        userElement.style.top = '76%';
        userElement.style.right = '30%';
    } else {
        userElement.style.top = '0%'; // Posição original quando a posição de rolagem for menor ou igual a 480
        userElement.style.right = '0%'; // Posição original quando a posição de rolagem for menor ou igual a 480
    }
});

document.addEventListener('click', function() {
    const paragrafo = document.querySelector('.click');
    const quadrado = document.querySelector('.certificados');

    paragrafo.addEventListener('click', function() {
        quadrado.style.display = 'block'; // Torna o quadrado visível ao clicar no parágrafo
    });
});

