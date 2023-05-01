<template>
    <div id="contact" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="row">
                        <div class="col-12 fs-6">
                            <i class="mdi mdi-gmail me-2"></i> ozcan.busra1999@gmail.com
                        </div>
                        <div class="col-12 fs-6">
                            <i class="mdi mdi-linkedin me-2"></i> bsrozcan
                        </div>
                        <div class="col-12 fs-6">
                            <img src="@/assets/images/medium.png" alt="medium-icon" class="me-2" height="15px"/> busraozcan
                        </div>
                        <div class="col-12 fs-6">
                            <i class="mdi mdi-instagram me-2"></i> busraozcannnn
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <v-tooltip text="E-Posta Gönder" location="top">
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