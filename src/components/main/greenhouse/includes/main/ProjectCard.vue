<template>
<div class="project">
    <a href="images/project-1.jpg" class="img image-popup d-flex align-items-center" style="background-image: url(images/project-1.jpg);">
        <div class="icon d-flex align-items-center justify-content-center mb-5"><span class="fa fa-plus"></span></div>
    </a>
    <div class="text">
        <span class="subheading">Building</span>
        <h3>Building A Condominium</h3>
        <p><span class="fa fa-map-marker mr-1"></span> San Francisco, California, USA</p>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'ProjectCard'
})
</script>
