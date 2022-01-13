<template>
    <div class="app">{{message}}</div>
</template>

<script>
export default {
    name:'App',
    data(){
        return {
            message:'我是vue加载出来的'
        }
    }
}
</script>

<style>
    .app{
        font-size:20px;
    }
</style>
