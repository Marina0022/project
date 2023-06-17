<template>
	<div class="modal modal-cart">
		<div class="modal-dialog">
			<div class="modal-header">
				<h3 class="modal-title">Корзина</h3>
				<button class="close" @click="$emit('closeModal')">&times;</button>
			</div>
			<!-- /.modal-header -->
			<div class="modal-body">
				<!-- /.foods-row -->
				<div class="food-row" v-for="(product, index) in basketProducts" :key="product.id + index">
					<span class="food-name">{{ product.name }}</span>
					<strong class="food-price">{{ product.price }} ₽</strong>
					<div class="food-counter">
						<button class="counter-button" @click="minus(product)">-</button>
						<span class="counter">{{ product.quantity }}</span>
						<button class="counter-button" @click="plus(product)">+</button>
					</div>
				</div>
				<!-- /.foods-row -->
			</div>
			<!-- /.modal-body -->
			<div class="modal-footer">
				<span class="modal-pricetag">{{ totalPrice }} ₽</span>
				<div class="footer-buttons">
					<button class="button button-primary" @click="$emit('closeModal')">Оформить заказ</button>
					<button class="button clear-cart" @click="$emit('closeModal')">Отмена</button>
				</div>
			</div>
			<!-- /.modal-footer -->
		</div>
		<!-- /.modal-dialog -->
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	export default{
		data(){
			return{
			} 
		},
		computed:{
			...mapGetters(['basketProducts']),
			totalPrice(){
				let totalPrice = 0
				this.basketProducts.forEach(item => {
					totalPrice += item.price * item.quantity
				});
				return totalPrice
			},
		},
		methods: {
			...mapActions(['minusQuantity', 'plusQuantity']),
			minus(product) {
				this.minusQuantity(product)
			},
			plus(product) {
				this.plusQuantity(product)
			}
		}
	}
</script>
