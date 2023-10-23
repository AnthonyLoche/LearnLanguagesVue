<script setup>

</script>

<template>
    <header>
        <div class="container">
            <h1>Learn Languages</h1>
            <nav>
                <a href="" class="nav">Inicio</a>
                <a href="" class="nav">Linguagens</a>
                <a href="" class="nav">Interpretadores</a>
                <a href="" class="nav">Exercícios</a>
            </nav>
        </div>
    </header>
</template>

<style>
@import '../Styles/Principal.css';

:root {
    --corPrincipal: #D91E41;
    --corSecundaria: #782E8C;
}

header {
    color: #fff;
    background-color: var(--corPrincipal);
    background-image: linear-gradient(120deg, var(--corPrincipal), var(--corSecundaria));
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    width: 1000px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
}

nav {
    display: flex;
    gap: 20px;
}


a.nav {
    text-decoration: none;
    color: white;
    border-bottom: 2px solid white;
    opacity: 0.5;
    font-size: 15pt;
}

a.nav:hover {
    opacity: 1;
    transition: 0.5s;
    border-bottom: 2px solid black;
    scale: 1.05;
}

@media screen and (max-width:1024px) {
    .container {
        width: 1000px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    header{
        height: 200px;
    }
}
</style>