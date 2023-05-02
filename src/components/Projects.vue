<template>
    <div id="projects" class="container py-5 d-flex justify-content-center align-items-center">
        <div style="margin-top: 60px">
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
                                <v-tooltip text="GitHub Adresine Git" location="end">
                                    <template v-slot:activator="{ props }">
                                        <span v-bind="props"><i class="mdi mdi-account me-2"></i><b>{{ githubProfile.login }}</b></span>
                                    </template>
                                </v-tooltip>
                            </div>
                            <div class="col mb-1">
                                <span @click="openNewTab('https://github.com/BusraOzcann?tab=following')" style="cursor: pointer"><b>{{ githubProfile.following }}</b> Takip edilen</span> {{ ' / ' }}
                                <span @click="openNewTab('https://github.com/BusraOzcann?tab=followers')" style="cursor: pointer"><b>{{ githubProfile.followers }}</b> Takipçi</span>
                            </div>
                            <div class="col mb-1" style="cursor: pointer" @click="openNewTab('https://github.com/BusraOzcann?tab=repositories')">
                                <v-tooltip text="Depolara Git" location="end">
                                    <template v-slot:activator="{ props }">
                                        <span v-bind="props"><i class="mdi mdi-source-repository me-2"></i><b>{{ githubProfile.public_repos }}</b> adet public repository</span>
                                    </template>
                                </v-tooltip>
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
                            <!-- <div class="col mb-1" style="cursor: pointer" @click="openNewTab('https://twitter.com/busra_ozcan_')">
                                <v-tooltip text="Twitter Adresine Git" location="end">
                                    <template v-slot:activator="{ props }">
                                        <span v-bind="props"><i class="mdi mdi-twitter me-2"></i> {{ githubProfile.twitter_username }}</span>
                                    </template>
                                </v-tooltip>
                            </div> -->
                        </div>
                        <!-- Sağ kısım bitiş -->
                    </div>
                </div>
                <!-- Avatarın sagındaki bilgi içeren kısım bitiş -->
            </div>
            <hr>

            <!-- projects section -->

            <div id="vue" class="row animate__animated animate__slideInRight">
                <div class="col-12">
                    <h2>
                        Vuejs Projelerim
                    </h2>
                </div>
                <div class="col-12">
                    <vue-projects/>
                </div>
            </div>

                
            <div id="react" class="row animate__animated animate__slideInLeft">
                <div class="col-12">
                    <h2>
                        React Projelerim
                    </h2>
                </div>
                <div class="col-12">
                    <react-projects/>
                </div>
            </div>


            <!-- <div class="row">
                <div class="col-12">
                    <h2>
                        AI Projelerim
                    </h2>
                </div>
                <div class="col-12">
                    <a-i-projects/>
                </div>
            </div> -->

            <!-- projects section end -->

        </div>
    </div>
</template>

<script>
import { ref, onMounted, defineComponent } from "vue"
import { marked } from 'marked';

import GithubService from '@/Services/GithubService';
import notification from "../notification"

//COMPONENTS 
import AIProjects from "./Projects/AIProjects.vue";
import VueProjects from "./Projects/VueProjects.vue";
import ReactProjects from "./Projects/ReactProjects.vue";

export default defineComponent(
    {
        name: "Projects",
        components: {
            AIProjects,
            VueProjects,
            ReactProjects
        },
        setup() {
            const githubProfile = ref("")
            const githubRepos = ref("")
            const repoDetay = ref("")
            let key = ""

            onMounted(() => {
                key = process.env.VUE_APP_GITHUB_KEY

                getGithubProfile();
                // getRepositories();
            })
            

            const getRepositories = () => {
                try {
                    GithubService.getRepos().then((response) => {
                        githubRepos.value = response.data
                        GithubService.getARepo(response.data[1].owner.login, response.data[1].name, response.data[1].default_branch).then((res) => {
                            // marked olarak olusturulan ve base64 formatında gönderilen readme contentini decode etme
                            // res.data.content = marked.parse(atob(res.data.content))
                            // repoDetay.value = res.data
                        })
                    })
                } catch (e) {
                    notification.toast("error", "Github depolar getirilirken bir hata meydana geldi", 2000)
                }
            }

            const getGithubProfile = () => {
                try {
                    GithubService.getProfile().then((response) => {
                        githubProfile.value = response.data;
                    })
                } catch (e) {
                    notification.toast("error", "Github bilgileri getirilirken bir hata meydana geldi")
                }
            }

            const openNewTab = (url) => {
                window.open(url, ',_blank')
            }
            return { githubProfile, githubRepos, repoDetay, openNewTab }
        }
    }
)
</script>

<style lang="scss">
@import "../assets/style/variables";

[data-theme='light']{
    #projects{
        .v-card{
            -webkit-box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.47);
            -moz-box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.47);
            box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.47);
        }
        .v-img{
            background-color: #0b9b9b !important;
            transition: background-color 0.5s ease-in-out;
        }

        .swiper-pagination-bullet:not(.swiper-pagination-bullet-active){
            background-color: #424242 !important;
            transition: background-color 0.5s ease-in-out;
        }
        .swiper-pagination-bullet-active{
            background-color: #0b9b9b !important;
            transition: background-color 0.5s ease-in-out;
        }
    }
}

[data-theme='dark']{
    #projects{
        .v-card{
            -webkit-box-shadow: 0px 7px 8px -4px rgba(208, 206, 206, 0.47);
            -moz-box-shadow: 0px 7px 8px -4px rgba(208, 206, 206, 0.47);
            box-shadow: 0px 7px 8px -4px rgba(208, 206, 206, 0.47);
        }

        .v-img{
            background-color: #597dcd !important;
            transition: all $all-anim-transition;
        }

        
        .swiper-pagination-bullet:not(.swiper-pagination-bullet-active){
            background-color: #fff !important;
            transition: all $all-anim-transition;
        }
        .swiper-pagination-bullet .swiper-pagination-bullet-active{
            background-color: #597dcd !important;
            transition: all $all-anim-transition;
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
    h2::before{
        content: "\2022";
        margin-right: 10px;
    }

    .swiper{
        padding: 20px 0 !important;
    }
    .swiper-pagination{
        bottom: -5px;
    }
    .swiper-button-prev{
        color: $yellow-color !important
    }

    .swiper-button-next{
        color: $yellow-color !important
    }

    .v-card{
        // cursor: pointer;
        // .v-img{
        //     img{
        //         top: 20px;
        //         height: 80px !important;
        //     }
        // }
    }

    .v-avatar{
        cursor: pointer;
        -webkit-box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.47);
        -moz-box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.47);
        box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.47);
    }
}

</style>


