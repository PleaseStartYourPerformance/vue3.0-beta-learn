<template>
    <div>
        <div></div>
    </div>
</template>

<script>
    import useStore from '../hooks/useStore'
    export default {
        name: "inject",
        // inject:['count']
        setup(){
            const data = useStore()
            console.log(data);
            console.log(data.count);
        }
    }
</script>

<style scoped>

</style>