<template>
  <div>
    <input v-model="testmsg" />
    <button @click="emitclick">click</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  emit: ["event1"],
  setup(props, context) {
    const testmsg = ref("");

    const emitclick = () => {
      //console.log(testmsg);
      context.emit("event1", testmsg);
    };
    return { emitclick, testmsg };
  },
};
</script>

<style lang="scss" scoped></style>
