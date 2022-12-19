<template>
  <div class="flex flex-col justify-center mt-10" v-if="document">
    <div
      class="w-7/12 flex border border-slate-300 p-4 rounded-lg mx-auto mt-9"
      v-for="(post_item, index) in document.data.post"
      :key="index"
    >
      <div>
        <PrismicImage :field="post_item.post_image" />
      </div>

      <div class="col-span-3 p-6">
        <PrismicRichText :field="post_item.post_body" />
        <br />
        <PrismicText :field="post_item.post_heading" class="text-xl" />
        <br />
        <p>{{ post_item.first_publication_date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID("post", params.uid);

    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
