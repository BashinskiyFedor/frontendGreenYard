<template>
<GreenhouseHeader />
<GreenhouseNavigate />

<main class="py-4">
    <router-view></router-view>
</main>
<GreenhouseFooter />
</template>

<script lang="ts">
import GreenhouseNavigate from "@/components/main/greenhouse/includes/GreenhouseNavigate.vue"
import GreenhouseHeader from "@/components/main/greenhouse/includes/GreenhouseHeader.vue"
import GreenhouseFooter from "@/components/main/greenhouse/includes/GreenhouseFooter.vue"
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'App',
    components: {
        GreenhouseNavigate,
        GreenhouseHeader,
        GreenhouseFooter,
    }

})
</script>
