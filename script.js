/* ==================================================
   SCRIPT.JS
   CONVITE DIGITAL
================================================== */


/* ==================================================
   BOTÃO COPIAR PIX
================================================== */

const botaoPix =
    document.getElementById("copiarPix");

const chavePix =
    document.getElementById("chavePix");

const mensagemPix =
    document.getElementById("mensagemPix");


if (
    botaoPix &&
    chavePix
) {

    botaoPix.addEventListener(
        "click",
        async () => {

            const texto =
                chavePix.value;


            try {

                /*
                Tenta usar a API moderna
                de clipboard
                */

                if (
                    navigator.clipboard &&
                    window.isSecureContext
                ) {

                    await navigator.clipboard
                        .writeText(texto);

                }

                /*
                Método alternativo
                */

                else {

                    const area =
                        document.createElement(
                            "textarea"
                        );

                    area.value =
                        texto;

                    area.style.position =
                        "fixed";

                    area.style.opacity =
                        "0";

                    document.body.appendChild(
                        area
                    );

                    area.focus();

                    area.select();

                    document.execCommand(
                        "copy"
                    );

                    area.remove();

                }


                /*
                Mensagem de sucesso
                */

                if (mensagemPix) {

                    mensagemPix.textContent =
                        "✅ Chave PIX copiada com sucesso!";

                }

            }


            catch (erro) {

                console.error(
                    "Erro ao copiar:",
                    erro
                );


                if (mensagemPix) {

                    mensagemPix.textContent =
                        "❌ Não foi possível copiar.";

                }

            }


            /*
            Remove a mensagem
            após 3 segundos
            */

            setTimeout(
                () => {

                    if (mensagemPix) {

                        mensagemPix.textContent =
                            "";

                    }

                },
                3000
            );

        }
    );

}


/* ==================================================
   ANIMAÇÃO DE ENTRADA DO CARTÃO
================================================== */

window.addEventListener(
    "load",
    () => {

        const cartao =
            document.querySelector(
                ".moldura"
            );


        if (cartao) {

            cartao.style.opacity =
                "0";

            cartao.style.transform =
                "translateY(30px)";


            setTimeout(
                () => {

                    cartao.style.transition =
                        "opacity 0.8s ease, transform 0.8s ease";

                    cartao.style.opacity =
                        "1";

                    cartao.style.transform =
                        "translateY(0)";

                },
                200
            );

        }

    }
);


/* ==================================================
   CONFIGURAÇÕES DO FUNDO
================================================== */


/*
   IMPORTANTE:

   Coloque os nomes das suas imagens
   exatamente como aparecem dentro
   da pasta "img".
*/


const CONFIG = {

    rosa:
        "img/rosa.png",

    vela:
        "img/vela.png",

    quantidadeRosas:
        10,

    quantidadeVelas:
        5,

    quantidadeParticulas:
        35

};


/* ==================================================
   FUNÇÃO PARA GERAR NÚMERO ALEATÓRIO
================================================== */

function aleatorio(
    minimo,
    maximo
) {

    return Math.random()
        * (maximo - minimo)
        + minimo;

}


/* ==================================================
   FUNÇÃO PARA CRIAR ROSAS
================================================== */

function criarRosas() {

    const container =
        document.getElementById(
            "rosasFlutuantes"
        );


    if (!container) {

        return;

    }


    for (
        let i = 0;
        i < CONFIG.quantidadeRosas;
        i++
    ) {

        const rosa =
            document.createElement(
                "img"
            );


        rosa.src =
            CONFIG.rosa;


        rosa.alt =
            "";


        rosa.className =
            "rosa-flutuante";


        /*
        Posição horizontal
        */

        rosa.style.left =
            aleatorio(
                0,
                100
            ) + "%";


        /*
        Tamanho aleatório
        */

        rosa.style.setProperty(
            "--tamanho",
            aleatorio(
                35,
                90
            ) + "px"
        );


        /*
        Opacidade
        */

        rosa.style.setProperty(
            "--opacidade",
            aleatorio(
                0.12,
                0.35
            )
        );


        /*
        Velocidade
        */

        rosa.style.setProperty(
            "--duracao",
            aleatorio(
                15,
                30
            ) + "s"
        );


        /*
        Atraso inicial
        */

        rosa.style.setProperty(
            "--atraso",
            aleatorio(
                -30,
                0
            ) + "s"
        );


        /*
        Movimento lateral
        */

        rosa.style.setProperty(
            "--movimento1",
            aleatorio(
                -80,
                80
            ) + "px"
        );


        rosa.style.setProperty(
            "--movimento2",
            aleatorio(
                -120,
                120
            ) + "px"
        );


        rosa.style.setProperty(
            "--movimento3",
            aleatorio(
                -100,
                100
            ) + "px"
        );


        rosa.style.setProperty(
            "--movimento4",
            aleatorio(
                -150,
                150
            ) + "px"
        );


        container.appendChild(
            rosa
        );

    }

}


/* ==================================================
   FUNÇÃO PARA CRIAR VELAS
================================================== */

function criarVelas() {

    const container =
        document.getElementById(
            "velasFlutuantes"
        );


    if (!container) {

        return;

    }


    for (
        let i = 0;
        i < CONFIG.quantidadeVelas;
        i++
    ) {

        const vela =
            document.createElement(
                "img"
            );


        vela.src =
            CONFIG.vela;


        vela.alt =
            "";


        vela.className =
            "vela-flutuante";


        /*
        Posição horizontal
        */

        vela.style.left =
            aleatorio(
                0,
                100
            ) + "%";


        /*
        Tamanho
        */

        vela.style.setProperty(
            "--tamanho",
            aleatorio(
                45,
                85
            ) + "px"
        );


        /*
        Opacidade
        */

        vela.style.setProperty(
            "--opacidade",
            aleatorio(
                0.10,
                0.28
            )
        );


        /*
        Velocidade
        */

        vela.style.setProperty(
            "--duracao",
            aleatorio(
                20,
                35
            ) + "s"
        );


        /*
        Atraso
        */

        vela.style.setProperty(
            "--atraso",
            aleatorio(
                -35,
                0
            ) + "s"
        );


        /*
        Movimento
        */

        vela.style.setProperty(
            "--movimento1",
            aleatorio(
                -60,
                60
            ) + "px"
        );


        vela.style.setProperty(
            "--movimento2",
            aleatorio(
                -100,
                100
            ) + "px"
        );


        vela.style.setProperty(
            "--movimento3",
            aleatorio(
                -80,
                80
            ) + "px"
        );


        vela.style.setProperty(
            "--movimento4",
            aleatorio(
                -120,
                120
            ) + "px"
        );


        container.appendChild(
            vela
        );

    }

}


/* ==================================================
   FUNÇÃO PARA CRIAR PARTÍCULAS
================================================== */

function criarParticulas() {

    const container =
        document.getElementById(
            "particulasMagicas"
        );


    if (!container) {

        return;

    }


    for (
        let i = 0;
        i < CONFIG.quantidadeParticulas;
        i++
    ) {

        const particula =
            document.createElement(
                "span"
            );


        particula.className =
            "particula";


        /*
        Posição horizontal
        */

        particula.style.setProperty(
            "--posicao",
            aleatorio(
                0,
                100
            ) + "%"
        );


        /*
        Tamanho
        */

        particula.style.setProperty(
            "--tamanho",
            aleatorio(
                2,
                6
            ) + "px"
        );


        /*
        Velocidade
        */

        particula.style.setProperty(
            "--duracao",
            aleatorio(
                8,
                18
            ) + "s"
        );


        /*
        Atraso
        */

        particula.style.setProperty(
            "--atraso",
            aleatorio(
                -18,
                0
            ) + "s"
        );


        /*
        Movimento lateral
        */

        particula.style.setProperty(
            "--movimento",
            aleatorio(
                -80,
                80
            ) + "px"
        );


        particula.style.setProperty(
            "--movimento2",
            aleatorio(
                -120,
                120
            ) + "px"
        );


        container.appendChild(
            particula
        );

    }

}


/* ==================================================
   INICIAR EFEITOS
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        criarRosas();

        criarVelas();

        criarParticulas();

    }
);
