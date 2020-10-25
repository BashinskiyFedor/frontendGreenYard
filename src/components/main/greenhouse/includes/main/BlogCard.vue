<template>
<div class="blog-entry">
    <a href="blog-single.html" class="block-20" style="background-image: url('images/image_1.jpg');">
    </a>
    <div class="text d-block">
        <div class="meta">
            <p>
                <a href="#">
                    <fa class="mr-2" :icon="['fas', 'calendar']" />Sept. 06, 2020
                </a>
                <a href="#">
                    <fa class="mr-2" :icon="['fas', 'user']" />Admin
                </a>
                <a href="#" class="meta-chat">
                    <fa class="mr-2" :icon="['fas', 'comment']" /> 3
                </a>
            </p>
        </div>
        <h3 class="heading"><a href="#">Best for any industrial &amp; business solution</a></h3>
        <p><a href="blog.html" class="btn btn-secondary py-2 px-3">Read more</a></p>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'BlogCard'
})
</script>
