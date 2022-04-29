<template>
    <div>
        <div v-if="showCart">
            <div class=" sidebar">
                <div class="sidebar-header">
                    <h2>Carrito de compras</h2>
                </div>
                <div class="sidebar-content">
                    <div class="sidebar-items">
                        <ul v-for="item in cartInformation">
                            <li>{{ item.name }}
                                <!-- <span>
                                    <InputNumber v-model="value2" showButtons buttonLayout="horizontal"
                                        decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success"
                                        incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                                </span> -->
                                <span class="is-right"> ${{ item.price.toLocaleString() }}</span>
                            </li>
                            <hr>
                        </ul>
                        <h3>Total: ${{ cartTotalAmmount.toLocaleString() }}</h3>

                    </div>
                    <div class="checkout checkbutton">
                        <wompi-button :amount-in-cents="ammountInCents" />
                        <a @click="$emit('update:showCart', false)" class="is-back">Sigue comprando</a>
                    </div>
                </div>
            </div>
            <div @click="$emit('update:showCart', false)" class="sidebar-mask">
            </div>
        </div>
    </div>
</template>
<script>
import WompiButton from './WompiButton.vue';

export default {
    name: 'WompiCart',
    props: ['cartInformation', 'showCart'],
    data() {
        return {
            value2: 1
        }
    },
    components: {
        'wompi-button': WompiButton,
    },
    computed: {
        cartTotalAmmount: function () {
            let total = 0
            this.cartInformation.forEach(e => {
                total += e.price
            })
            return total
        },
        ammountInCents() {
            return parseInt(this.cartTotalAmmount * 100)
        }
    }
}

</script>
<style scoped>
a {
    text-decoration: none;
}

.is-back {
    text-decoration: underline;
    cursor: pointer;
}

.is-right {
    float: right
}

.checkout {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.sidebar {
    position: fixed;
    z-index: 1001;
    bottom: 0;
    right: 0;
    width: 100%;
    height: auto;
    background-color: white;
    transition: all 0.5s;
}

.sidebar-mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
}

.sidebar-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    min-height: -webkit-fill-available;
}

.sidebar-header {
    padding-top: 20px;
    font-size: larger;
    font-weight: bold;
}

.checkbutton {
    margin-bottom: 30px;
    width: 100%;
}

.sidebar-items ul {
    padding: 0
}

.sidebar-items li {
    text-align: left;
    list-style: none;
    margin-bottom: 20px;
}


/* MediaQueries */

@media only screen and (min-width: 600px) {
    .checkbutton {
        margin-bottom: 60px;
    }

    .sidebar {
        position: fixed;
        z-index: 1001;
        top: 0;
        right: 0;
        width: 30rem;
        height: 100%;
        background-color: white;
    }
}
</style>