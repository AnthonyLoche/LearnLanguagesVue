<script setup>
</script>

<template>
    <main>  
        <h1 id="title">
            Learn Languages
        </h1>
        <p class="legend">Documentando, Aprendendo e Ensinando Diversas Linguagens</p>

        <div id="containerLanguages">
            <router-link to="../views/Languages/JavaScript/javascript.vue" class="language">
                <img src="https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png" alt="" class="photosLanguage">
                <p>JavaScript</p>
            </router-link>
            <div class="language">
                <img src="https://th.bing.com/th/id/OIP.dJToM1TiZiJA0GYwzDHwjQHaHY?pid=ImgDet&rs=1" alt="" class="photosLanguage">
                <p>Python</p>
            </div>
            <div class="language">
                <img src="https://images.vexels.com/media/users/3/166253/isolated/lists/14bc03b7b1c2c4e2656fd4c0a981cbbc-cpp-programming-language-icon.png" alt="" class="photosLanguage">
                <p>C#</p>
            </div>
            <div class="language">
                <img src="https://logodix.com/logo/283001.png" alt="" class="photosLanguage">
                <p>Java</p>
            </div>
            <div class="language">
                <img src="https://pngimg.com/uploads/php/php_PNG43.png" alt="" class="photosLanguage">
                <p>PHP</p>
            </div>
            <div class="language">
                <img src="https://th.bing.com/th/id/R.d81c04d746224d25d1ae75b62e7561f3?rik=U1LfuH4fG4gBLw&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fRuby_logo.png&ehk=pdFSeKP%2fGRRuGPLxzDEsary7DOpTReXDqILn%2fjd40Tk%3d&risl=1&pid=ImgRaw&r=0" alt="" class="photosLanguage">
                <p>Ruby</p>
            </div>
            
            <div class="language">
                <img src="https://th.bing.com/th/id/OIP.R1tEyx0qYTk7wH7q6ueL3AHaFn?pid=ImgDet&rs=1" alt="" class="photosLanguage">
                <p>R</p>
            </div>
            
            <div class="language">
                <img src="https://logospng.org/download/c-plus-plus/c-plus-plus-4096.png" alt="" class="photosLanguage">
                <p>C++</p>
            </div>

            <div class="language">
                <img src="https://th.bing.com/th/id/OIP.tN1MXhizwKDDUBjzfCsvlAHaHa?pid=ImgDet&rs=1" alt="" class="photosLanguage">
                <p>C</p>
            </div>

            
            <div class="language">
                <img src="https://th.bing.com/th/id/R.b0cbe41d5658fdacc6b6d9b1447cc35d?rik=amRyqqEHGAb5gg&riu=http%3a%2f%2fopenacademy.github.io%2fHTML5-open-academy%2fsession07-css3%2fimages%2fcss3_logo.png&ehk=z1CJ%2fIGnyFkgK1jtIIWiV1W%2fhCe5eAGsKzdITTUNBxQ%3d&risl=&pid=ImgRaw&r=0" alt="" class="photosLanguage">
                <p>HTML / CSS</p>
            </div>

        </div>
    </main>
</template>

<style scoped>
@import '../Styles/Principal.css';

main{
    max-width: 1024px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    /* border-left: 2px solid black; 
    border-right: 2px solid black;  */
}

h1#title{
    font-size: 50pt;
    color: var(--corPrincipal);
    text-align: center;
}

p.legend{
    color: gray;
    font-size: 12pt;
}

#containerLanguages{
    margin: 100px auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
}
.language{
    text-align: center;
    border-bottom: 2px solid var(--corPrincipal);   
    width: 90%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

img.photosLanguage{
    width: 35%;
    object-fit: cover;
    border-radius: 10px;
}

@media screen and (max-width:1024px) {
    #containerLanguages{
        grid-template-columns: 1fr 1fr;
    }
    
}

</style>