<template>
    <div class="col-lg-3 col-sm-6">
        <div class="block-2 ">
            <div class="flipper">
                <div class="front" style="background-image: url(/images/team-1.jpg);">
                    <div class="box">
                        <h2>Ryan Anderson</h2>
                        <p>Head Engineer</p>
                    </div>
                </div>
                <div class="back">
                    <!-- back content -->
                    <blockquote>
                        <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text &rdquo;</p>
                    </blockquote>
                    <div class="author d-flex">
                        <div class="image align-self-center">
                            <img src="images/team-1.jpg" alt="">
                        </div>
                        <div class="name align-self-center ml-3">Ryan Anderson <span class="position">Head Engineer</span></div>
                    </div>
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
    name: 'TeamPersoneCard'
})
</script>