<template>
    <div id="aboutme" class="container py-5">
        <div class="aboutme row">
            <div class="col-xs-12 col-sm-8 ">
                <p style="font-weight: 700;">
                    Merhaba, Siteme Hoşgeldiniz 🤗 
                </p>

                <div class="activeText mb-2 ">
                    <b :key="k" id="activeText" class="animated fadeIn">{{ activeText }}</b>
                </div>

                <p style="margin-bottom: 30px">
                    Bilgisayar mühendisiyim. İnternet programlama tecrübem var ve kişisel olarak AI ile ilgileniyorum.
                </p>

                <div class="resume-btn col-xs-12 col-lg-6 mb-5">
                    <button @click="downloadPDF">CV İndir</button>
                </div>

            </div>


            <div class="col-xs-12 col-sm-4 d-flex justify-content-center">
                <img :src="image1" alt="picture" id="aboutPicture">
            </div>
            
        </div>

    </div>
</template>

<script>
import axios from "axios"
import {ref, onMounted} from "vue"
import Jquery from "jquery"

export default {
    name: "AboutMe",
    setup(){
        const $ = Jquery
        const image1 = require('../assets/images/girl1.webp')
        var textList = ['Büşra Özcan', 'Bilgisayar Mühendisi 💻', 'Frontend Developer 🖥️']
        var activeTextIndex = 0;
        var activeText = ref(textList[activeTextIndex])
        var k = ref(0)

        onMounted(() => {
            textLoop();
        })

        var textLoop = () => {
            setInterval(() => {
                if(activeTextIndex == textList.length - 1) activeTextIndex = 0
                else activeTextIndex ++

                activeText.value = textList[activeTextIndex]
                k.value++
            }, 3000)
        }

        var downloadPDF = () => {
            const url = '/assets/Busra+Ozcan+CV.pdf'; // indirilecek PDF dosyasının URL'si
            axios({
                method: 'get',
                url: url,
                responseType: 'blob' // yanıt türünü belirleyin
            }).then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data])); // blob verilerini kullanarak URL oluşturun
                const link = document.createElement('a'); // bir <a> elementi oluşturun
                link.href = url; // URL'yi <a> elementinin href özelliğine atayın
                link.setAttribute('download', 'BusraOzcanCV.pdf'); // dosya adını ayarlayın
                document.body.appendChild(link); // <a> elementini belgeye ekleyin
                link.click(); // <a> elementine tıklayın
            }).catch(error => {
                console.log(error);
            });
        }

        return {image1, activeText, textLoop, downloadPDF, activeTextIndex, k }
    }
}
</script>

<style lang="scss">
@import "../assets/style/variables";

    [data-theme='light']{
        .resume-btn button{
            background-color: #eeeeee;
            color: #5d5d5f;
        }
    }
    [data-theme='dark']{
        .resume-btn button{
            background-color: #5d5d5f;
            color: #eeeeee;
        }
    }

    .aboutme{
        padding-top: 10px;
        
        .activeText{
            position: relative;
            opacity: 1;
            font-size: $active-text-size;
            color: $yellow-color;
        }

        .resume-btn{
            button{
                width: 200px;
                height: 50px;
                border-radius: 50px;
            }
        }

        @media screen and (min-width: 768px){
            #aboutPicture{
                width: 400px;
            }        
        }
        @media screen and (max-width: 768px){
            #aboutPicture{
                width: 250px;
            }      
            
            .resume-btn{
                display: flex;
                justify-content: center;
            }
        }

        
    }

</style>