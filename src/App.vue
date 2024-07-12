<template>
    <Header />

    <main class="flex flex-col grow">
        <RouterView />
    </main>

    <Footer v-if="$route.name !== 'flex' && $route.name !== 'grid'" />
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>