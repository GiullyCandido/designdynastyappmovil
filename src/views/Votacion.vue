<script setup>
    import NavBar from '../components/NavBar.vue';
    import Banner from '../components/Banner.vue';
    import Votacion from '../components/VotacionPortafolio.vue'
    import Footer from '../components/Footer.vue';
</script>
<template>
    <header>
        <NavBar></NavBar>
    </header>
    <main>
        <Banner></Banner>
        <Votacion></Votacion>
        <Footer></Footer>
    </main>
</template>