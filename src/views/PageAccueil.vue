<template>
  <main>
    <!-- Titre principal du site, il ne doit y en avoir qu'un dans la page et
         il faut le placer dans <main> -->
    <h1>Mes réalisations</h1>

    <ul class="realisations">
      <realisation
        v-for="reali in realisations"
        :key = "reali.image"
        :image = "reali.image"
        :titre="reali.titre"
        :description="reali.description">
      </realisation>
    </ul>
  </main>
</template>
<script>

import Realisation from '@/components/Realisation.vue';

export default {
  components: { Realisation },
  data() {
    return {
      realisations: [
        {
          image: 'img/numbers-01.jpg',
          titre: 'Tableau le chiffre 1',
          description: 'Expérimentation de couleurs',
        },
        {
          image: 'img/numbers-02.jpg',
          titre: 'Tableau le chiffre 2',
          description: 'Jeu de fondus',
        },
        {
          image: 'img/numbers-06.jpg',
          titre: 'Tableau le chiffre 6',
          description: '80\'s style',
        },
        {
          image: 'img/numbers-09.jpg',
          titre: 'Tableau le chiffre 9',
          description: 'Travail avec les pinceaux',
        },
        {
          image: 'img/numbers-12.jpg',
          titre: 'Tableau le chiffre 12',
          description: 'Répétition de formes',
        },
      ],
    };
  },
};
</script>
<style scoped>

.realisations {
  list-style-type: none; /* suppression des puces */
  margin: 0;
  padding: 0;
}

</style>
