document.addEventListener('DOMContentLoaded', () => {
    const mural = document.getElementById('mural-polaroids');
    const totalFotos = 32;

    const elogios = [
        "O sorriso mais doce desse world todinho.",
        "Você ama algodão doce, mas eu amo você.",
        "Esse teu olhar lindo me desmonta inteiro.",
        "Teu jeitinho meigo de deitar no meu ombro.",
        "Seu cabelo perfeito que eu amo acariciar.",
        "O toque da sua mão que me traz paz.",
        "Beijos longos que parecem parar o tempo.",
        "Cada dia mais íntimos, do jeitinho que eu amo.",
        "Grudados o dia inteiro e eu ainda quero mais.",
        "Você tem sabor de doçura e calmaria.",
        "Linda em cada pequeno detalhe e expressão.",
        "Seu abraço gostoso é o meu lugar favorito.",
        "Amo o som da sua risada boba comigo.",
        "Mais doce do que qualquer doce da terra.",
        "O escurinho do cinema com você foi perfeito.",
        "Amo a nossa conexão leve e sem esforços.",
        "Fica bem óbvio nas fotos o quanto sou bobo por ti.",
        "O seu perfume que fica gravado em mim.",
        "Minha namorada maravilhosa, linda e incrível.",
        "Nossa sintonia gostosa de sexta a domingo.",
        "O toque que me arrepia e me conforta.",
        "Me perco todinho na beleza do teu rosto.",
        "A garota mais linda de todo o universo.",
        "Amo cuidar de você e te encher de mimos.",
        "Minha melhor companhia para qualquer hora.",
        "Completamente apaixonado por esse seu jeitinho.",
        "Minha calmaria no meio de qualquer tempestade.",
        "Dois corpos que viram um só quando se abraçam.",
        "Você é o meu momentinho favorito do dia.",
        "Não canso de te olhar e pensar: que sorte a minha.",
        "Três meses deliciosos com a minha pessoa favorita.",
        "3 meses sendo o namorado mais feliz do mundo!"
    ];

    for (let i = 1; i <= totalFotos; i++) {
        const polaroid = document.createElement('div');
        polaroid.classList.add('polaroid');

        const legendaFrase = elogios[i - 1] || "Amo você ❤️";

        polaroid.innerHTML = `
            <div class="polaroid-img-wrapper">
                <img src="assets/img/${i}.jpeg" alt="Momento ${i}" loading="lazy">
            </div>
            <div class="polaroid-caption" title="${legendaFrase}">${legendaFrase}</div>
        `;

        mural.appendChild(polaroid);

        const randomRotation = (Math.random() * 6 - 3).toFixed(1);
        
        setTimeout(() => {
            polaroid.classList.add('visible');
            polaroid.style.transform = `rotate(${randomRotation}deg) translateY(0)`;
        }, i * 70);

        polaroid.addEventListener('mouseenter', () => {
            polaroid.style.transform = `rotate(${randomRotation}deg) translateY(-12px) scale(1.04)`;
        });

        polaroid.addEventListener('mouseleave', () => {
            polaroid.style.transform = `rotate(${randomRotation}deg) translateY(0) scale(1)`;
        });
    }
});