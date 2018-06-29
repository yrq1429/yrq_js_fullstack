<template>
    <div class="el-radio-group" role="radiogroup" @keydown="handleKeydown">
        <slot />
    </div>
</template>

<script>
import EleRadio from '@/components/EleRadio'
export default {
    data() {
        return {

        }
    },
    methods: {
        handleKeydown() {

        }
    },
    prop: {
        value: String
    }

}
</script>

<style>

</style>
