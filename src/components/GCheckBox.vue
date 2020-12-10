<template>
  <div class="GCheckBox" :class="checked ? 'GCheckBox__active' : ''" @click="handleClick">
    <span v-html="checkBoxIcon" />
    <input type="checkbox" v-model="checked" />
  </div>
</template>

<script>
import { checkBoxIcon } from "../utils/icons";

export default {
  name: "GCheckBox",
  data() {
    return {
      checked: false,
      checkBoxIcon,
    };
  },
  methods: {
    handleClick() {
      this.checked = !this.checked;
    },
  },
};
</script>