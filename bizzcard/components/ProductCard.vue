<template>
    <div class="flex items-center mt-2">
        <!-- drag cursor button -->
        <button class="p-1 shrink-0 focus:outline-none drag cursor-move" tabindex="-1">
            <div class="w-6 h-6" v-html="require(`~/assets/icons/drag.svg?include`)"></div>
        </button>

        <!-- image container button -->
        <div class="flex flex-col items-center bg-gray-700 rounded p-2">
            <div class="flex items-center w-full">
                <div id="imageContainer" class="mr-2 shrink-0">
                    <img :src="item.image.dataURI" :alt="item.image.title" class="w-12 h-12 object-contain shrink-0 border-2 rounded p-1 border-gray-700 transition-colors duration-200 hover:border-red-600 cursor-pointer" v-if="item.image && item.image.dataURI" title="Click to remove product image" @click="removeImage(i)" @keypress.space.enter.prevent="removeImage(i)" tabindex="0">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['i','index','item','featured','showAlert','resizeImage'],

    data() {
        return {
            dragOver: false
        }
    },

    methods: {
        removeImage(i) {
            this.featured[this.index].content[i].image = null
        },

        removeItem(i) {
            this.featured[this.index].content.splice(i, 1)
        }
    }
}
</script>