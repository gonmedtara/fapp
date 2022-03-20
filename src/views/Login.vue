<template>
  <div>{{title}}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  data(){
      return {
          title:'Login'
      }
  },
});
</script>
