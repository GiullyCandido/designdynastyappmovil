<template>
    <div class="container m-auto p-5 estilocontainer">
            <h2 class="text-center">
                ¿Quienes somos?
            </h2>
            <p class="texto">
                ¡Bienvenido a <span class="especial-font">Design Dynasty</span>!
                En Design Dynasty, nos dedicamos a celebrar la creatividad y el talento de artistas de todo el mundo. Cada mes, seleccionamos cuidadosamente a dos artistas excepcionales y les ofrecemos un espacio destacado para exhibir sus obras inspiradoras.
            </p>
    </div>
</template>

<style>
    .texto{
        text-align: justify;
    }

    @media (min-width: 380px) {
        .texto{
            width: 100%;
        }
    }

    @media (min-width: 768px) {
        .estilocontainer{
            margin: auto;
            width: 65vw;
        }
    }
    @media (min-width: 992px) {
        .estilocontainer{
        width: 45vw;
        margin: auto;
        }
    }
    .special-font {
        font-family: 'Playwrite ID', sans-serif;
    }
</style>