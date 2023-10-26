<script setup>
    import TheHeader from '@/components/TheHeader.vue';
    import Thefooter from '@/components/TheFooter.vue';
</script>

<template>
    <main>
        <TheHeader/>
        <body>
            <div class="showcase">
                <h2>Equipo 3</h2>
                <ul>
                    <li>Santiago Garcia Rivera</li>
                    <li>Marco Antonio Contreras Gonzalez</li>
                </ul>
            </div>
        </body>
        <Thefooter/>
    </main>
</template>

<style scoped>
    body {
        background-color: blue;
        background-image: url('https://gifdb.com/images/high/club-penguin-dance-200-x-200-gif-znfusk83270n036o.gif');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% 100%;
    }

    .showcase {
        background-color: gray;
        height: auto;
        width: auto;
        padding: 5%;
        border-radius: 15px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: .6;
    }
</style>