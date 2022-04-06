<template>
  <div id="app">
       <header>
      <!-- Logo du site -->
         <router-link class="logo" to="/accueil">
        <div class="nom">Laure Dinateur</div>
        <div class="metier">Graphiste</div>
         </router-link><nav><!-- Menu de navigation -->
      <ul>
        <li>
          <!-- Lien actif : On ajoute la classe .actif au lien
          représentant la page actuelle -->
          <router-link to="/accueil">Accueil</router-link>
        </li>
        <li>
          <router-link to="/informations">Informations</router-link>
        </li>
        <li>
          <router-link to="/contact">Me contacter</router-link>
        </li>
      </ul>
    </nav>
    </header>
    <router-view/>
    <!-- pied de page-->
    <footer>
      <nav>
        <ul>
          <li>
            <a href="https://twitter.com/lauredi">
              <img src="img/twitter-draw.png" alt="Twitter">
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/laure.dinateur">
              <img src="img/facebook-draw.png" alt="Facebook">
            </a>
          </li>
        </ul>
      </nav>

      <div>&copy;2021 Laure Dinateur</div>
      <!-- Utiliser les HTML entities pour intégrer des caractères spéciaux à
      votre page comme le copyright : © => &copy;
      Référence : https://dev.w3.org/html5/html-author/charref
      -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LaureDinateur',
};
</script>

<style>

</style>
