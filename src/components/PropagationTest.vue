<template>
  <div>
    <div class="box1" @click="box1func">
      <h1>box1</h1>
      <div class="box2" @click.stop="box2func">
        <h1>box2</h1>
        <div class="box3" @click.stop="box3func">
          <h1>box3</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    const box1func = () => {
      console.log("box1");
    };

    const box2func = () => {
      console.log("box2");
    };

    const box3func = () => {
      console.log("box3");
    };
    return { box1func, box2func, box3func };
  },
};
</script>

<style scoped>
.box1 {
  background-color: red;
  padding: 1em;
  z-index: 0;
}
.box2 {
  background-color: yellow;
  padding: 1em;
  z-index: 1;
}
.box3 {
  background-color: blue;
  z-index: 2;
}
</style>
