<template>
    <div id="aboutme" class="py-5">
        <div style="margin-top: 70px">
            <img :src="image1" alt="">
        
        </div>

    </div>
</template>

<script>
export default {
    name: "AboutMe",
    setup(){
        const image1 = require('../assets/images/image.svg')
        return {image1}
    }
}
</script>

<style lang="">
    
</style>