import {inject,provide} from 'vue'
const store  = Symbol();
export function provideStore(val) {
      provide(store,val)//这样就传递了provide
}
export  default  function useStore(defalutStore={}) {
    //下面接受了provide
    return inject(store,defalutStore)//接受两个参数第一个参数是Syblom第二个参数是defalut
}
