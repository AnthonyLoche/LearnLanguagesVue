<script setup>

</script>

<template>
    <footer>
        <div class="container">
            <div class="footer">
                <h3>Learn Languages</h3>
                <p>Documentando, Aprendendo e Ensinando Diversas Linguagens</p>
            </div>
            <div id="contatos">
                <div class="item">
                    <p>Anthony Gabriel Loche dos Reis</p>
                    <p>Email: anthonylocheifc@gmail.com</p>
                    <p>Telefone: (11) 9 9999-9999</p>
                </div>
                <div class="item">
                    <p>Jonatas Silva Peraza</p>
                    <p>Email: jonatasperaza.if@gmail.com</p>
                    <p>Telefone: (11) 9 9999-9999</p>
                </div>
            </div>

        </div>
    </footer>
</template>

<style scoped>
@import '../Styles/Principal.css';

footer {
    bottom: 0;
    position: relative;
    background-color: var(--corPrincipal);
    background-image: linear-gradient(120deg, var(--corPrincipal), var(--corSecundaria));
}

.container {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
}

.footer {
    text-align: left;
}

#contatos {
    display: flex;
    gap: 30px;
}

@media screen and (max-width:1024px) {
    footer {
        height: 250px;
        padding: 30px ;
    }
    .footer{
        margin-top: 100px;
        text-align: center;
    }


    .container {
        flex-direction: column;
        gap: 20px;
    }

    #contatos {
        flex-direction: column;
        gap: 20px;
    }
}
</style>