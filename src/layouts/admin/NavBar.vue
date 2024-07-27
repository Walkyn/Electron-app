<template>
  <div>
    <Avatar
        class="p-overlay-badge"
        image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg"
        size="large"
        shape="circle"
        @click="toggle"
      />

    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
  </div>
</template>

<script setup>
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";

import { ref } from "vue";

const menu = ref();
const items = ref([
  {
    label: "Options",
    items: [
      {
        label: "Refresh",
        icon: "pi pi-refresh",
      },
      {
        label: "Export",
        icon: "pi pi-upload",
      },
    ],
  },
]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>

<style lang="scss" scoped></style>
