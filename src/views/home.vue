<template>
	<main class="main">
		<div class="container">
			<section class="container-promo">
        <carousel :autoplay="true" :perPage="1" :paginationEnabled="false" :loop="true">
          <slide v-for="item in promos" :key="item.id">
            <section class="promo"  :class="item.class">
              <h1 class="promo-title" v-html="item.title"></h1>
              <p class="promo-text">{{ item.description }}</p>
            </section>
          </slide>
        </carousel>
			</section>
			<section class="restaurants">
				<div class="section-heading">
					<h2 class="section-title">Рестораны</h2>
					<label class="search">
						<input type="text" class="input input-search" placeholder="Поиск блюд и ресторанов" />
					</label>
				</div>
				<div class="cards cards-restaurants">
          <restaurant-card v-for="(item, index) in restaurants" :key="index" :restaurant="item"></restaurant-card>
				</div>
				<!-- /.cards -->
			</section>
		</div>
		<!-- /.container -->
	</main>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import restaurantCard from '@/components/cards/restaurant-card.vue'
import promos from '@/assets/database/promos.json'
import restaurants from '@/assets/database/restaurants.json'

export default{
  components: {
    Carousel,
    Slide,
    restaurantCard
  },
  metaInfo() {
    return { 
      title: 'Delivery Food — доставка еды на дом',
    }
  },
  data(){
    return {
      promos,
      restaurants
    }
  }
}
</script>
