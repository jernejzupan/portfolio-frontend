<script setup>
import { computed } from 'vue'

const scaleStyle = computed(() => {

    const colorDark = getComputedStyle(document.documentElement)
        .getPropertyValue('--color-dark');

    const lineWidth = getComputedStyle(document.documentElement)
        .getPropertyValue('--line-width');

    const svg = [
        '<svg width="20" height="100" viewBox="0 0 20 100" xmlns="http://www.w3.org/2000/svg">',
        `<rect fill="${colorDark}" width="20" height="${lineWidth}" x="0" y="0"/>`,
        `<rect fill="${colorDark}" width="10" height="${lineWidth}" x="0" y="20"/>`,
        `<rect fill="${colorDark}" width="10" height="${lineWidth}" x="0" y="40"/>`,
        `<rect fill="${colorDark}" width="10" height="${lineWidth}" x="0" y="60"/>`,
        `<rect fill="${colorDark}" width="10" height="${lineWidth}" x="0" y="80"/>`,
        '</svg>'
    ].join('').replaceAll('#', '%23')

    return {
        'background-image': `url('data:image/svg+xml,${svg}')`
    }
})

</script>

<template>
    <div class="scale" :style="scaleStyle"></div>
</template>

<style>
.scale {
    width: var(--scale-segment-width-wide);
    height: 100%;
    border-bottom: var(--line-width) solid var(--color-dark);
}
</style>