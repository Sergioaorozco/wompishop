<template>
  <div>
    <form action="https://checkout.wompi.co/p/" method="GET">
      <!-- OBLIGATORIOS -->
      <input type="hidden" name="public-key" value="pub_test_28DzHMDJ4Qa1lFtPXYlif3MO3R0GXktf" />
      <input type="hidden" name="currency" value="COP" />
      <input type="hidden" name="amount-in-cents" :value="amountInCents" />
      <input type="hidden" name="reference" :value="uniqueId" />
      <button class="btn-modal" type="submit">Comprar</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'WompiButton',
  props: {
    amountInCents: "",
  },

  data() {
    return {
      uniqueId: "uhmana-" + Math.random().toString(36).substring(2, 16)
    }
  },
}

</script>
<style scoped>
.btn-modal {
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
  height: 44px;
  line-height: 1.15;
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
}

.btn-modal:disabled {
  cursor: default;
}

.btn-modal:hover {
  background-color: var(--color-body-hover);
}

.btn-modal:focus {
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
    rgba(50, 151, 211, 0.3) 0 0 0 4px;
}
</style>