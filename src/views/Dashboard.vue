<template>
  <div>{{title}}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dashboard",
  data(){
      return {
          title:'Dashboard'
      }
  },
});
</script>
