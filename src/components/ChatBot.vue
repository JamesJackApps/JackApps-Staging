<template>
    <div v-show="isShow" class="fixed z-20002 w-2/5 bottom-36 right-0 border-colour-black border-2">
        <iframe src="https://www.chatbase.co/chatbot-iframe/JUPURnaLPSIcCitHt5336" width="100%"
            style="height: 100%; min-height: 400px" frameborder="0"></iframe>
    </div>
    <img v-show="isShow2" class="h-[100px] w-auto fixed bottom-20 right-28" src="../assets/CTA2/bubble.png">

    <button class=" mb-2 fixed bottom-0 right-0 z-20002" @click="isShow = !isShow, isShow2 = !isShow2">
        <img class="h-[150px] w-[150px]" src="../assets/CTA2/chatbotsquare.png"></button>
</template>

<script>
export default {
    name: "ToggleDiv", data: function () {
        return {
            isShow: false,
            isShow2: true,
        };
    }, props: { msg: String, },
};
</script>
