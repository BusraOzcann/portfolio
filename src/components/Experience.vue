<template>
    <div id="experience" class="container py-5" style="height: 900px; ">
        <div style="margin-top: 60px">

            <hr class="mb-5">
            
             <v-timeline align="start">
                <v-timeline-item
                    v-for="(year, i) in years"
                    :key="i"
                    :dot-color="currentTheme == 'dark' ? year.darkColor : year.lightColor"
                    size="small"
                >
                <template v-slot:opposite>
                    <div :class="`pt-1 headline font-weight-bold`" v-text="year.year"></div>
                </template>
                <div>
                    <h2 :class="`mt-n1 headline font-weight-light mb-4`" :style="{color: currentTheme == 'dark' ? year.darkColor : year.lightColor}">
                        <b>{{ year.title }}</b>
                    </h2>
                    <div>
                        {{ year.text }}
                    </div>
                </div>
                </v-timeline-item>
            </v-timeline>

        </div>
    </div>
</template>

<script>
import {ref, computed} from "vue"
import {useStore} from "vuex"

export default {
    setup(){
        const store = useStore();
        const years = ref([
            { year : "2016 Eylül - 2021 Mart", darkColor: "#fe6e30", lightColor: "#ce4f62", title: "Üniversite", text: "Cumhuriyet Üniversitesi Bilgisayar Mühendisliği"},
            { year: "2022 Şubat - 2022 Mart", darkColor: "#fe6e30", lightColor: "#ce4f62", title: "İş Tecrübesi", text: "Sivas Teknokent Hakan Bilgi Teknolojileri" },
            { year : "2022 Eylül - HALEN", darkColor: "#fe6e30", lightColor: "#ce4f62", title: "Yüksek Lisans", text: "Sivas Bilim ve Teknoloji Üniversitesi Savunma Teknolojileri A.B.D"},
        ])
        const currentTheme = computed(() => store.state.theme)
        

        return {years, currentTheme}
    }
}
</script>

<style lang="scss">

[data-theme='dark']{
    #experience{
        .v-timeline-divider__before, .v-timeline-divider__after{
            background-color: white !important
        }
    }
}

#experience{
    .v-timeline-item__body{
        height: 250px;
        // display: flex;
        // justify-content: center;
        // align-items: center;
    }
}

</style>