<template>
    <div class="flex mt-6">
        <transition name="list">
            <Cropper v-if="showCropper" :src="tempURL" @closeCropper="closeCropper" :content="content" :mime="mime"
                :type="filetype" :resizeImage="resizeImage" />
        </transition>

        <div class="flex flex-wrap items-center">
            <img :src="content[type].url"
                :title="`${type == 'logo' ? 'Brand logo' : type == 'photo' ? 'Card holder\'s photo' : 'Cover Image'}`"
                alt="" class="w-12 h-12 rounded object-contain" v-if="imageAttached">

            <!-- button component -->
            <button v-if="!imageAttached"
                class="p-3 rounded bg-gray-700 cursor-pointer hover:bg-gray-600 focus:bg-gray-600 transition-colors duration-200 focus:outline-none"
                @click="attachFile(null, type, false)"
                :class="dragOver ? `bg-gray-900 outline-white` : `bg-gray-700 border-none`" :aria-label="label"
                @drop.prevent="attachFile($event, type, true)" @dragleave.prevent.self="dragOver = false"
                @dragover.prevent.self="dragOver = true">
                <!-- add file - logo / header -->
                <input type="file" :ref="`import${type}`"
                    :accept="`.png, .jpg, .jpeg, .gif, .webp${type == 'logo' || type == 'cover' ? ',.svg' : ''}`"
                    v-show="false" @change="fileLoaded($event, type, false)" @click="$event.target.files = null">

                <!-- add icon svg -->
                <div class="w-6 h-6 pointer-events-none" v-html="require(`~/assets/icons/add.svg?include`)"></div>
            </button>

            <p v-if="!imageAttached" class="ml-3 leading-none">
                {{ label }}
                <span class="text-sm text-gray-400"><br>{{ description }}</span>
            </p>

            <button v-else
                class="p-1 m-2 shrink-0 focus:outline-none rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200"
                @click="content[type].url = null" :aria-label="`Remove ${type}`" :title="`Remove ${type}`">
                <div class="w-6 h-6" v-html="require(`~/assets/icons/x.svg?include`)"></div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'content',
        'type',
        'label',
        'description',
        'resizeImage',
        'showAlert',
    ],

    data() {
        return {
            dragOver: false,
            showCropper: false,
            tempURL: null,
            mime: null,
            filetype: null
        }
    },

    computed: {
        imageAttached() {
            return this.content[this.type].url ? true : false
        }
    },

    methods: {
        // close the image cropper
        closeCropper() {
            this.showCropper = false
        },

        // attach the file
        attachFile(e, type, dropped) {
            dropped ?
                (this.fileLoaded(e, type, true), (this.dragOver = false))
                : this.$refs[`import${type}`].click()
        },

        // file loaded method
        fileLoaded(e, type, dropped) {
            if ((dropped && e.dataTransfer.files.length) || (!dropped && e.target.files.length)) {
                let file = dropped ? e.dataTransfer.files[0] : e.target.files[0]
                let mime = file.type

                if ((type == 'logo' || type == 'cover') && file.type.match(/image\/(svg\+xml|png|jpeg|gif|webp))/)) {
                    this.imageLoaded(file, type, mime)
                } else if (file.type.match(/image\/(png | jpeg | gif | webp)/)) {
                    this.imageLoaded(file, type, mime)
                } else {
                    if (type == 'logo' || type == 'cover') {
                        this.showAlert('Unsupported file format.\nOnly jpeg, png, webp, gif and svg file can be attached')
                    } else {
                        this.showAlert('Unsupported file format.\nOnly jpeg, png, webp and gif file can be attached')
                    }
                }
            }
        },

        // image loaded
        imageLoaded(file, type, mime) {
            console.log(type, mime);

            let reader = new FileReader()
            reader.onload = (f) => {
                let dataURI = f.target.result
                let ext = dataURI
                    .split(',')[0]
                    .split(':')[1]
                    .split('/')[1]
                    .match(/^\w+/g)[0]

                if (type == 'logo' || mime.match(/svg|gif|webp/)) {
                    this.content[type] = {
                        url: dataURI,
                        blob: file,
                        ext,
                        mime,
                        resized: file
                    }

                    if (!mime.match(/svg|gif|webp/)) this.resizeImage(type, mime)
                } else {
                    this.content[type].ext = ext
                    this.filetype = type
                    this.mime = mime
                    this.tempURL = dataURI
                    this.showCropper = true
                }
            }

            reader.readAsDataURL(file)
        }
    }
}
</script>