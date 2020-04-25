<template>
    <div>
        <provideChild/>
    </div>
</template>

<script>
    import {reactive} from 'vue'
    import provideChild from './provide-chlid'
    //注意这里是解构出来的
    import { provideStore } from '../hooks/useStore'

    export default {
        name: "provide",
        components:{
            provideChild
        },
        // provide(){
        //     return{
        //         count:100
        //     }
        // }
        setup(){
            const data = reactive({
                count:'我是vue3.0传递的provide'
            })
            provideStore(data);//提供val
        }
    }
</script>

<style scoped>

</style>