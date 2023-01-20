<template>
    <div>
        <Filtre/>
        <section id="vinyles">
            <article v-for="product in limitedProducts" class="vinyle" v-bind:id="product.id" :key="product.id">
                <img class="cover" v-bind:src="product.cover"/>
                <p class="titreVinyle">{{product.name}}</p>
                <p class="auteurVinyle">{{product.artiste_id}}</p>
                <p class="dateSortie">{{product.date}}</p>
                <router-link class="bouton" v-bind:to="{ name: 'Article', params: { id: product.id }}">Voir</router-link>
            </article>
        </section>
    </div>
</template>

<script>
import Filtre from '../components/Filtre.vue';
import { mapState, mapActions } from "vuex";

export default {
  name: 'Articles',
  data() {
    return {
      limit: 16
    }
  },
  components:{
    Filtre,
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
}
</script>
