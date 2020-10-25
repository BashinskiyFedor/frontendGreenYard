<template>
<section class="ftco-section" id="about-section">
    <div class="container">
        <div class="row">
            <div class="col-md-6 d-flex align-items-stretch">
                <div class="about-wrap img w-100" style="background-image: url(images/about.jpg);">
                    <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-crane"></span></div>
                </div>
            </div>
            <div class="col-md-6 py-5 pl-md-5">
                <div class="row justify-content-center mb-4 pt-md-4">
                    <div class="col-md-12 heading-section ">
                        <span class="subheading">Добро пожаловать в GREENHOUSE YARD</span>
                        <h2 class="mb-4">GREENHOUSE YARD</h2>
                        <div class="d-flex about">
                            <div class="icon"><span class="flaticon-hammer"></span></div>
                            <h3>
                                Мы работаем в этом бизнесе с 1975 года и предоставляем лучшие промышленные услуги.
                            </h3>
                        </div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <div class="d-flex video-image align-items-center mt-md-4">
                            <a href="#" class="video img d-flex align-items-center justify-content-center" style="background-image: url(images/about-2.jpg);">
                                <span class="fa fa-play-circle"></span>
                            </a>
                            <h4 class="ml-4">Вот как мы работаем с нашими клиентами, Смотрите видео</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'AboutSection'
})
</script>
