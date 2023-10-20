<script setup>
    import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
    <TheHeader />
    <main>
        <body>
            <div class="showcase">
                <h1>Registrarse</h1>
                <p>Inresar datos:</p>
                <input type="text" name="text" placeholder="Nombre">
                <input type="text" name="Nombres" placeholder="Email">
                <input type="text" name="pass" placeholder="Contrasena">
            </div>
        </body>

    </main>
</template>

<style scoped>
    main {
        background-color: blue;
        background-image: url('https://gifdb.com/images/high/club-penguin-dance-200-x-200-gif-znfusk83270n036o.gif');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% 100%;
    }

    .showcase {
        background-color: aqua;
        height: auto;
        width: auto;
        padding: 5%;
        border-radius: 15px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: .6;
    }

    input {
        border: none;
        font-size: 16px;
        height: auto;
        margin: 0;
        outline: 0;
        padding: 15px;
        width: 100%;
        background-color: #a1d1f5;
        color: #64696d;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
        margin-bottom: 30px;
    }
</style>