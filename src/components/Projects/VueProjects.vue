<template>

    <div class="row projectArea">
        <div class="col-12 col-sm-6 col-lg-3 mb-3" v-for="(item, index) in projects" :key="index" >
            <v-tooltip text="GitHup Respository Adresine Git" location="top">
                <template v-slot:activator="{ props }">
                    <v-card v-bind="props" class="mx-auto" max-width="344" @click="openNewTab(item.html_url)">
                        <v-img :src="item.img_src ? item.img_src : '/assets/GitHub_Logo_White.png'" :height="item.img_src ? '180' : '100'"  :cover="item.img_src ? true : false"></v-img>

                        <v-card-title>
                        {{ item.name }}
                        </v-card-title>

                        <v-card-subtitle v-if="item.topics.length > 0">
                            <span v-for="(topic, i) in item.topics" :key="i">
                                <span style="text-decoration: underline;">{{ topic }}</span> 
                                <span v-if="i != item.topics.length - 1">, </span>
                            </span>
                        </v-card-subtitle>
                        <v-card-subtitle v-else>
                            Etiket verilmemiş.
                        </v-card-subtitle>

                        <v-card-text>
                            <i v-if="!item.description" style="color: #858585; font-weight: 200;">Henüz bir açıklama yok.</i>
                            <span style="font-weight: 500;" v-else>{{ item.description }}</span>
                        </v-card-text>
                                    
                    </v-card>
                </template>
            </v-tooltip>
        </div>
    </div>


    <!-- SLİDER MODELİ -->

    <!-- <swiper
    :modules="modules"
    :slides-per-view="slidePerView"
    :space-between="30"
    :pagination="{
        clickable: true,
    }"
    :autoplay ="{
        delay: 5000,
        disableOnInteraction: false,
    }">
        
        <swiper-slide v-for="(item, index) in projects" :key="index" class="mb-3">

            <v-tooltip text="GitHup Respository Adresine Git" location="top">
                <template v-slot:activator="{ props }">
                    <v-card v-bind="props" class="mx-auto" max-width="344" @click="openNewTab(item.html_url)">
                        <v-img :src="item.img_src ? item.img_src : '/assets/GitHub_Logo_White.png'" :height="item.img_src ? '180' : '100'"  :cover="item.img_src ? true : false"></v-img>

                        <v-card-title>
                        {{ item.name }}
                        </v-card-title>

                        <v-card-subtitle v-if="item.topics.length > 0">
                            <span v-for="(topic, i) in item.topics" :key="i">
                                <span style="text-decoration: underline;">{{ topic }}</span> 
                                <span v-if="i != item.topics.length - 1">, </span>
                            </span>
                        </v-card-subtitle>
                        <v-card-subtitle v-else>
                            Etiket verilmemiş.
                        </v-card-subtitle>

                        <v-card-text>
                            <i v-if="!item.description" style="color: #858585; font-weight: 200;">Henüz bir açıklama yok.</i>
                            <span style="font-weight: 500;" v-else>{{ item.description }}</span>
                        </v-card-text>
                                    
                    </v-card>
                </template>
            </v-tooltip>

        </swiper-slide> 
    </swiper> -->
</template>


<script>
import {ref, onMounted, computed, watch} from "vue" 
import {useStore} from "vuex"

import GithubService from '@/Services/GithubService';
import notification from "../../notification"

// SWIPER
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup(){
        const store = useStore()
        const theme = computed(() => store.state.theme)
        const slidePerView = ref("")
        var projects = ref([
            { name: "Portfolio", html_url: "https://github.com/BusraOzcann/portfolio", img_src: theme.value == 'dark' ? require('@/assets/images/Projects/vue/portfolio.png') : require('@/assets/images/Projects/vue/portfolio1.png'), topics: ['Vuejs', 'Javascript', 'HTML', 'CSS',], description: "Kişisel internet sitem." },
            { name: "Netflix Klon", html_url: "https://github.com/BusraOzcann/vue3-themoviedb-api-client", img_src: require('@/assets/images/Projects/vue/netflixclone.png'), topics: ['Vuejs', 'Javascript', 'HTML', 'CSS',], description: "TheMovieDB API kullanarak oluşturulmuş netflix klon sitesi." },
            { name: "Vue-TODO", html_url: "https://github.com/BusraOzcann/vue-todo", img_src: require('@/assets/images/Projects/vue/todo.png'), topics: ['Vuejs', 'Javascript', 'HTML', 'CSS',], description: "Basit todo uygulaması" },
        ])

        onMounted(() => {
            // MOBİL CİHAZLARDA SLİDER GÖRÜNÜMÜ GÜNCELLE ! -- SLİDER MODELİ KULLANILACAKSA
            // if (navigator.userAgentData.mobile == true) {
            //     slidePerView.value = 1;
            // } else if (navigator.userAgentData.mobile == false) {
            //     slidePerView.value = 3.5
            // }
        })

        watch(
            () => theme.value,

            (newVal, oldVal) => {
                // dark tema ve light tema da farklı olmasını istediğim resimler
                projects.value[0].img_src = newVal == 'dark' ? require('@/assets/images/Projects/vue/portfolio.png') : require('@/assets/images/Projects/vue/portfolio1.png')
            }
        )

        const openNewTab = (url) => {
            window.open(url, ',_blank')
        }
        return { modules: [Navigation, Pagination, Navigation, Autoplay], projects, slidePerView, openNewTab }
    }
}
</script>
