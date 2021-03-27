<template>
    <button class="button">
        <slot />
    </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../styles/abstracts/variables';

.button {
    color: $text_light;
    outline: none;
    border: 2px solid $text_primary_dark;
    background: none;
    padding: 1rem;
    border-radius: 40px;
    font-size: 2rem;
    cursor: pointer;
    transition: 330ms;

    display: flex;
    justify-content: center;
    align-items: center;
}

.button:hover {
    background: $text_primary_dark;
    transform: scale(1.1);
}

.button:active {
    box-shadow: 1em 1em 2em rgba(0,0,0,3.69);
}


</style>