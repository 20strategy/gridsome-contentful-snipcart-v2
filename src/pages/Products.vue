<template>
  <Layout>
    <div class="container has-text-centered">
    <div class="columns is-multiline">
        <div
           v-for="edge in $page.products.edges"
          :key="edge.node.id"
          class="column is-4">
          <div class="card">
            <div class="card-image imagehovering">
              <figure class="image is-4by5">
               
               
               <g-link :to="edge.node.path"> <v-lazy-image
                  :src="edge.node.image.file.url"
               
                   :alt="edge.node.image.title" /></g-link> 
              </figure>
            </div>
            <div class="card-content is-centered">
              <div class="media">
                <div class="media-content">
                  <p class="title is-6 is-family-secondary is-uppercase">
                    {{ edge.node.title }}
                  </p>
                  <p class="subtitle is-6">
                   {{edge.node.price}}
                  </p>
                </div>
              </div>

            <!--  <div
                class="content"
                v-html="product.descriptionHtml" />  -->
              <div class="field is-centered ">
                <div class="">
                  <g-link
                    :to="edge.node.path"
                    class="button is-primary is-outlined"
                  >
                    View Product
                  </g-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </Layout>
</template>

<script>
export default {
  
}
</script>

<page-query>
 {
  products: allContentfulProduct{
    edges {
      node {
        id
        title
        slug
        price
        description1
        description2
        path
        date
        image {
          title
          file {
            url
          }
        }
      }
    }
  }
}

</page-query>

<style scoped>
.imagehovering:hover {
  transform: scale(1.01);

}
</style>