<template>
    <section id="filtre" >
                <div id="potent">
                    <div id="prix">
                        <h4>Prix</h4>
                        <div class="slider">
                            <div class="fader">
                            </div>
                        </div>
                    </div>
                    <div id="periode">
                        <h4>Date</h4>
                        <div class="slider">
                            <div class="fader">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="dropContent">
                    <ul class="niveau1">
                        <li class="niveau1">Genre
                            <ul class="niveau2">
                                <li>Hip hop</li>
                                <li>Techno</li>
                                <li>Dance</li>
                                <li>House</li>
                                <li>Rock</li>
                                <li>Metal</li>
                                <li>Punk</li>
                                <li>Trance</li>
                            </ul>
                        </li>
                        <li class="niveau1">Artiste
                            <ul class="niveau2">
                                <li v-for="artiste in artistes" v-bind:id="artiste.id" :key="artiste.id" >{{artiste.name}}</li>
                            </ul>
                        </li>
                        <li class="niveau1">Edition
                            <ul class="niveau2">
                                <li v-for="artiste in artistes" v-bind:id="artiste.id" :key="artiste.id">Hip hop</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div id="dropHard">
                    <ul class="niveau1">
                        <li class="niveau1">Format
                            <ul class="niveau2">
                                <li>Album</li>
                                <li>EP</li>
                                <li>Single</li>
                            </ul>
                        </li>
                        <li class="niveau1">Etat
                            <ul class="niveau2">
                                <li>Neuf</li>
                                <li>Bon</li>
                                <li>Usé</li>
                                <li>Non jouable</li>
                            </ul>
                        </li>
                <li class="niveau1">Taille
                    <ul class="niveau2">
                        <li>12" 30cm</li>
                        <li>10" 25cm</li>
                        <li>7" 17.5cm</li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default ({
   name: 'Filtre',
   computed:
      mapState({
        products: state => state.products,
        artistes: state => state.artistes
      }),
    methods: {
      ...mapActions({'loadProduct': "fetchProducts"}),
      ...mapActions({'loadArtiste': "fetchArtistes"}),
    },
    beforeMount() {
      this.loadProduct();
      this.loadArtiste();
    }
})
</script>
