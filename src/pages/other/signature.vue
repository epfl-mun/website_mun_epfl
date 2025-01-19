<template>
    <!DOCTYPE html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Improved Form and Popup</title>
        </head>

        <div id="background" style="font-family:Helvetica, Arial, sans-serif;" :class="{ 'blur-background': openSignature }">
            <div style="background-color: #ff0000; color: white; padding: 50px 20px; text-align: center;">
                <h1 style="margin: 0; font-size: 3rem;">Signature generator</h1>
                <p style="margin: 10px 0 0; font-size: 1.2rem;">Fill this form to generate your MUN signature.</p>
            </div>
            <form @submit.prevent="generateSignature" style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; background-color: #fff; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <div style="width: 48%;">
                        <label for="firstname" style="display: block; margin-bottom: 5px; font-weight: bold;">First name:</label>
                        <input v-model="firstname" type="text" id="firstname_input" name="firstname" autocomplete="given-name" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
                    </div>
                    <div style="width: 48%;">
                        <label for="lastname" style="display: block; margin-bottom: 5px; font-weight: bold;">Last name:</label>
                        <input v-model="lastname" type="text" id="lastname_input" name="lastname" autocomplete="family-name" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
                    </div>
                </div>
                <div style="margin-bottom: 15px;">
                    <label for="position" style="display: block; margin-bottom: 5px; font-weight: bold;">Position:</label>
                    <input v-model="position" type="text" id="position_input" name="position" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label for="email" style="display: block; margin-bottom: 5px; font-weight: bold;">Your MUN email:</label>
                    <input v-model="email" type="email" id="email_input" name="email" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
                </div>
            </form>
            <button id="button_generate" @click="generateSignature" style="display: block; margin: 20px auto; padding: 10px 20px; background-color: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Generate</button>
        </div>

    <div 
        id="alert_popup" 
        style="font-family:Arial, Helvetica, sans-serif; display:none; position: fixed; top: 20px; left: 50%; transform: translateX(-50%); padding: 10px 20px; background-color: #000000; color: white; border-radius: 5px;"> </div>

    <div id="popup" v-if="openSignature" style="font-family:Arial, Helvetica, sans-serif; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);width:90vw; max-width: 500px; height: auto; padding: 20px; background-color: white; border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); z-index: 1000; text-align: center; box-sizing: border-box;">
        <div class="overlay" v-if="openSignature"></div>
        <h1 style="margin-top: 0; font-size: 2rem; font-weight: bold;">Signature generated</h1>
        <p style="margin: 10px 0; padding: 0 20px;">Use the copy button below to copy this in your clipboard, and save it in your email app !</p>
        <iframe id="iframe_content" :srcdoc="signatureHTML" style="width: 100%; height: 80px; border: 1px solid #ccc; border-radius: 5px;"></iframe>
        <button @click="copied" id="button_copy" style="display: block; margin: 20px auto; padding: 10px 20px; background-color: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">{{ copiedText }}</button>
    </div>

</template>
  
  


<script>
    import { seo } from '@/composables/seo';

    export default {
        data() {
            return {
            openSignature: false,
            lastname: "",
            email: "",
            firstname: "",
            position: "",
            copiedText: "Copier",
            };
        },
        setup(){
            seo('signature', false)
        },
        methods: {
            generateSignature() {
            this.openSignature = !this.openSignature;
            },
            copied() {
            var doc = document.querySelector("iframe").contentDocument;
            var win = document.querySelector("iframe").contentWindow;

            var range = doc.createRange();
            range.selectNode(doc.querySelector("html"));

            win.getSelection().removeAllRanges();
            win.getSelection().addRange(range);

            doc.execCommand("copy");
            win.getSelection().removeAllRanges();

            this.copiedText = "Copié !";
            },

            closed() {
            this.openSignature = false;
            this.copiedText = "Copier";
            },
        },
        computed: {
            signatureHTML() {
                return `<!DOCTYPE html><body style="color: rgb(0, 0, 0); letter-spacing: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; word-wrap: break-word; -webkit-nbsp-mode: space; -webkit-line-break: after-white-space;"><table style="font-family: Cambria, serif;"><tr><td><a href="https://mun.epfl.ch/"><img src="https://mun-epfl.ch/signature/logo.png" width="60" height="60"></a><br></td><td dir="ltr"><font face="Helvetica, Arial, sans-serif" style="font-size: 12px;"><div style="margin: 0px; padding: 0px;"><b><span style="color: rgb(255, 0, 0);">${this.firstname} ${this.lastname}</span></b></div><div style="margin: 0px; padding: 0px;"><span style="color: rgb(255, 0, 0);">Model United Nations EPFL</span><span style="color: rgb(255, 0, 0);"> | </span><i><span style="color: rgb(128, 128, 128);">${this.position}</span></i></div><div style="margin: 0px; padding: 0px;"><a href="mailto:${this.email}" style="color: rgb(128, 128, 128); text-decoration: none;">${this.email}</a><span style="color: rgb(255, 0, 0);"> | </span><a href="https://wa.me/+41772019335" style="color: rgb(128, 128, 128); text-decoration: none;">+41 77 201 93 35</a><span style="color: rgb(255, 0, 0);"> | </span><a href="https://mun.epfl.ch" style="color: rgb(128, 128, 128);text-decoration:none;">mun.epfl.ch</a></div><div style="margin: 0px; padding: 0px;"><span style="color: rgb(128, 128, 128);">CO 116</span><span style="color: rgb(255, 0, 0);"> | </span><span style="color: rgb(128, 128, 128);">Case postale Station 10</span><span style="color: rgb(255, 0, 0);"> | </span><span style="color: rgb(128, 128, 128);">CH-1015 Lausanne</span><span style="color: rgb(255, 0, 0);"> | </span><a href="https://instagram.com/mun-epfl" style="text-decoration: none;"><span><img width="13" height="13" style="margin-bottom: -2px;" src="https://mun-epfl.ch/signature/logo-instagram.png"></span></a>&nbsp;<a href="https://www.linkedin.com/company/MUN-EPFL/" style="text-decoration: none;"><span><img width="13" height="13" style="margin-bottom: -2px;" src="https://mun-epfl.ch/signature/logo-linkedin.png"></span></a></div></font></td></tr></table></body></html>`;
            },
        },
    };
</script>

<style scoped>
.blur-background {
    filter: blur(5px);
    pointer-events: none;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}
</style>
