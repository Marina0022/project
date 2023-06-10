<template>
	<div>
		<div class="container">
			<header class="header">
				<router-link to="/" class="logo">
					<img src="@/assets/img/icon/logo.svg" alt="Logo" />
				</router-link>
				<label class="address">
					<input type="text" class="input input-address" placeholder="Адрес доставки" />
				</label>
				<div class="buttons">
					<span class="user-name"></span>
					<button class="button button-primary button-auth" @click="openLoginModal">
						<span class="button-auth-svg"></span>
						<span class="button-text">Войти</span>
					</button>
					<button class="button button-cart" id="cart-button" @click="openBasketModal">
						<span class="button-cart-svg"></span>
						<span class="button-text">Корзина</span>
					</button>
					<button class="button button-primary button-out">
						<span class="button-text">Выйти</span>
						<span class="button-out-svg"></span>
					</button>
				</div>
			</header>
		</div>
		<login-modal v-if="loginModalVisibility" @closeModal="closeModal"></login-modal>
		<basket-modal v-if="basketModalVisibility" @closeModal="closeModal"></basket-modal>
	</div>
</template>

<script>
	import basketModal from '@/components/modals/basket.vue'
	import loginModal from '@/components/modals/login.vue'
	export default{
		components: {
			loginModal,
			basketModal
		},
		data(){
			return{
				loginModalVisibility: false,
				basketModalVisibility: false
			}
		},
		methods: {
			openLoginModal(){
				this.loginModalVisibility = true
				document.body.style.overflow = 'hidden'
			},
			closeModal(){
				this.loginModalVisibility = false
				this.basketModalVisibility = false
				document.body.style.overflow = 'auto'
			},
			openBasketModal() {
                this.basketModalVisibility = true
                document.body.style.overflow = 'hidden'
            },
		}
	}
</script>
 