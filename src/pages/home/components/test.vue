<template>
  <div>
    测试
    <Test1 />
  </div>
</template>
<script>
import Test1 from "./test1.vue"
export default {
  data: function () {
    return {
      count: 0
    }
  },
  components: {
    Test1
  }
}
</script>
