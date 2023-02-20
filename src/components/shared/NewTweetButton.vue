<template>
    <div class="new-tweet-btn" :class="{ 'icon': isBtnIcon || isInNavigationSection && !isMediaLtLg }">
        <router-link to="/">
            <div v-if="isBtnIcon || isInNavigationSection && !isMediaLtLg">
                <IconNewTweet />
            </div>
            <div v-else>
                <span>Tweetle</span>
            </div>
        </router-link>
</div>
</template>

<script setup>
import { useMedia } from '@/js/helpers/window-context.js'
import IconNewTweet from '../icons/IconNewTweet.vue';

const isMediaLtLg = useMedia("lt-lg");

const props = defineProps({
    isBtnIcon: {
        type: Boolean,
        default: false
    },
    isInNavigationSection: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped lang="scss"></style>