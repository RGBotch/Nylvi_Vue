<template>
<section id='recent'>
    <h2>Derniers ajouts</h2>
    <div id='wrapper'>
        <div class='carrousel'>
            <router-link v-for="product in limitedProducts" :class="'plan p'+product.id" :key="product.id" to="Articles">
                <img class='cover' v-bind:src="product.cover"/>
                <p class='titreVinyle'>{{product.name}}</p>
            </router-link>
        </div>
    </div>
</section>
</template>

<script>

import {mapActions, mapState} from 'vuex'
export default ({
   name: 'carroussel',
  data() {
    return {
      limit: 8
    }
  },
  computed:
      mapState({
        products: state => state.products,
        limitedProducts() {
          return this.products.slice(0, this.limit);
        },
      }),
  methods: {
    ...mapActions({'loadProduct': "fetchProducts"}),
  },
  beforeMount() {
    this.loadProduct();
  }
})
</script>


