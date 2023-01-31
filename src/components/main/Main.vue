<template>
    <div class="class1" >
      <il>main</il>
      <il>{{this.$store.state.count}}</il>
      <div v-bind:class="class1">main----</div>
    </div>
</template>

<script>
    export default {
        name: "Main.vue",
        components: {},
        props: {},
        data() {
            return {
              isActive: false
            };
        },
  created() {
          
        },
        mounted() {
        },
        activited() {
        },
        update() {
        },
        beforeRouteUpdate() {
        },
        methods: {},
        filter: {},
        computed: {},
        watch: {},
    };

</script>

<style scoped>

  class1{
    background-color: #3ba746;
  }

</style>
