<template>
  <nav class="flex justify-center space-x-16 border-y border-gray-500 mt-16">
    <ul v-if="document" class="flex justify-cente w-7/12">
      <li
        v-for="(menu_link, index) in document.data.menu_links"
        :key="index"
        class="px-10 py-6 text-black hover:bg-gray-500 hover:text-white border border-gray-500"
      >
        <NuxtLink :to="{ path: $prismic.asLink(menu_link.link) }">
          <PrismicRichText :field="menu_link.link_label" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      document: null,
    };
  },
  async fetch() {
    this.document = await this.$prismic.api.getSingle("menu");
  },
};
</script>
