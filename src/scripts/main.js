AOS.init();

const dataDoAniversario = new Date("Nov 10, 2024 19:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOAniversario = timeStampDoAniversario - timeStampAtual;

    const segundosEmMs = 1000;
    const minutosEmMS = 1000 * 60;
    const horasEmMS = 1000 * 60 * 60;
    const diasEmMS = 1000 * 60 * 60 * 24;

    const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diasEmMS);
    const horasAteOAniversario = Math.floor((distanciaAteOAniversario % diasEmMS) / horasEmMS);
    const minutosAteOAniversario = Math.floor((distanciaAteOAniversario % horasEmMS) / minutosEmMS);
    const segundosAteOAniversario = Math.floor((distanciaAteOAniversario % minutosEmMS) / segundosEmMs);

    console.log(diasAteOAniversario);
    console.log(horasAteOAniversario);
    console.log(minutosAteOAniversario);
    console.log(segundosAteOAniversario);

    if (distanciaAteOAniversario < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = 'Já foi, te aguardo ano que vem!';
    }

    document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`
},1000)

