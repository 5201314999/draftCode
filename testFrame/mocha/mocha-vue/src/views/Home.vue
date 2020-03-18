<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Person></Person>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Person from '@/components/Person.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Person,
  },
};
</script>
