<template>
    <div class="mediaC">
        <video v-show="type == 'video'" disablePictureInPicture class="source" :controls="!PreviewMode" preload="metadata"
            :style="{ pointerEvents: PreviewMode ? 'none' : 'auto' }" ref="mediaSource" @timeupdate="updateSeek()"
            controlsList="nodownload nofullscreen noremoteplayback">
            <source :src="PreviewMode ? media.dataURI + `#t=0.2` : `./media/${getTitle(media.title)}.${media.ext}`">
        </video>

        <!-- cover image section -->
        <img :src="PreviewMode ? media.coverDataURI : `./media/${getTitle(media.title)}.${media.coverExt}`" alt="cover">

        <!-- card color section -->
        <div class="controls cardColor">
            <p class="title">{{ media.title }}</p>

            <p class="sub" v-if="media.artist">
                <span>{{ media.artist }}</span>
                <span v-if="media.album"> - {{ media.album }}</span>
            </p>

            <!-- media controls -->
            <div class="pCtrl" ref="pCtrl" :style="{ display: PreviewMode ? 'flex' : 'none' }">
                <output class="currentTime sub" ref="bubble">00:00</output>

                <a class="playPause" :style="{ backgroundColor: `${colors.buttonBg.color}` }"
                    @click="togglePlay($refs.mediaSource)">
                    <!-- play option -->
                    <div class="icon play iconColor" ref="play" v-html="require(`~/assets/icons/play.svg?include`)"></div>

                    <!-- pause option -->
                    <div class="icon pause iconColor" ref="pause" v-html="require(`~/assets/icons/pause.svg?include`)">
                    </div>
                </a>

                <!-- seekbar for the player -->
                <input type="range" value="0" class="seekBar seekbarColor" @change="setProgress($event)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['media', 'type', 'colors', 'PreviewMode', 'togglePlay'],

    // methods
    methods: {
        // get the title for the media file
        getTitle(e) {
            return e.toLowerCase().split(' ').join('_')
        },

        // set the progress of the seekbar as the video plays
        setProgress() {
            let mediaSource = this.$refs.mediaSource
            let time = mediaSource.duration * (e.target.value / 100)
            mediaSource.currentTime = time
        },

        // function to update the time in the seekbar
        updateSeek() {
            let mediaSource = this.$refs.mediaSource
            let timenow = mediaSource.currentTime
            let seekbar = this.$refs.seekbar
            let bubble = this.$refs.bubble
            let value = (100 / mediaSource.duration) * timenow
            seekbar.value = value

            // minutes
            let m = Math.floor(timenow / 60)
            // seconds
            let s = Math.floor(timenow % 60)
            if (m.toString().length < 2) {
                m = '0' + m
            }

            if (s.toString().length < 2) {
                s = '0' + s
            }

            // counter to show on the seekbar
            bubble.value = m + ':' + s

            if (value == 100) {
                this.isPlaying = false
                seekbar.value = 0
                this.$refs.play.style.display = 'block'
                this.$refs.pause, style.display = 'none'
            }
        }

    }
    ,
    mounted() {
        this.$refs.pCtrl.style.display = 'flex'
    }
}
</script>

<style></style>