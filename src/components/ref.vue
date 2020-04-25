<template>
    <div>
        <div class="ref" ref="root"></div>
        <div class="qaq" ref="msg">
            <div>{{countRef}}</div>
            <button @click="addCount">++</button>
        </div>
    </div>
</template>

<script>
    import {ref,onMounted,isRef,unref,shallowRef,readonly,isReadonly} from 'vue'
    export default {
        name: "ref",
        setup(){
            const msg = ref();
            const root = ref();
            onMounted(()=>{//在dom加载完毕后
                console.log(msg);//打印的是msg的ref
                console.log(root);//若不在return中导出那么则为undefined
                console.log(isRef(msg))//提供一个属性是不是ref
                console.log(unref(root));//一个语法糖 isRef(root) ? root.value :value
                //例如
                unref(1000)//返回1000
                unref(root)//返回root的dom也就是root.vaule
            })
            // shallowRef
            shallowRef()//只会代理第一层，剩下多少层都不会代理
            const countRef = shallowRef({count:1000})
            function addCount() {
                countRef.value.count++
                console.log(countRef.value.count)//在这里会变化 但是在视图中不会变化
            }
            console.log(countRef);
            //readonly
            const copy = readonly(countRef)//copy不可修改

            isReadonly(copy);//判断是不是只读的
            // 还有  shallowReactive shallowReadonly 都是浅层的意思
            return {
                msg,
                root,
                countRef,
                addCount
            }
        }
    }
</script>

<style scoped>

</style>