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
import emailjs from 'emailjs-com';

export default {
    name: 'ContactUs',
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        sendEmail(e) {
            try {
                emailjs.sendForm('service_ps7esew', 'template_nuokbvq', e.target, 'fKg-Qp0mj7sy-gvcD', {
                    name: this.name,
                    email: this.email,
                    message: this.meessage
                })

            } catch (err) {
                if (err instanceof ReferenceError) {
                    alert("JSON Error: " + err.message);
                } else {
                    throw err; // rethrow
                }
            }
            // Reset form field
            this.name = ''
            this.email = ''
            this.message = ''
        },
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

label {
    float: left;
}

input,
textarea {
    background: white;
}

.btn-orange {
    background: #FF6B00;
    color: #F9FAFB;
}

.button {
    border-radius: 80px;
    padding: 15px 40px;
    font-weight: 700;
    border: 1px solid transparent;
}

.button:hover {
    border: 1px solid #380146;
}

.btn {
    border-radius: 80px;
    padding: 15px 40px;
    font-weight: 700;
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