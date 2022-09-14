const exeFigures = () => {
    figures();
}

const figures = () => {
    const bgAnimated = document.querySelector('.bg-clear');
    for (let i = 0; i <= 20; i++) {
        let figure = document.createElement('span');
        figure.setAttribute('class', 'anima-b');

        const rand = (min, max) => Math.random() * (max - min) - min;

        const position = Math.floor(rand(1, 99));
        const delay = rand(5, .1);
        const duration = rand(24, 12);

        figure.style.left = `${position}%`

        figure.style.animationDelay = `${delay}s`
        figure.style.animationDuration = `${duration}s`
        figure.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`


        bgAnimated.appendChild(figure);
    }
}
exeFigures();