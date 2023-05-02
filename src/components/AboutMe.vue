<template>
    <div id="aboutme" class="container py-5">
        <div class="aboutme row">
            <div class="col-xs-12 col-sm-7 ">
                
                <div class="activeText mb-2 animate__animated animate__fadeInRight" :key="k">
                    <b>{{ activeText }}</b>
                </div>

                <p style="font-weight: 700;">
                    Merhaba, Siteme Hoşgeldiniz 🤗 
                </p>

                <p style="margin-bottom: 30px">
                    Bilgisayar mühendisiyim. İnternet programlama tecrübem var ve kişisel olarak AI ile ilgileniyorum.
                </p>

                <div class="resume-btn col-xs-12 col-lg-6 mb-5">
                    <button @click="downloadPDF">CV İndir</button>
                </div>

            </div>


            <div class="col-xs-12 col-sm-5 d-flex justify-content-center animate__animated animate__fadeIn">
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
        const image1 = require('../assets/images/resim1.png')
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
            -webkit-box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.47);
                -moz-box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.47);
                box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.47);
        }

        .activeText{
            color: $pink-color;
        }
    }
    [data-theme='dark']{
        .resume-btn button{
            background-color: #898989;
            color: #eeeeee;
            -webkit-box-shadow: 0px 7px 8px -4px rgba(158, 158, 158, 0.47);
            -moz-box-shadow: 0px 7px 8px -4px rgba(158, 158, 158, 0.47);
            box-shadow: 0px 7px 8px -4px rgba(158, 158, 158, 0.47);
        }
        .activeText{
            color: $yellow-color
        }
    }

    .aboutme{
        padding-top: 10px;
        
        .activeText{
            font-weight: bold;
            font-size: $active-text-size;
            transition: all $all-anim-transition;
        }

        .resume-btn{
            button{
                width: 200px;
                height: 50px;
                border-radius: 50px;
                transition: all $all-anim-transition;
            }
            button:active{
                animation: movebutton 0.3s;
            }
        }

        @keyframes movebutton {
            50%{
                transform: translate(0, 3px);
            }
            100%{
                transform: translate(0, 0);
            }
        }

        @media screen and (min-width: 768px){
            #aboutPicture{
                width: 500px;
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