<template>
    <div class="bottom-bar">
        <div class="floating-action-button-base">
            <aside>
                <div class="floating-action-button">
                    <router-link to="/asd">T</router-link>
                </div>
            </aside>
        </div>
        <div class="navigation">
            <nav>
                <router-link to="/about">Main</router-link>
            </nav>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.navigation {
    pointer-events: auto;
}

.floating-action-button-base {
    pointer-events: none;
}

.bottom-bar {
    position: fixed;
    z-index: 10;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
}

.navigation {
    height: $bottom-bar-height;
    background-color: rgb(0, 0, 0);
}

aside {
    position: relative;
    display: flex;
    flex-direction: column;
    pointer-events: none;
}

.floating-action-button {
    position: relative;
    bottom: 20px;
    right: 20px;
    align-self: flex-end;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: auto;
        width: 56px;
        height: 56px;
        min-width: 52px;
        min-height: 52px;
        outline-style: none;
        border-radius: 50%;
        border-color: rgb(83, 100, 113);
        transition-property: background-color, box-shadow;
        transition-duration: 0.2s;
        user-select: none;
        box-shadow: rgb(217 217 217 / 20%) 0px 0px 5px, rgb(217 217 217 / 25%) 0px 1px 4px 1px;
        cursor: pointer;
        background-color: rgb(29, 155, 240);
    }
}
</style>