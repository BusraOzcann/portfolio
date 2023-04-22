<template>
    <di id="projects" class="container py-5 d-flex justify-content-center align-items-center">
        <div style="margin-top: 60px; width: 100%;">
            <!-- <div v-html="repoDetay.content">
            </div> -->
            <div class="row">
                Github Profile
            </div>

            <div class="row">
               <swiper
                :modules="modules"
                :slides-per-view="3.5"
                :space-between="40"
                @swiper="onSwiper"
                navigation
                @slideChange="onSlideChange">
                    <swiper-slide v-for="(item, index) in githubRepos" :key="index" class="mb-3">
                        <v-card class="mx-auto" max-width="344">
                        <v-img src="/assets/github-mark-white.png" height="220"></v-img>

                        <v-card-title>
                        {{ item.name }}
                        </v-card-title>

                        <v-card-subtitle>
                            {{ item.language ? item.language : "Dil Bilinmiyor" }}
                        </v-card-subtitle>

                        <v-card-text>
                            <i v-if="!item.description" style="color: #858585; font-weight: 200;">Henüz bir açıklama yok.</i>
                            <span style="font-weight: 500;" v-else>{{ item.description }}</span>
                        </v-card-text>
                        
                    </v-card>
                    </swiper-slide>
                </swiper>
            </div>
            
            <!-- <div class="row mt-5">
                <button type="button" class="btn btn-success" @click="deneme">Base class</button>
            </div> -->
        </div>
    </di>
</template>

<script>
import { ref, onMounted } from "vue"
import { marked } from 'marked';

import GithubService from '@/Services/GithubService';
import notification from "../notification"


// SWIPER
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    name: "Projects",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup(){
        const githubProfile = ref("")
        const githubRepos = ref("")
        const repoDetay = ref("")
        let key = ""

        onMounted(() => {
            key = process.env.VUE_APP_GITHUB_KEY

            GithubService.getProfile().then((res) => {
                githubProfile.value = res.data;
            }).catch(e => {
                console.log({ e })
            })
            getRepositories()
        })

        const getRepositories = () => {
            try{
                GithubService.getRepos().then((response) => {
                    githubRepos.value = response.data
                    console.log(response.data)
                    GithubService.getARepo(response.data[1].owner.login, response.data[1].name, response.data[1].default_branch).then((res) => {
                        // marked olarak olusturulan ve base64 formatında gönderilen readme contentini decode etme
                        // res.data.content = marked.parse(atob(res.data.content))
                        // repoDetay.value = res.data
                    })
                })
            }catch(e){
                notification.toast("error", "Github depolar getirilirken bir hata meydana geldi", 2000)
            }
        }

        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };

        const deneme = () => {
            notification.toast("success", "MESSAGE DENEME 1 ", 2000)
        }
        return { githubProfile, githubRepos, repoDetay, getRepositories, onSwiper, onSlideChange, modules: [Navigation, Pagination, A11y], deneme }
    }
}
</script>

<style lang="scss">
[data-theme='light']{
    #projects{
        .v-card{
            -webkit-box-shadow: 5px -1px 10px -3px rgba(0,0,0,0.58);
            -moz-box-shadow: 5px -1px 10px -3px rgba(0,0,0,0.58);
            box-shadow: 5px -1px 10px -3px rgba(0,0,0,0.58);
        }
        .v-img{
            background-color: #0b9b9b !important;
            transition: background-color 0.5s ease-in-out;
        }
    }
}

[data-theme='dark']{
    #projects{
        .v-card{
            webkit-box-shadow: 8px 0px 10px -3px rgba(0,0,0,1);
            -moz-box-shadow: 8px 0px 10px -3px rgba(0,0,0,1);
            box-shadow: 8px 0px 10px -3px rgba(0,0,0,1);
        }

        .v-img{
            background-color: #597dcd !important;
            transition: background-color 0.5s ease-in-out;
        }
    }
}

#projects .v-card{
    transition: scale .4s ease;
}
#projects .v-card:hover{
    scale: 1.02;
}



</style>


