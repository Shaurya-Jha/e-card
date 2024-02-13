<template>
    <div class="media" :style="{backgroundColor: `${colors.cardBg.color}`}">

        <!-- get image -->
        <img :src="PreviewMode ? product.image.dataURI : `./media/${getTitle(product.image.title)}.${product.image.ext}`" alt="product image">

        <div class="controls cardColor prodInfo">
            <!-- show product title -->
            <p class="title">{{ product.title }}</p>

            <!-- show product description -->
            <p  v-if="product.description" class="sub">{{ product.description }}</p>

            <!-- show product price if the price value exists or is available -->
            <p v-if="product.price" class="price">{{ product.price }}</p>

            <a :href="product.link" v-if="product.label" class="label" :style="{backgroundColor: `${colors.buttonBg.color}`, lineHeight: PreviewMode ? 'inherit' : '1.5rem'}" target="_blank">
                <p class="iconColor">{{ product.label }}</p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['product','colors','PreviewMode'],

        methods: {
            getTitle(e) {
                return e.toLowerCase().split(' ').join('_')
            }
        }
    }
</script>