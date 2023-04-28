<template>
    <div id="contact" class="container py-5" style="height: 500px; ">
        <div style="margin-top: 60px">
            <div class="row">
                <div class="col-12 mb-5">
                    <h4>BENİMLE İLETİŞİME GEÇ</h4>
                </div>
                <v-form v-model="valid">
                    <div class="col-12 mb-3">
                        <v-text-field 
                        label="E-Posta" 
                        variant="outlined"
                        hint="Size daha sonra ulaşabilmem için lütfen e-posta adresinizi girin." 
                        v-model="email"
                        :rules="[rules.required, rules.email]"
                        >
                    </v-text-field>
                    </div>

                    <div class="col-12 mb-2">
                        <v-textarea
                            name="input-7-1"
                            variant="outlined"
                            label="Mesajınız"
                            auto-grow
                            :rules="[rules.required]"
                            :v-model="message"
                        ></v-textarea>
                    </div>
                    <div class="col-12">
                        <i style="font-weight: 100;">ozcan.busra1999@gmail.com</i>
                        <v-tooltip text="Mesajı Gönder">
                            <template v-slot:activator="{ props }">
                                <v-btn v-bind="props" class="float-end" prepend-icon="mdi-email-arrow-right">
                                    Gönder
                                </v-btn>
                            </template>
                        </v-tooltip>
                    </div>
                </v-form>
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
}
</script>
<style lang="scss">
</style>