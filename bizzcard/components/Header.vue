
<template>
    <div>
        <div class="flex flex-col justify-center px-4 py-2 my-3">
            <!-- title -->
            <h2 class="capitalize text-lg mb-2">header attachments</h2>

            <div class="flex my-2">
                <!-- buttons -->
                <Button label="+" class="px-4 py-1 bg-black text-white" />
                <div class="flex flex-col">
                    <p class="ml-4">Add logo</p>
                    <p class="ml-4 text-sm">suggested format: svg, png or gif</p>
                </div>
            </div>

            <div class="flex my-2">
                <!-- buttons -->
                <Button label="+" class="px-4 py-1 bg-black text-white" />
                <div class="flex flex-col">
                    <p class="ml-4">Add cover photo</p>
                    <p class="ml-4 text-sm">suggested format: svg, jpeg, png or gif</p>
                </div>
            </div>

            <InputText value="Recommended cover photo size is 960 x 640 pixels, with an aspect ratio of 3:2" disabled="true"
                class="mx-4 py-3 px-2 text-center my-4" />
        </div>

        <div class="flex flex-col justify-center px-4 py-2">
            <!-- contact information -->
            <h2 class="capitalize text-lg mb-2">contact information</h2>

            <div class="flex my-2">
                <!-- buttons -->
                <Button label="+" class="px-4 py-1 bg-black text-white" />
                <div class="flex flex-col">
                    <p class="ml-4">Add profile photo</p>
                    <p class="ml-4 text-sm">suggested format: jpeg, png or gif</p>
                </div>
            </div>

            <InputText value="Recommended profile photo size is 320 x 320 pixels, with an aspect ratio of 1:1"
                disabled="true" class="mx-4 py-3 px-2 text-center my-4" />
        </div>
    </div>
</template>


<script>

// primevue components import
import Button from 'primevue/button'
import InputText from 'primevue/inputtext';


export default {
    components: {
        Button,
        InputText
    }
}
</script>


<style></style>