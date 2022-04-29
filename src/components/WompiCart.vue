<template>
    <div>
        <div v-if="showCart">
            <div class=" sidebar">
                <div class="sidebar-header">
                    <h2>Carrito de compras</h2>
                </div>
                <div class="sidebar-content">
                    <div class="sidebar-items">
                        <div v-for="item in cartInformation">
                            <div class="row-flex">
                                <p>{{ item.name }}</p>
                                <div class="row-flex">
                                    <div>
                                        <InputNumber :key="item.id" class="mr-4" id="horizontal" v-model="item.quantity"
                                            mode="decimal" showButtons buttonLayout="horizontal"
                                            decrementButtonClass="p-button-secondary"
                                            incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus"
                                            decrementButtonIcon="pi pi-minus" />
                                    </div>
                                    <p> ${{ (item.price * item.quantity).toLocaleString() }}</p>
                                    <button id="btnDelete" :key="item.id" @click="deleteItem"
                                        class="delete ml-3"></button>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <h3 v-if="cartTotalAmmount">Total: ${{ cartTotalAmmount.toLocaleString() }}</h3>
                        <h3 v-else>No hay Productos en el Carrito</h3>

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
        }
    },
    components: {
        'wompi-button': WompiButton,
    },
    methods: {
        deleteItem: function (index) {
            return this.cartInformation.splice(index, 1)
        },
    },
    computed: {
        cartTotalAmmount: function () {
            let total = 0
            this.cartInformation.forEach(e => {
                total += e.price * e.quantity
            })
            return total
        },
        ammountInCents() {
            return parseInt(this.cartTotalAmmount * 100)
        }
    },

}

</script>
<style scoped >
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

.row-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    font-size: larger;
    font-weight: bolder;
    text-align: left;
    padding: 20px;
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

/deep/.p-inputtext {
    width: 3em;
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