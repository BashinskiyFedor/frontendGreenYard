<template>
<footer class="ftco-footer">
    <div class="container mb-5 pb-4">
        <div class="row">
            <div class="col-lg col-md-6">
                <div class="ftco-footer-widget">
                    <h2 class="ftco-heading-2 d-flex align-items-center">About</h2>
                    <p>Far far away, behind the word mountains, far from the countries.</p>
                    <ul class="ftco-footer-social list-unstyled mt-4">
                        <li v-for="(sc, id) in social" :key="id">
                            <a :href="sc.link" class="d-flex align-items-center justify-content-center">
                                <fa :icon="sc.icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="ftco-footer-widget">
                    <h2 class="ftco-heading-2">Links</h2>
                    <div class="d-flex">
                        <ul class="list-unstyled mr-md-4">
                            <li v-for="(link, key) in links">
                                <a href="#">
                                    <fa class="mr-2" :icon="link.icon" />{{ link.title }}
                                </a>
                            </li>
                        </ul>
                        <ul class="list-unstyled ml-md-5">
                            <li v-for="(contact, key) in contacts">
                                <a href="#">
                                    <fa class="mr-2" :icon="contact.icon" />{{ contact.title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-lg col-md-6">
                <div class="ftco-footer-widget">
                    <h2 class="ftco-heading-2">Services</h2>
                    <ul class="list-unstyled">
                        <li v-for="(service, key) in services">
                            <a href="#">
                                <fa class="mr-2" :icon="service.icon" />{{ service.title }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-lg col-md-6">
                <div class="ftco-footer-widget">
                    <h2 class="ftco-heading-2">Have a Questions?</h2>
                    <div class="block-23 mb-3">
                        <ul>
                            <li><span class="fa fa-map-marker mr-3"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                            <li><a href="#"><span class="fa fa-phone mr-3"></span><span class="text">+2 392 3929 210</span></a></li>
                            <li><a href="#"><span class="fa fa-paper-plane mr-3"></span><span class="text">info@yourdomain.com</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-md-6 aside-stretch py-3">

                    <p class="mb-0">
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'GreenHouseFooter',
    setup() {
        const links = [{
                icon: ['fa', 'chevron-right'],
                title: 'Project'
            },
            {
                icon: ['fa', 'chevron-right'],
                title: 'About Us'
            },
            {
                icon: ['fa', 'chevron-right'],
                title: 'Services'
            },
            {
                icon: ['fa', 'chevron-right'],
                title: 'Blog Posts'
            },
            {
                icon: ['fa', 'chevron-right'],
                title: 'Industries'
            },
        ]
        const contacts = [{
                icon: ['fa', 'chevron-right'],
                title: 'Contact'
            },
            {
                icon: ['fa', 'chevron-right'],
                title: 'Help'
            },
            {
                icon: ['fa', 'chevron-right'],
                title: 'Privacy Policy'
            },
            {
                icon: ['fa', 'chevron-right'],
                title: 'Terms of Use'
            }
        ]
        const services = [{
                icon: ['fa', 'chevron-right'],
                title: 'Customer Services'
            },
            {
                icon: ['fa', 'chevron-right'],
                title: 'Prompt Delivery'
            },
            {
                icon: ['fa', 'chevron-right'],
                title: 'Reliable Equipment'
            },
            {
                icon: ['fa', 'chevron-right'],
                title: 'New Heavy Equipment',
            }
        ]
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
            links,
            contacts,
            services,
            social,
        }
    }

})
</script>
