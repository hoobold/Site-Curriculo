document.documentElement.style.scrollBehavior = "smooth";

function fecharSecoes(botao) {

    document.querySelectorAll('.secao').forEach(secao => {
        secao.classList.remove('ativa');
    });

    document.querySelectorAll('.menu button').forEach(btn => {
        btn.classList.remove('ativo');
    });

    botao.classList.add('ativo');
}

function mostrarSecao(id, botao) {

    document.querySelectorAll('.secao').forEach(secao => {
        secao.classList.remove('ativa');
    });

    document.getElementById(id).classList.add('ativa');

    document.querySelectorAll('.menu button').forEach(btn => {
        btn.classList.remove('ativo');
    });

    botao.classList.add('ativo');
}

const nome = "Henrique Hobold";
const cargo = "Desenvolvedor Full Stack em Formação";

const nomeElemento = document.getElementById("nome");
const cargoElemento = document.getElementById("cargo");

let i = 0;
let j = 0;

function escreverNome() {

    if (i < nome.length) {

        nomeElemento.textContent += nome.charAt(i);
        i++;

        setTimeout(
            escreverNome,
            80 + Math.random() * 70
        );

    } else {

        setTimeout(escreverCargo, 300);
    }
}

function escreverCargo() {

    if (j < cargo.length) {

        cargoElemento.textContent += cargo.charAt(j);
        j++;

        setTimeout(
            escreverCargo,
            50 + Math.random() * 40
        );
    }
}

escreverNome();

const habilidades = document.getElementById("habilidades");

habilidades.innerHTML += `
    <div style="
        width:300px;
        height:10px;
        background:#222;
        border-radius:10px;
    ">
        <div style="
            width:80%;
            height:100%;
            background:#00d4ff;
            border-radius:10px;
        "></div>
    </div>
`;


for (let i = 0; i < 100; i++) {

    const estrela = document.createElement("div");

    const tamanho = Math.random() * 3 + 1;

    estrela.style.position = "fixed";
    estrela.style.width = tamanho + "px";
    estrela.style.height = tamanho + "px";

    const cores = [
        "#ffffff",
        "#ccefff",
        "#99ddff"
    ];

    estrela.style.background =
        cores[Math.floor(Math.random() * cores.length)];

    estrela.style.borderRadius = "50%";

    estrela.style.left =
        Math.random() * window.innerWidth + "px";

    estrela.style.top =
        Math.random() * window.innerHeight + "px";

    estrela.style.pointerEvents = "none";

    document.body.appendChild(estrela);

    estrela.animate(
        [
            { opacity: 0.2 },
            { opacity: 1 },
            { opacity: 0.2 }
        ],
        {
            duration: 2000 + Math.random() * 5000,
            iterations: Infinity
        }
    );
}

function criarEstrelaCadente() {

    const estrela = document.createElement("div");

    estrela.style.position = "fixed";
    estrela.style.top =
        Math.random() * 300 + "px";

    estrela.style.left = "-250px";

    estrela.style.width = "250px";
    estrela.style.height = "4px";

    estrela.style.background =
        "linear-gradient(to right, transparent, white)";

    estrela.style.transform =
        "rotate(25deg)";

    estrela.style.boxShadow =
        "0 0 10px #00d4ff";

    estrela.style.pointerEvents = "none";

    estrela.style.zIndex = "999";

    document.body.appendChild(estrela);

    estrela.animate(
        [
            {
                transform: "translate(0,0) rotate(25deg)",
                opacity: 1
            },
            {
                transform: "translate(120vw, 50vh) rotate(25deg)",
                opacity: 0
            }
        ],
        {
            duration: 2000,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        estrela.remove();
    }, 2000);
}

function iniciarEstrelasCadentes() {

    function loop() {

        criarEstrelaCadente();

        const tempo =
            10000 + Math.random() * 5000;

        setTimeout(loop, tempo);
    }

    loop();
}

iniciarEstrelasCadentes();