<template>
    <div>
        <img :src="image1" alt="">

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