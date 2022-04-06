<template>
  <div id="app">
    <entete></entete>
    <router-view/>
    <!-- pied de page-->
    <pied></pied>

  </div>
</template>

<script>
import Entete from '@/components/Entete.vue';
import Pied from '@/components/Pied.vue';

export default {
  name: 'LaureDinateur',
  components: { Pied, Entete },
};
</script>

<style>

</style>
