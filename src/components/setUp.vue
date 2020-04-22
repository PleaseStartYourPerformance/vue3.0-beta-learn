<template>
  <div class="hello">
    <div> {{msg}}</div>
    <p>{{data.count}}</p>
    <button @click="addCount">++</button>

  </div>
</template>

<script>
  import { reactive } from 'vue'
export default {
  name: 'setUp',
  props: {
    msg: {
      type:String
    }
  },
  setup(props,context){//替代了beforeCreate和create  在这两个生命周期函数之前调用

    //props是父组件传递下来的
    //context是替换掉之前的this
    console.log(props)
    console.log(context);
    const data = reactive({ //响应式数据
      count: 0
    })
    function addCount() {
      data.count++
    }
    // return { 如果使用这样的方式那么将会失去响应式
    //   ...data
    // }
    return {
      data,
      addCount
    }
  }
}
</script>

<style scoped>

</style>
