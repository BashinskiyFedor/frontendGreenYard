<template>
<div class="pt-4 pb-5">
    <div class="container">
        <div class="row d-flex align-items-start align-items-center px-3 px-md-0">
            <div class="col-md-4 d-flex mb-2 mb-md-0">
                <a class="navbar-brand d-flex align-items-center" href="index.html">
                    <span class="flaticon flaticon-crane"></span>
                    <span class="ml-2">GreenHouse Yard<small>Construction Company</small></span>
                </a>
            </div>
            <div class="col-md-4 d-flex topper mb-md-0 mb-2 align-items-center">
                <div class="icon d-flex justify-content-center align-items-center">
                    <fa :icon="['fa', 'map']" />
                </div>
                <div class="pr-md-4 pl-md-3 pl-3 text">
                    <p class="con"><span>Наш номер</span> <span>8-962-300-37-33</span></p>
                    <p class="con">Позвоните нам сейчас 24/7 Служба поддержки клиентов</p>
                </div>
            </div>
            <div class="col-md-4 d-flex topper mb-md-0 align-items-center">
                <div class="icon d-flex justify-content-center align-items-center">
                    <fa :icon="['fas', 'paper-plane']" />
                </div>
                <div class="text pl-3 pl-md-3">
                    <p class="hr"><span>Наше местоположение</span></p>
                    <p class="con">г. Белгород, ул. 45-Стрелковой дивизии</p>
                </div>
            </div>
        </div>
    </div>
</div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container d-flex align-items-center">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-bars"></span> Menu
        </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="(route, id) in routes" :key="id">
                  <router-link class="nav-link" :to="{ name: route.name, params: {}}">
                    {{ route.description }}
                  </router-link>
                </li>
            </ul>
            <a href="#" class="btn-custom" data-toggle="modal" data-target="#exampleModalCenter">Узнать больше</a>
        </div>
    </div>
</nav>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'
import { ref } from "vue";
export default defineComponent({
    name: 'GreenHouseNavigate',
    setup() {
      const routes = ref([
        { name: 'home', description: 'Главная' },
        { name: 'about', description: 'О нас' },
        { name: 'services', description: 'Услуги' },
        { name: 'project', description: 'Проекты' },
        { name: 'blog', description: 'Блог' },
        //{ name: 'contact', description: 'Связаться с нами' },
      ]);

      return {
        routes
      }
    },
})
</script>
