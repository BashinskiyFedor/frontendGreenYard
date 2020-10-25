<template>
<div class="py-1 top">
    <div class="container">
        <div class="row">
            <div class="col-sm-3 text-center text-md-left mb-md-0 mb-2 pr-md-4 d-flex topper align-items-center">
                <p class="mb-0 w-100">
                    <span class="fa fa-paper-plane"></span>
                    <span class="text">teplichnyydvorik@email.com</span>
                </p>
            </div>
            <div class="col-sm justify-content-center d-flex mb-md-0 mb-2">
                <div class="social-media">
                    <p class="mb-0 d-flex">
                        <a v-for="sc in social" :href="sc.link" class="d-flex align-items-center justify-content-center">
                            <fa :icon="sc.icon" />
                        </a>
                    </p>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-7 d-flex topper align-items-center text-lg-right justify-content-end">
                <p class="mb-0 register-link"><a href="#" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Узнать больше</a></p>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'GreenhouseHeader',
    setup() {
        const social = [{
                icon: ['fab', 'vk'],
                link: 'https://vk.com/teplichnyydvorik',
            },
            {
                icon: ['fab', 'instagram'],
                link: 'https://www.instagram.com/teplichnyydvorik/',
            },
            {
                icon: ['fab', 'odnoklassniki'],
                link: 'https://ok.ru/teplichny.dvorik',
            }
        ]
        return {
            social
        }
    },
})
</script>
