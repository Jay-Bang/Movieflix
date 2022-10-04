<template>
  <div>
    <input
      class="form-control mr-sm-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      v-model="testmsg"
    />
    <button @click="emitclick" class="btn btn-outline-success my-2 my-sm-0">
      Search
    </button>
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
