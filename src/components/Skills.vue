<template>
    <div id="skills" class="py-5">
        <div style="margin-top: 60px">
            <div class="row">

                <hr class="mb-2">

                <div class="col-3 my-5" v-for="(item, index) in skills" :key="index">
                    
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center">
                            <v-progress-circular :rotate="180" :color="item.color" :model-value="item.rate" :size="90" :width="7"></v-progress-circular>
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
                { title: "Javascript", rate: "77", color: "#ff1a1a"},
                { title: "Vue", rate: "80", color:"#ff66d8"},
                { title: "React", rate: "70", color: "#82CD47" },
                { title: "Nodejs", rate: "65", color: "#ffbf37" },
                { title: "HTML", rate: "85", color: "#8F43EE" },
                { title: "CSS", rate: "75", color: "#FF8400" },
                { title: "Python", rate: "54", color: "#1ac2ed" },
                { title: "Unity", rate: "51", color: "#d66c44" },
            ],
        }
    },

    computed: {
        currentTheme(){
            return this.$store.state.theme
        }
    },  

    mounted() {
        var rates = this.skills.map((skill) => skill.rate)
        this.skills.forEach((e, i) =>   e.rate = 0)

        this.skills.forEach((element, index) => {
            console.log(element.title)
            element.interval = setInterval(() => {
                if (element.rate <= rates[index]) {
                    element.rate++;
                }
                else clearInterval(element.interval)
                
            }, 30)
        })

    },
}
</script>


<style lang="scss">
    @import "../assets/style/_variables.scss";

    [data-theme='dark']{
        #skills{
            .v-progress-circular__underlay{
                color : rgba(255,255,255, 0.25) !important;
            }
        }
    }

    #skills{
        .v-progress-circular__underlay{
            transition: all $all-anim-transition !important;
        }
    }

    
</style>