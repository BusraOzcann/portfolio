<template>
    <div id="skills" class="py-5">
        <div style="margin-top: 60px">
            <div class="row">
                
                <div class="col-12 mb-2 d-flex justify-content-center">
                    <h3><b>YETENEKLERİM</b></h3>
                </div>

                <hr class="mb-2">

                <div class="col-3 my-5" v-for="(item, index) in skills" :key="index">
                    
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center">
                            <v-progress-circular :rotate="180" :color="item.color" :model-value="item.rate" :size="90" :width="8"></v-progress-circular>
                        </div>
                        <div class="col-12 mt-3 d-flex justify-content-center">
                            {{ item.title }}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            skills: [
                { title: "Javascript", rate: "77%", color: "#D21312"},
                { title: "Vue", rate: "80%", color:"#083AA9"},
                { title: "React", rate: "70%", color: "#379237" },
                { title: "Nodejs", rate: "65", color: "#FB2576" },
                { title: "HTML", rate: "85%", color: "#8F43EE" },
                { title: "CSS", rate: "75%", color: "#FF8400" },
                { title: "Unity", rate: "51%", color: "#461111" },
                { title: "Python", rate: "54%", color: "#19A7CE" },
            ]
        }
    },

    mounted() {
    },

    beforeUnmount() {
        clearInterval(this.interval)
    },
}
</script>


<style lang="">
    
</style>