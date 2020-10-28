<template>
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
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'Comment'
})
</script>
