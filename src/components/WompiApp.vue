<template>
  <div>
    <div class="discount">
      <p>Bebidas Naturales Umhana - Colombia</p>
    </div>
    <div class="wrapper">
      <h1 class="information">WompiShop</h1>
      <div class="is-fluid">
        <div class="information" v-for="product in products" :key="product.name">
          <img :src="product.image" :alt="product.alt" />
          <p>{{ product.name }} - <span>${{ product.price.toLocaleString() }}</span></p>
          <a v-on:click="addToCart(product)" id="cartEvent" class="btn">Agregar al carrito</a>
        </div>
        <wompi-cart class="information" :cartInformation="cart" :showCart.sync="show" />
      </div>
    </div>
  </div>
</template>

<script>
import WompiButton from './WompiButton.vue';
import WompiCart from './WompiCart.vue';

export default {
  name: 'WompiApp',
  components: {
    'wompi-button': WompiButton,
    'wompi-cart': WompiCart
  },
  data() {
    return {
      show: false,
      cart: [],
      //Product list
      products: [
        {
          id: 1,
          name: 'Calma Natural',
          price: 120000,
          image: require('../assets//product1.webp'),
          alt: ('Bebida Natural Calma')
        },
        {
          id: 2,
          name: 'Inmmunity Boost',
          price: 78000,
          image: require('../assets//product2.webp'),
          alt: 'Bebida Inmunidad Defensas'
        },
        {
          id: 3,
          name: 'Beuaty Elixir',
          price: 54000,
          image: require('../assets//product3.webp'),
          alt: 'Bebida para la belleza de la piel'
        },
        {
          id: 4,
          name: 'Cognitive Boost',
          price: 45000,
          image: require('../assets//product4.webp'),
          alt: 'Bebida para la agilidad mental'
        },
      ],
    }
  },
  methods: {
    cartEvent() {
      let event = document.getElementById("cartEvent").click()
      if (event) {
        this.show = true
      }
    },
    addToCart(product) {
      this.show = true
      this.cart.push(product)
    }
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


.btn {
  appearance: button;
  backface-visibility: hidden;
  background-color: var(--color-body-text);
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    Ubuntu, sans-serif;
  font-size: 100%;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  padding-block-start: 12px;
  padding-block-end: 12px;
}

.btn:disabled {
  cursor: default;
}

.btn:hover {
  background-color: var(--color-body-hover);
}

.btn:focus {
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
    rgba(50, 151, 211, 0.3) 0 0 0 4px;
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
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 4em;
  }
}

@media only screen and (min-width: 1025px) {
  .is-fluid {
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  }
}
</style>
