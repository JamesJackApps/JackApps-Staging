<template>
    <div class="container bg-transparent">
        <h3 class="light-heading sub-heading heading-text sub-heading-font-size">Get In Touch</h3>

        <form @submit.prevent="sendEmail">
            <label class="link-font heading-text leading-tight  text-center flex flex-row">Name</label>
            <input type="text" v-model="name" name="name" placeholder="Your Name">
            <label class="link-font heading-text leading-tight  text-center flex flex-row">Email</label>
            <input type="email" v-model="email" name="email" placeholder="Your Email">
            <label class="link-font heading-text leading-tight  text-center flex flex-row">Message</label>
            <textarea class="link-font heading-text leading-tight  text-center flex flex-row" name="message"
                v-model="message" cols="30" rows="5" placeholder="Message">
          </textarea>

            <input type="submit" value="Send" class="button btn-orange">
        </form>
    </div>
</template>

<script>
import { faPersonWalkingDashedLineArrowRight, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import { useToast } from "vue-toastification";

export default {
    name: 'ContactUs',
    setup() {
        const toast = useToast();
        return { toast }
    },

    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        sendEmail(e) {
            if (this.name == "" || this.email == "" || this.message == "") {
                this.completionError()
            }
            else {
                try {
                    emailjs.sendForm('service_ps7esew', 'template_nuokbvq', e.target, 'fKg-Qp0mj7sy-gvcD', {
                        name: this.name,
                        email: this.email,
                        message: this.message

                    }).then(

                        () => {
                            this.successMessage()
                            clearState();
                            setStatusMessage("Email sent success");
                        },
                        () => {
                            this.failMessage()
                        }
                    )



                } catch (err) {
                    if (err instanceof ReferenceError) {
                        this.failMessage()
                    } else {
                        this.failMessage()
                        throw err; // rethrow
                    }
                }
                // Reset form field
                this.name = ''
                this.email = ''
                this.message = ''
            }
        },
        failMessage() {
            this.toast("There was a problem, please try again", {
                position: "bottom-left",
                type: "error",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: "fas fa-rocket",
                rtl: false
            });
        },
        successMessage() {
            this.toast("Your email was successfully sent", {
                position: "bottom-left",
                type: "success",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: "fas fa-rocket",
                rtl: false
            });
        },
        completionError() {
            this.toast("Please fill out all fields", {
                position: "bottom-left",
                type: "error",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: "fas fa-rocket",
                rtl: false
            });
        }

    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

input,
select,
textarea {
    color: black;
}

label {
    float: left;
}

input,
textarea {
    background: white;
}



input[type=text],
[type=email],
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #FF6B00;

    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

/* input[type=submit] {
    background-color: #FF6B00;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
} */

/* input[type=submit]:hover {
    background-color: #b8c7b9;
} */

.container {
    display: block;

    text-align: center;
    margin: 0 50px;
    border-radius: 5px;
    background-color: rgba(255, 107, 0, 0.4);
    padding: 20px;
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
}
</style>