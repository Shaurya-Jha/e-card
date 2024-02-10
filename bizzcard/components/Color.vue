
import type { Color } from '#build/components';

import type { Color } from '#build/components';
<!-- html -->
<template>
    <div class="mt-6 flex items-start">
        <div class="flex items-center">
            <div class="w-12 h-12 rounded mr-3 relative cursor-pointer transition-colors duration-200 focus:outline-none focus:ring ring-gray-100">
                <h3>Pick a color</h3>
                <ColorPicker v-bind="selectedColor" @onclick="(e) => e.EventTarget.toValue" />
            </div>
        </div>
    </div>
</template>

<!-- js -->
<script>
import ColorPicker from 'primevue/colorpicker';
export default {
    props: [
        'selectedColor'
    ],

    setup(props) {
        console.log(props.selectedColor);
    }
}

console.log(this.selectedColor);
</script>

<!-- css -->
<style lang="">
    
</style>