<template>
<section class="hero-wrap js-fullheight" style="background-image: url('images/bg_1.jpg');">
    <div class="overlay"></div>
    <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-center">
            <div class="col-lg-6 ">
                <div class="mt-5">
                    <h1 class="mb-4">Мы строим<br><span>отличные теплицы</span></h1>
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    <p><a href="#" class="btn btn-primary">Наши услуги</a> <a href="#" class="btn btn-white">Акции</a></p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section ftco-no-pt ftco-no-pb ftco-services-2">
    <div class="container">
        <div class="row no-gutters d-flex">
            <WorkCard class="col-lg-4 d-flex align-self-stretch" />
            <WorkCard class="col-lg-4 d-flex align-self-stretch" />
            <WorkCard class="col-lg-4 d-flex align-self-stretch" />
        </div>
    </div>
</section>

<AboutSection />

<section class="ftco-intro">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center">
                <div class="img" style="background-image: url(images/bg_2.jpg);">
                    <div class="overlay"></div>
                    <h2>ПРЕДОСТАВЛЕНИЕ ИНДИВИДУАЛЬНЫХ И КАЧЕСТВЕННЫХ УСЛУГ</h2>
                    <p>We can manage your dream building A small river named Duden flows by their place</p>
                    <!--<p class="mb-0"><a href="#" class="btn btn-primary px-4 py-3">Request A Quote</a></p>-->
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section bg-half-light">
    <div class="container">
        <div class="row justify-content-center mb-5 pb-2">
            <div class="col-md-8 text-center heading-section ">
                <span class="subheading">Наши услуги</span>
                <h2 class="mb-4">Мы предлагаем услуги</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <ServiceCard />
            </div>
            <div class="col-md-4">
                <ServiceCard />
            </div>
            <div class="col-md-4">
                <ServiceCard />
            </div>
        </div>
    </div>
</section>

<StatisticCompanySection />

<section class="ftco-section">
    <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 text-center heading-section ">
                <span class="subheading">Мы производим и поставляем</span>
                <h2 class="mb-4">Cовременные теплицы нового поколения</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <ProjectCard />
            </div>
            <div class="col-md-4">
                <ProjectCard />
            </div>
            <div class="col-md-4">
                <ProjectCard />
            </div>

            <div class="col-md-4">
                <ProjectCard />
            </div>
            <div class="col-md-4">
                <ProjectCard />
            </div>
            <div class="col-md-4">
                <ProjectCard />
            </div>
        </div>
    </div>
</section>

<section class="ftco-section ftco-no-pt ftco-no-pb testimony-section img">
    <div class="overlay"></div>
    <div class="container">
        <div class="row  justify-content-center">
            <div class="col-md-6 p-4 pl-md-0 py-md-5 pr-md-5 aside-stretch d-flex align-items-center">
                <div class="heading-section heading-section-white">
                    <span class="subheading" style="color:#fff;">Read Testimonials</span>
                    <h2 class="mb-4" style="font-size: 50px;">It's always a joy to hear that the work we do has positively reviews</h2>
                </div>
            </div>
            <div class="col-md-6 pl-md-5 py-4 py-md-5 aside-stretch-right">
                <div class="carousel-testimony owl-carousel ftco-owl">
                    <div class="item">
                        <div class="testimony-wrap py-4 pb-5 d-flex justify-content-between align-items-end">
                            <div class="user-img" style="background-image: url(images/person_1.jpg)">
                                <span class="quote d-flex align-items-center justify-content-center">
                                    <fa :icon="['fas', 'quote-left']" />
                                </span>
                            </div>
                            <div class="text">
                                <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                                <p class="name">Jeff Freshman</p>
                                <span class="position">Guests</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimony-wrap py-4 pb-5 d-flex justify-content-between align-items-end">
                            <div class="user-img" style="background-image: url(images/person_2.jpg)">
                                <span class="quote d-flex align-items-center justify-content-center">
                                    <fa :icon="['fas', 'quote-left']" />
                                </span>
                            </div>
                            <div class="text">
                                <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                                <p class="name">Jeff Freshman</p>
                                <span class="position">Guests</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimony-wrap py-4 pb-5 d-flex justify-content-between align-items-end">
                            <div class="user-img" style="background-image: url(images/person_3.jpg)">
                                <span class="quote d-flex align-items-center justify-content-center">
                                    <fa :icon="['fas', 'quote-left']" />
                                </span>
                            </div>
                            <div class="text">
                                <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                                <p class="name">Jeff Freshman</p>
                                <span class="position">Guests</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimony-wrap py-4 pb-5 d-flex justify-content-between align-items-end">
                            <div class="user-img" style="background-image: url(images/person_1.jpg)">
                                <span class="quote d-flex align-items-center justify-content-center">
                                    <fa :icon="['fas', 'quote-left']" />
                                </span>
                            </div>
                            <div class="text">
                                <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                                <p class="name">Jeff Freshman</p>
                                <span class="position">Guests</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimony-wrap py-4 pb-5 d-flex justify-content-between align-items-end">
                            <div class="user-img" style="background-image: url(images/person_3.jpg)">
                                <span class="quote d-flex align-items-center justify-content-center">
                                    <fa :icon="['fas', 'quote-left']" />
                                </span>
                            </div>
                            <div class="text">
                                <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                                <p class="name">Jeff Freshman</p>
                                <span class="position">Guests</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section bg-light">
    <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-10 heading-section text-center ">
                <span class="subheading">Наш блог</span>
                <h2 class="mb-4">Новости сферы производства теплиц</h2>
            </div>
        </div>
        <div class="row d-flex">
            <div class="col-lg-4 ">
                <BlogCard />
            </div>

            <div class="col-lg-4 ">
                <BlogCard />
            </div>
            <div class="col-lg-4 ">
                <BlogCard />
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts">
import BlogCard from "@/components/main/greenhouse/includes/main/BlogCard.vue"
import ServiceCard from "@/components/main/greenhouse/includes/main/ServiceCard.vue"
import WorkCard from "@/components/main/greenhouse/includes/main/WorkCard.vue"
import AboutSection from "@/components/main/greenhouse/includes/main/WorkCard.vue"
import ProjectCard from "@/components/main/greenhouse/includes/main/ProjectCard.vue"
import StatisticCompanySection from "@/components/main/greenhouse/includes/main/StatisticCompanySection.vue"

import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'Main',
    components: {
        BlogCard,
        ServiceCard,
        WorkCard,
        AboutSection,
        ProjectCard,
        StatisticCompanySection,
    }
})
</script>
