<template>
    <div class="sidebar-box ">
        <h3 class="heading-sidebar">Tag Cloud</h3>
        <div class="tagcloud">
            <a href="#" class="tag-cloud-link">construction</a>
            <a href="#" class="tag-cloud-link">build</a>
            <a href="#" class="tag-cloud-link">architect</a>
            <a href="#" class="tag-cloud-link">hammer</a>
            <a href="#" class="tag-cloud-link">building</a>
            <a href="#" class="tag-cloud-link">construct</a>
            <a href="#" class="tag-cloud-link">machine</a>
            <a href="#" class="tag-cloud-link">system</a>
        </div>
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'SidebarBoxTag'
})
</script>