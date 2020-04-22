<template>
    <div>
        <p>{{data.count2}}</p>
        <button @click="addCount">++</button>
        <hr>
        <p>{{count3}}</p>
        <button @click="addCount3">++</button>
    </div>
</template>

<script>
    import { reactive,computed ,ref} from 'vue'
    export default {
        name: "computed",
        setup(){
            const data = reactive({
                count:1,
                count2:computed(()=>data.count*2)//第一种使用方式 只能getter
            })
            const count = ref(0)//ref返回的数据需要.value
            const count3 = computed({//计算属性返回的属性也是通过.value去获取
                set(val){
                    count.value = val
                },
                get(){
                    return count.value = 2
                }
            })
            function addCount3() {
                count3.value++
            }
            function addCount() {
                data.count++
            }
            return {
                data,
                addCount,
                count,
                count3,
                addCount3
            }
        }
    }
</script>

<style scoped>

</style>