<template>
  <div>
    <div class="discount">
      <p>15% de descuento en todos nuestros productos a nivel nacional</p>
    </div>
    <div class="wrapper">
      <h1 class="information">WompiShop</h1>
      <div class="is-fluid">
        <div class="information">
          <img src="../assets/product1.webp" alt="Calma Natural Drink" />
          <p>Calma - $120.000COP</p>
          <wompi-button amount-in-cents="12000000" />
        </div>
        <div class="information">
          <img src="../assets//product2.webp" alt="Inmunity Natural Drink" />
          <p>Inmunity Boost - $78.000COP</p>
          <wompi-button amount-in-cents="7800000" />
        </div>
        <div class="information">
          <img src="../assets//product3.webp" alt="Natural Drink for the Skin" />
          <p>Beauty Elixir - $45.000COP</p>
          <wompi-button amount-in-cents="4500000" />
        </div>
        <div class="information">
          <img src="../assets//product4.webp" alt="Natural Drink to enhance cognitive behaviors." />
          <p>Cognitive Boost - $54.000COP</p>
          <wompi-button amount-in-cents="5400000" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WompiButton from './WompiButton.vue';

export default {
  name: 'WompiApp',
  components: {
    'wompi-button': WompiButton
  }
};


</script>

<style lang="scss" scopSed>
@import "../assets/styles.css";

body {
  margin: 0;
  background-color: var(--color-body-background);
}

/* Mobile First styles */
body,
h1,
h2,
h4,
h5,
h6,
p,
div {
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
}
.wrapper {
  max-inline-size: 1158px;
  padding-block-end: 6px;
  padding-block-start: 6px;
  padding-inline-start: 15px;
  padding-inline-end: 15px;
  margin: auto;
}
.information {
  text-align: center;
  & img {
    max-width: 100%;
  }
}

.discount {
  background-color: #45543b;
  color: var(--color-body-background);
  position: relative;
  text-align: center;
  padding-block-end: 15px;
  padding-block-start: 15px;
  padding-inline-start: 10px;
  padding-inline-end: 10px;
}

/* Media Queries Section */

@media only screen and (min-width: 600px) {
  .is-fluid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    gap: 4em;
  }
}

@media only screen and (min-width: 768px) {
  .is-fluid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (min-width: 1025px) {
  .is-fluid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
