<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js aksjdkasjndjkasn TypeScript App"/>
    {{a}}
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, onMounted } from 'vue'
  import { getPackages, authApi } from '@/api'
  import HelloWorld from '@/components/HelloWorld.vue'

  export default defineComponent({
    name: 'Home',
    components: {
      HelloWorld,
    },
    data() {
      return {
        a: 1
      }
    },
    setup(props, context) {
      console.log(props, context)
      const datas = reactive({
        data1: [],
        data2: [],
        a: 0
      })

      const getPackages1 = async () => {
        return await getPackages()
      }

      const getPackages2 = async () => {
        return await getPackages()
      }

      onMounted(() => {
        let a = getPackages1()
        let b = getPackages2()
        console.log(a, b)
      })

      return {
        ...toRefs(datas)
      }
    }
  })
</script>
