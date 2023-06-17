<template>
    <div class="card">
        <img :src="require(`@/assets/${product.image}`)" alt="image" class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title card-title-reg">{{ product.name }}</h3>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
                <div class="ingredients">{{ product.description }}</div>
            </div>
            <!-- /.card-info -->
            <div class="card-buttons">
                <button class="button button-primary button-add-cart" @click="addProductToBasket(product)">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">{{ product.price }} ₽</strong>
            </div>
        </div>
        <!-- /.card-text -->
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default{
        props: {
            product: {
                required: true,
                type: Object
            }
        },
        methods:{
            ...mapActions(['addToBasket']),
            addProductToBasket(product){
                this.addToBasket(product)
            }
        }
    }
</script>