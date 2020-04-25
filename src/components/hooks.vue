<template>
    <div class="hello">
        <div> {{msg}}</div>
        <p>{{count}}</p>
        <button @click="addCount">++</button>
    </div>
</template>

<script>
    import useConter from '../hooks/useConter'
    export default {
        name: 'setUp',
        props: {
            msg: {
                type:String
            }
        },
        setup(){
            const {data:{count},addCount} = useConter();//若通过解构方式，会失去响应式，需要在useConter中加入toRefs()
            return {
                count,
                addCount
            }
        }
    }
</script>

<style scoped>

</style>
