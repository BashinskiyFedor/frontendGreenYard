<template>
<ul class="comment-list">
    <li class="comment">
        <div class="vcard bio">
            <img src="images/person_1.jpg" alt="Image placeholder">
        </div>
        <div class="comment-body">
            <h3>John Doe</h3>
            <div class="meta">September 06, 2020 at 2:21pm</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
            <p><a href="#" class="reply">Reply</a></p>
        </div>
    </li>

    <li class="comment">
        <div class="vcard bio">
            <img src="images/person_1.jpg" alt="Image placeholder">
        </div>
        <div class="comment-body">
            <h3>John Doe</h3>
            <div class="meta">September 06, 2020 at 2:21pm</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
            <p><a href="#" class="reply">Reply</a></p>
        </div>

        <ul class="children">
            <li class="comment">
                <div class="vcard bio">
                    <img src="images/person_1.jpg" alt="Image placeholder">
                </div>
                <div class="comment-body">
                    <h3>John Doe</h3>
                    <div class="meta">September 06, 2020 at 2:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <p><a href="#" class="reply">Reply</a></p>
                </div>

            </li>
        </ul>
    </li>

    <li class="comment">
        <div class="vcard bio">
            <img src="images/person_1.jpg" alt="Image placeholder">
        </div>
        <div class="comment-body">
            <h3>John Doe</h3>
            <div class="meta">September 06, 2020 at 2:21pm</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
            <p><a href="#" class="reply">Reply</a></p>
        </div>
    </li>
</ul>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'Comments'
})
</script>