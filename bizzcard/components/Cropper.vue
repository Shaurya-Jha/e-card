<template>
    <div id="notificationContainer" class="flex justify-center fixed top-0 left-0 right-0 bottom-0 items-center z-30 bg-black bg-opacity-80">
        <div class="flex flex-col items-center notification content bg-gray-800 text-gray-100 rounded relative z-50 max-w-sm mx-4 p-2">
            <div class="mb-2 max-w-sm max-h-80">
                <img :src="src" alt="cropper image" ref="image">
            </div>

            <div class="flex">
                <!-- cancel button -->
                <button class="p-3 font-extrabold rounded tracking-wide focus:outline-none select-none bg-gray-700 mr-2 hover:bg-gray-600 focus:bg-gray-600 transition-colors duration-200" @click="$emit('closeCropper')">Cancel</button>

                <!-- crop picture button -->
                <button @click="cropPhoto" class="font-extrabold leading-none tracking-wide select-none shrink-0 p-3 text-white bg-emerald-600 rounded hover:bg-emerald-500 focus:bg-emerald-500 transition-colors duration-200 focus:outline-none">Crop</button>
            </div>
        </div>
    </div>
</template>

<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

export default {
    props: ['src','mime','content','resizeImage','type'],

    data() {
        return {
            cropper: {},
            dataURL: null,
            blobData: null,
            image: {},
        }
    },

    methods:{
        cropPhoto() {
            let vm = this;

            const canvas = this.cropper.getCroppedCanvas();

            let url = canvas.toDataURL(this.mime);
            this.content[this.type].url = url;
            this.content[this.type].mime = this.mime;

            canvas.toBlob((blob) => {
                vm.content[vm.type].blob = new File([blob], 'photo', {
                    type: this.mime,
                })

                vm.resizeImage(vm.type, vm.mime)
                vm.$emit('closeCropper')
            },
            this.mime,
            0.8
            )
        }
    },

    // called when DOM is rendered and reactive
    // called when vue app is initialized and mounted in the browser
    mounted() {
        this.image = this.$refs.image
        this.cropper = new Cropper(this.image, {
            // enable to zoom the image
            zoomable: false,

            // enable to scale the image
            scalable: false,

            // define the fixed aspect ratio of the crop box. By default, the crop box has a free ratio
            aspectRatio: this.type == 'photo' ? 1 : 3 / 2,

            // it should be a number between 0 and 1.
            // default is 0.8 = 80%
            // 1 = 100%
            autoCropArea: 1,

            // re-render the cropper when resizing the window
            responsive: true,

            // define the view of the cropper
            // if set to 0 - the crop box can extend outside the canvas
            // value of 1,2,3 = will restrict crop box to the size of the canvas
            viewMode: 2,

            // show the white modal above the crop box(hightlight the crop box)
            highlight: false,

            // enable to rotate the image
            rotatable: true
        })
    }
}
</script>