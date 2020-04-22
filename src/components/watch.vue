<template>
    <div>
        <p>watch</p>
        <div>{{data.message}}</div>
        <button @click="setMessage">点击</button>
    </div>
</template>

<script>
    import { reactive ,ref,watchEffect,watch} from 'vue'
    export default {
        name: "watch",
        setup(){
            const data = reactive({
                message:'hello vue 3.0',
                qaq:'123'

            })
           const stopWatch =  watchEffect(()=>{
                   console.log(data.message)
            })
            const index = ref(0)
            function setMessage() {
                data.message  += index.value
                index.value++
                //当等于5 的时候停止监听
                if(index.value === 5){
                    stopWatch();
                }
            }
            //第一个参数是监听的属性，第二个参数为回调函数 第三个参数
            //1.这个是监听单个属性的
            watch(()=>data.message,(newVal,oldVal)=>{
                console.log(newVal);
                console.log(oldVal);
            },{immediate:true,deep:true})
            // 2.监听多个属性的写法 这两个其中一个变化都会触发第二个回调函数的变化
            watch([()=>data.message,()=>data.qaq],([newmsg,newqaq],[oldmsg,oldqaq])=>{
                console.log(newmsg);
                console.log(newqaq);
                console.log(oldmsg);
                console.log(oldqaq);
            })
            //3.通过watch监听ref
            const reff = ref(0)
            watch(reff,(newVal,oldVal)=>{
                console.log(newVal);
                console.log(oldVal);
            })

            return {
                data,
                setMessage
            }
        }
    }
</script>

<style scoped>

</style>