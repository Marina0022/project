<template>
    <div class="footer">
		<div class="container">
			<div class="footer-block">
				<router-link to="/">
					<img src="@/assets/img/icon/logo.svg" alt="logo" class="logo footer-logo" />
				</router-link>
				<nav class="footer-nav">
					<router-link to="/" class="footer-link">Ресторанам </router-link>
					<router-link to="/" class="footer-link">Курьерам</router-link>
					<router-link to="/" class="footer-link">Пресс-центр</router-link>
					<router-link to="/" class="footer-link">Контакты</router-link>
				</nav>
				<div class="social-links">
					<router-link to="/" class="social-link"><img src="@/assets/img/social/instagram.svg" alt="instagram" /></router-link>
					<router-link to="/" class="social-link"><img src="@/assets/img/social/fb.svg" alt="facebook" /></router-link>
					<router-link to="/" class="social-link"><img src="@/assets/img/social/vk.svg" alt="vk" /></router-link>
				</div>
				<!-- /.social-links -->
			</div>
			<!-- /.footer-block -->
		</div>
	</div>
</template>