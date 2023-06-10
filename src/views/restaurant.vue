<template>
    <main class="main">
		<div class="container">
			<section class="menu">
				<div class="section-heading">
					<h2 class="section-title restaurant-title">{{ restaurant.name }}</h2>
					<div class="card-info">
						<div class="rating">
							{{ restaurant.stars }}
						</div>
						<div class="price">От {{ restaurant.price }} ₽</div>
						<div class="category">{{ restaurant.kitchen }}</div>
					</div>
					<!-- /.card-info -->
				</div>
				<div class="cards cards-menu">
                    <product-card v-for="product in restaurant.products" :product="product" :key="product.id"></product-card>
					<!-- /.card -->
				</div>
				<!-- /.cards -->
			</section>
		</div>
		<!-- /.container -->
	</main>
</template>

<script>
    import restaurants from '@/assets/database/restaurants.json'
    import productCard from '@/components/cards/product-card.vue'
    export default{
        components: {
            productCard
        },
        metaInfo() {
            return { 
                title: `${this.restaurant.name} — доставка еды на дом`,
            }
        },
        data() {
            return{
                restaurants,
                restaurant: {}
            }
        },
        created() {
            this.restaurants.forEach(item => {
                if(item.slug === this.$route.params.slug) {
                    this.restaurant = item
                }
            });
        }
    }
</script>