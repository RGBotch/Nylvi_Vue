<template>
<div>
    <Carroussel/>

    <BlocTexte/>

    <SliderBlog/>
</div>
</template>

<script>
import Carroussel from '../components/Carroussel.vue'
import BlocTexte from '../components/BlocTexte.vue'
import SliderBlog from '../components/SliderBlog.vue'

export default{
  name:'Home',
  components:{
    Carroussel,
    BlocTexte,
    SliderBlog
  }
}
</script>
