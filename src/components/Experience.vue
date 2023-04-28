<template>
    <div id="experience" class="container py-5" style="height: 500px; ">
        <div style="margin-top: 60px">
            
             <v-timeline align="start">
                <v-timeline-item
                    v-for="(year, i) in years"
                    :key="i"
                    :dot-color="year.color"
                    size="small"
                >
                <template v-slot:opposite>
                    <div :class="`pt-1 headline font-weight-bold text-${year.color}`" v-text="year.year"></div>
                </template>
                <div>
                    <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
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
import {ref} from "vue"
export default {
    setup(){
        const years = ref([
            { year : "2016 Eylül - 2021 Mart", color: "#fcb404", title: "Üniversite", text: "Cumhuriyet Üniversitesi Bilgisayar Mühendisliği"},
            { year : "2021 Eylül - ~", color: "#fcbc36", title: "Yüksek Lisans", text: "Sivas Bilim ve Teknoloji Üniversitesi Savunma Teknolojileri A.B.D"},
            { year: "2022 Şubat - 2022 Mart", color: "#fcc660", title: "İş Tecrübesi", text: "Sivas Teknokent Hakan Bilgi Teknolojileri" }
        ])

        return {years}
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

</style>