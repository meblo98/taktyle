<template>

    <div class="mb-5">
        <SideBar/>
    </div>
    <section>
        <Table/>
    </section>

</template>

<script>
import SideBar from '@/components/SideBar.vue';
import Table from '@/components/Table.vue';
export default {
    components: {
   SideBar,
   Table,
  },
}
</script>
