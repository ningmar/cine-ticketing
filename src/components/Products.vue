<template>
<div>
  <section-title title="cartelera artesiete"></section-title>
    <div class="max-w-6xl mx-auto flex flex-wrap">
      <product-card
        v-for="product in products"
        :key="product.id"
        :category="product.category"
        :name="product.name"
        :image="product.image"
      ></product-card>
    </div>
</div>
</template>

<script>
import ProductCard from "./ui/ProductCard";
import SectionTitle from "./ui/SectionTitle";

export default {
  name: "Products",
  components: { ProductCard, SectionTitle },
  data() {
    return {
      products: [
        {
          id: 1,
          category: "Drama Comedy",
          name: "The Boy",
          image: "https://artesiete.es/Posters/elchico.jpg",
        },
        {
          id: 2,
          category: "Drama",
          name: "The Summer We Live",
          image: "https://artesiete.es/Posters/elveranoquevivimos.jpg",
        },
        {
          id: 3,
          category: "Thriller",
          name: "Up to The Sky",
          image: "https://artesiete.es/Posters/hastaelcielo.jpg",
        },
        {
          id: 4,
          category: "Action",
          name: "Wonder Woman 1984",
          image: "https://artesiete.es/Posters/wonderwoman1984.jpg",
        },
        {
          id: 5,
          category: "Drama",
          name: "The Girl With The Bracelet",
          image: "https://artesiete.es/Posters/lachicadelbrazalete.jpg",
        },
        {
          id: 6,
          category: "Drama",
          name: "The Persian Teacher",
          image: "https://artesiete.es/Posters/elprofesordepersa.jpg",
        },
        {
          id: 7,
          category: "Animation",
          name: "The Croods: A New Era",
          image: "https://artesiete.es/Posters/loscroodslanuevaera.jpg",
        },
        {
          id: 8,
          category: "Drama",
          name: "The Father",
          image: "https://artesiete.es/Posters/elpadre.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
