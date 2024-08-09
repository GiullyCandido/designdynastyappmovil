<template>
    <div class="bg-image">
        <div>
            <h1 class="zoom-titulo">
                Design Dynasty
            </h1>
        </div>
    </div>
</template>

<style>
    .bg-image{
        height: 600px;
        width: auto;
        background-image: url(../assets/background-banner.jpg);
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-shadow: 2px 2px 4px rgba(225, 0, 255, 0.423);
        color: white;
    }
    .zoom-titulo {
        animation: zoomInText 1.5s forwards; 
    }
    @keyframes zoomInText {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.2);
    }
    }
</style>