<template>
    <div id="contact" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="row">
                        <!-- <div class="col-12 fs-6 mb-1">
                            <img src="@/assets/images/logo/google-plus.png" alt="medium-icon" class="me-2" height="15px"/> ozcan.busra1999@gmail.com
                        </div> -->
                        <div class="col-12 fs-6 mb-1" >
                            <span style="cursor: pointer" @click="openLink('https://www.linkedin.com/in/bsrozcan/')">
                                <img src="@/assets/images/logo/linkedin.png" alt="medium-icon" class="me-2 social-logo" /> bsrozcan
                            </span>
                        </div>
                        <div class="col-12 fs-6 mb-1" >
                            <span style="cursor: pointer" @click="openLink('https://medium.com/@busraozcan')">
                                <img src="@/assets/images/logo/medium.png" alt="medium-icon" class="me-2 social-logo"/> busraozcan
                            </span>
                        </div>
                        <div class="col-12 fs-6 mb-1" >
                            <span style="cursor: pointer" @click="openLink('https://www.instagram.com/busraozcannnn/')">
                                <img src="@/assets/images/logo/instagram.png" alt="medium-icon" class="me-2 social-logo" /> busraozcannnn
                            </span>
                        </div>
                        <div class="col-12 fs-6 mb-1" >
                            <span style="cursor: pointer" @click="openLink('https://twitter.com/busra_ozcan_')">
                                <img src="@/assets/images/logo/twitter.png" alt="medium-icon" class="me-2 social-logo"/> busra_ozcan_
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <v-tooltip text="ozcan.busra1999@gmail.com Adresine E-Posta Gönder" location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" class="float-end" prepend-icon="mdi-email-arrow-right" size="large" color="success" rounded="xs" @click="sendMail">
                                Bana Mail İle Ulaş
                            </v-btn>
                        </template>
                    </v-tooltip>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            message: '',
            email: '',
            rules: {
                required: value => !!value || 'Required.',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },
        }
    },
    methods: {
        sendMail() {
            // Mail adresinizi belirleyin
            const to = "ozcan.busra1999@gmail.com";

            // Mail konusu ve içeriğini belirleyin
            const subject = "";
            const body = "";

            // Mailto linkini oluşturun
            const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Linki yeni bir pencerede açın
            window.open(mailtoLink, "_blank");
        },
        
        openLink(url) {
            window.open(url, ',_blank')
        }
    }
}
</script>
<style lang="scss">

@import "../assets/style/_variables.scss";

#contact{
    position: absolute;
    left: 0;
    width: 100%;
    transition: all $all-anim-transition;
}

.social-logo{
        height: 15px !important;
    }

[data-theme='dark']{
    #contact{
        background-color: $background-dark-footer !important;
    }
}

[data-theme='light']{
    #contact{
        background-color: $background-light-footer !important;
    }
}
</style>