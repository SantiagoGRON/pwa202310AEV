<script setup>
  import { RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <title>ARCI</title>
        <h1 align="center">ARCI</h1>
        <div id="navegador">
            <nav class="menu">
                <ul>
                    <li><RouterLink to="/">Inicio</RouterLink></li>
                    <li><RouterLink to="/login">Iniciar sesion</RouterLink></li>
                    <li><RouterLink to="/singIn">Registrarse</RouterLink></li>

                </ul>
                
            </nav>
        </div>
        

    </header>
    </template>

<style scoped>
    #navegador ul {
        list-style-type: none;
        text-align: center;
    }

    #navegador li {
        display: inline;
        text-align: center;
        margin: 0 10px 0 0;
    }

        #navegador li a {
            padding: 2px 7px 2px 7px;
            color: #666;
            background-color: #eeeeee;
            border: 1px solid #ccc;
            text-decoration: none;
        }

            #navegador li a:hover {
                background-color: #333333;
                color: #ffffff;
            }
</style>