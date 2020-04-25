//默认的use开头来定义hooks这是规则
import { reactive,toRefs} from "vue";
export  default function useConter() {
    const data = reactive({
        count: 0
    })
    function addCount() {
        data.count++
    }
    return {
        data:toRefs(data), //让响应式数据可以解构
        addCount
    }

}