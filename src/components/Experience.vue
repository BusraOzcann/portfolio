<template>
    <div id="experience" class="container py-5" style="height: 500px; ">
        <div style="margin-top: 60px">
            
            <!-- <v-timeline align="start">

                <v-timeline-item>
                <template v-slot:opposite>
                    2016 Eylül - 2021 Mart
                </template>
                <div>
                    <div class="text-h6">Üniversite</div>
                    <p>
                        Cumhuriyet Üniversitesi Bilgisayar Mühendisliği
                    </p>
                </div>
                </v-timeline-item>

                <v-timeline-item>
                <template v-slot:opposite>
                    2021 Şubat - 2022 Mart
                </template>
                <div>
                    <div class="text-h6">İş Tecrübesi</div>
                    <p>
                        Sivas Teknokent Hakan Bilgi Teknolojileri
                    </p>
                </div>
                </v-timeline-item>

                <v-timeline-item>
                <template v-slot:opposite>
                    2021 Eylül - ~
                </template>
                <div>
                    <div class="text-h6">Yüksek Lisans</div>
                    <p>
                        Sivas Bilim ve Teknoloji Üniversitesi Savunma teknolojileri A.B.D
                    </p>
                </div>
                </v-timeline-item>
            </v-timeline> -->


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
            { year : "2016 Eylül - 2021 Mart", color: "#7827cf", title: "Üniversite", text: "Cumhuriyet Üniversitesi Bilgisayar Mühendisliği"},
            { year : "2021 Eylül - ~", color: "#8739da", title: "Yüksek Lisans", text: "Sivas Bilim ve Teknoloji Üniversitesi Savunma Teknolojileri A.B.D"},
            { year: "2022 Şubat - 2022 Mart", color: "#9d6ad4", title: "İş Tecrübesi", text: "Sivas Teknokent Hakan Bilgi Teknolojileri" }
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