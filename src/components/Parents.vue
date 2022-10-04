<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <ChildVue @event1="event2"></ChildVue>
    <ChildSearchListVue :searchkeyword="msg"></ChildSearchListVue>
  </div>
</template>

<script>
import { ref } from "vue";
import ChildVue from "./Child.vue";
import ChildSearchListVue from "./ChildSearchList.vue";
export default {
  components: {
    ChildVue,
    ChildSearchListVue,
  },
  setup() {
    const msg = ref("");
    const event2 = (a) => {
      msg.value = a.value;
    };
    return { event2, msg };
  },
};
</script>

<style lang="scss" scoped></style>
