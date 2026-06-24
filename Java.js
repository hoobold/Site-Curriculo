document.documentElement.style.scrollBehavior = "smooth";

function fecharSecoes() {

    document.querySelectorAll('.secao').forEach(secao => {
        secao.classList.remove('ativa');
    });

    document.querySelectorAll('.menu button').forEach(btn => {
        btn.classList.remove('ativo');
    });
}

let aprendizadoJaEscrito = false;

function escreverAprendizado() {

    if (aprendizadoJaEscrito) return;

    aprendizadoJaEscrito = true;

    const elemento =
        document.getElementById("texto-aprendizado");

    elemento.textContent = "";

    indiceAprendizado = 0;

    function digitar() {

        if (indiceAprendizado < textoAprendizado.length) {

            elemento.textContent +=
                textoAprendizado.charAt(indiceAprendizado);

            indiceAprendizado++;

            setTimeout(digitar, 20);
        }
    }

    digitar();
}

let sobreDigitado = false;
let projetosDigitado = false;
let aprendizadoDigitado = false;

function mostrarSecao(id, botao) {

    document.querySelectorAll('.secao').forEach(secao => {
        secao.classList.remove('ativa');
    });

    document.getElementById(id).classList.add('ativa');

    document.querySelectorAll('.menu button').forEach(btn => {
        btn.classList.remove('ativo');
    });

    botao.classList.add('ativo');

    if (id === "sobre" && !sobreDigitado) {
        escreverTexto("texto-sobre", textoSobre);
        sobreDigitado = true;
    }

    if (id === "projetos" && !projetosDigitado) {
        escreverTexto("texto-projetos", textoProjetos);
        projetosDigitado = true;
    }

    if (id === "certificacoes" && !aprendizadoDigitado) {
        escreverTexto("texto-aprendizado", textoAprendizado);
        aprendizadoDigitado = true;
    }
}

function escreverTexto(idElemento, texto) {

    const elemento =
        document.getElementById(idElemento);

    elemento.textContent = "";

    let indice = 0;

    function digitar() {

        if (indice < texto.length) {

            elemento.textContent +=
                texto.charAt(indice);

            indice++;

            setTimeout(digitar, 20);
        }
    }

    digitar();
}


const nome = "Henrique Hobold";
const cargo = "Desenvolvedor Full-Stack em Formação";
const textoAprendizado = "Minha formação prática foi construída através de cursos online, documentação oficial e projetos pessoais desenvolvidos para aplicar os conceitos estudados.";
const textoSobre = "Sou estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e desenvolvimento de software. Estou constantemente estudando e criando projetos para aprimorar minhas habilidades.";
const textoProjetos = "Este portfólio foi desenvolvido utilizando HTML, CSS e JavaScript. Também possuo experiência com PHP e MySQL, aplicando os conhecimentos adquiridos em projetos práticos.";
const nomeElemento = document.getElementById("nome");
const cargoElemento = document.getElementById("cargo");
const descricoes = {

    html:
        "Estruturação semântica de páginas web, formulários e acessibilidade.",

    css:
        "Estilização avançada, responsividade, Flexbox e animações.",

    javascript:
        "Manipulação do DOM, eventos, lógica e consumos de APIs.",

    php:
        "Desenvolvimento back-end, processamento de dados e integração com bancos de dados.",

    mysql:
        "Modelagem, consultas SQL e gerenciamento de banco de dados relacionais."

};

let i = 0;
let j = 0;

const painelHabilidade =
    document.getElementById("descricao-habilidade");

document
    .querySelectorAll(".skill-info")
    .forEach(item => {

item.addEventListener("mouseenter", () => {

    painelHabilidade.textContent =
        descricoes[
            item.parentElement.dataset.skill
        ];

});

});

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