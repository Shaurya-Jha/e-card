<template>
    <div class="mt-6 flex flex-col items-start">
        <div class="flex items-center">
            <div class="w-12 h-12 rounded mr-3 relative cursor-pointer transition-colors duration-200 focus:outline-none focus:ring ring-gray-200" tabindex="0" :style="{backgroundColor: colors[name].color}" @keydown.space.enter.esc.prevent="colors[name].openPalette = !colors[name].openPalette" @click.self="colors[name].openPalette = !colors[name].openPalette">
                <transition name="palette">
                <div class="absolute mt-14 ml-14 z-10" v-show="colors[name].openPalette" v-on-clickaway="() => closeColourPalette(name)">
                    <colorpicker theme="light" :color="colors[name].color" @changeColour="changeColour($event, name)"></colorpicker>
                </div>
                </transition>
            </div>

            <p>{{ label }}</p>
        </div>
    </div>
</template>
<script>
import colorpicker from '@@caohenghu/vue-colorpicker'
import { directive as onClickaway } from 'vue-clickaway2';

export default {
    components: {
        colorpicker,
    },

    directives: {
        onClickaway: onClickaway,
    },

    props: ['name','label','colors'],

    methods: {
        // change the color when picked from the colorpicker
        changeColour({hex}, name){
            this.colors[name].color = hex
        },

        // methods to close the colorpalette
        closeColourPalette(name) {
            this.colors[name].openPalette = false
        }
    }
}
</script>
<style lang="scss">
    
</style>