<script setup>
import router from '@/router';
</script>
<template>
    <div class="flex flex-col justify-center items-center height margin-top-12 b-rd-10 main-background-color">
        <div class="registraitointext">
            Главная страница
        </div>
        <p class="loginIn text-color-white underline text-center font-size-8 gold pt-10">
            <router-link to="/">Зарегестрироваться</router-link>
        </p>
    </div>
</template>

<style scoped>
.registraitointext{
    color: #F7F4A4;
    text-align: center;
    font-family: Inter;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 732px;
}
.gold{
    color: #F7F4A4;
}
.height{
    height: 512px;
}
</style>