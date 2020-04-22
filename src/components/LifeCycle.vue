<template>
    <div>

    </div>
</template>

<script>
    import { onBeforeMount,onMounted} from 'vue'
    export default {
        name: "LifeCycle",
        setup(){
            onBeforeMount(()=>{
                console.log('onBeforeMount')
            })
            onMounted(()=>{
                console.log('onMounted')
            })


        }
    }
</script>

<style scoped>

</style>