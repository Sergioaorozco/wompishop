<template>
    <div>
        <div v-if="showCart">
            <div class="sidebar">
                <div class="sidebar-header">
                    <p>Carrito de compras</p>
                </div>
                <div class="sidebar-content">
                    <div class="sidebar-items">
                        <ul v-for="item in cartInformation">
                            <li>{{ item.name }} <span class="is-right"> ${{ item.price }}</span></li>
                            <hr>
                        </ul>
                    </div>
                    <div class="checkout checkbutton">
                        <wompi-button amount-in-cents="12000000" />
                        <a @click="returnWeb" class="is-back">Sigue comprando</a>
                    </div>
                </div>
            </div>
            <div @click="returnWeb" class="sidebar-mask">
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
            emptyCart: true,
        }
    },
    components: {
        'wompi-button': WompiButton,
    },
    methods: {
        returnWeb() {
            this.showCart = false
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