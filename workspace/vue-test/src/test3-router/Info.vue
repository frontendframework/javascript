<template>
    <div>
        <div>Info:{{username}}</div>
        <div><button @click="goBack">back</button></div>
        <div><button @click="goHome">home</button></div>
    </div>
</template>
<script>
export default {
    name: 'Info',
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        goHome(){
            this.$router.push('/')
        }
    },
    computed:{
        username(){
            return this.$route.params.userName
        }
    }
}
</script>