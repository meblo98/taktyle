<template>
    <div class="testimonial p-4 bg-gray-100 shadow-md">
        <img :src="photo" alt="Photo du client" class="rounded-full w-16 h-16 mx-auto">
        <p class="mt-4 italic">"{{ text }}"</p>
        <p class="text-sm text-gray-600 mt-2">— {{ name }}</p>
    </div>
</template>

<script>
export default {
    props: {
        photo: String,
        text: String,
        name: String,
    },
};
</script>

<style scoped>
.testimonial {
    border-radius: 10px;
}
</style>