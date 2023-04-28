<template>
    <div id="projects" class="container py-5 d-flex justify-content-center align-items-center">
        <div style="margin-top: 60px; width: 100%;">
            <div class="row mb-4">
                <!-- Avatar baslangıc -->
                <div class="col-12 col-lg-1 mb-3">
                    <v-avatar @click="openNewTab(githubProfile.html_url)" :image="githubProfile.avatar_url" size="80"></v-avatar>
                </div>
                <!-- Avatar bitiş -->

                <!-- Avatarın sagındaki bilgi içeren kısım -->
                <div class="col-12 col-lg-11">
                    <div class="row">
                        <!-- Sol Kısım -->
                        <div class="col-12 col-lg-3">
                            <div class="col mb-1" @click="openNewTab(githubProfile.html_url)" style="cursor: pointer">
                                <i class="mdi mdi-account me-2"></i><b>{{ githubProfile.login }}</b>
                            </div>
                            <div class="col mb-1">
                                <span @click="openNewTab('https://github.com/BusraOzcann?tab=following')" style="cursor: pointer"><b>{{ githubProfile.following }}</b> Takip edilen</span> {{ ' / ' }}
                                <span @click="openNewTab('https://github.com/BusraOzcann?tab=followers')" style="cursor: pointer"><b>{{ githubProfile.followers }}</b> Takipçi</span>
                            </div>
                            <div class="col mb-1" style="cursor: pointer" @click="openNewTab('https://github.com/BusraOzcann?tab=repositories')">
                                <i class="mdi mdi-source-repository me-2"></i><b>{{ githubProfile.public_repos }}</b> adet public repository
                            </div>
                        </div>
                        <!-- Sol kısım bitiş -->

                        <!-- Sağ kısım -->
                        <div class="col-12 col-lg-9">

                            <div class="col mb-1"> 
                                <i class="mdi mdi-map-marker me-2"></i> {{ githubProfile.location }}
                            </div>
                            <div class="col mb-1">
                                <i class="mdi mdi-office-building me-2"></i> {{ githubProfile.company }}
                            </div>
                            <div class="col mb-1" style="cursor: pointer" @click="openNewTab('https://twitter.com/busra_ozcan_')">
                                <i class="mdi mdi-twitter me-2"></i> {{ githubProfile.twitter_username }}
                            </div>
                        </div>
                        <!-- Sağ kısım bitiş -->
                    </div>
                </div>
                <!-- Avatarın sagındaki bilgi içeren kısım bitiş -->
            </div>

            <div class="row">
               <swiper
                :modules="modules"
                :slides-per-view="slidePerView"
                :space-between="40"
                @swiper="onSwiper"
                
                @slideChange="onSlideChange">
                    <swiper-slide v-for="(item, index) in githubRepos" :key="index" class="mb-3">
                        <v-card class="mx-auto" max-width="344" @click="openNewTab(item.html_url)">
                            <v-img src="/assets/GitHub_Logo_White.png" height="120"></v-img>

                            <v-card-title>
                            {{ item.name }}
                            </v-card-title>

                            <v-card-subtitle>
                                {{ item.language ? item.language : "Dil Belirtilmemiş." }}
                            </v-card-subtitle>

                            <v-card-text>
                                <i v-if="!item.description" style="color: #858585; font-weight: 200;">Henüz bir açıklama yok.</i>
                                <span style="font-weight: 500;" v-else>{{ item.description }}</span>
                            </v-card-text>
                            
                        </v-card>
                    </swiper-slide>
                </swiper>
            </div>
            
        </div>
    </div>
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
        const slidePerView = ref("")
        let key = ""

        onMounted(() => {
            key = process.env.VUE_APP_GITHUB_KEY

            getGithubProfile()
            getRepositories()

            // MOBİL CİHAZLARDA SLİDER GÖRÜNÜMÜ GÜNCELLE !
            if(navigator.userAgentData.mobile == true){
                slidePerView.value = 1;
            }else if(navigator.userAgentData.mobile == false){
                slidePerView.value = 3.5
            }
        })

        const getRepositories = () => {
            try{
                GithubService.getRepos().then((response) => {
                    githubRepos.value = response.data
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

        const getGithubProfile = () => {
            try{
                GithubService.getProfile().then((response) => {
                    console.log("profile : ", response.data)
                    githubProfile.value = response.data;
                })
            }catch(e){
                notification.toast("error", "Github bilgileri getirilirken bir hata meydana geldi")
            }
        }

        const onSwiper = (swiper) => {
            // console.log(swiper);
        };
        const onSlideChange = () => {
            // console.log('slide change');
        };

        const openNewTab = (url) => {
            window.open(url, ',_blank')
        }
        return { githubProfile, githubRepos, repoDetay, onSwiper, onSlideChange, slidePerView, modules: [Navigation, Pagination, A11y], openNewTab }
    }
}
</script>

<style lang="scss">
@import "../assets/style/variables";

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

#projects{
    // .swiper{
    //     padding: 0 50px !important;
    // }
    .swiper-button-prev{
        color: $yellow-color !important
    }

    .swiper-button-next{
        color: $yellow-color !important
    }

    .v-card{
        cursor: pointer;
        .v-img{
            img{
                top: 20px;
                height: 80px !important;
            }
        }
    }

    .v-avatar{
        cursor: pointer;
        -webkit-box-shadow: 5px -1px 10px -3px rgba(0,0,0,0.58);
        -moz-box-shadow: 5px -1px 10px -3px rgba(0,0,0,0.58);
        box-shadow: 5px -1px 10px -3px rgba(0,0,0,0.58);
    }
}

</style>


