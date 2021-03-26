<template>
  <Layout>
    <div class="container has-text-centered">
    <div class="columns is-multiline">
        <div
           v-for="edge in $page.blogs.edges"
          :key="edge.node.id"
          class="column is-4">
          <div class="card">
            <div class="card-image imagehovering">
              <figure class="image is-4by5">
               <g-link :to="edge.node.path"> <v-lazy-image
                  :src="edge.node.picture1.file.url+`?h=350`"
               
                   :alt="edge.node.picture1.title" /></g-link>
              </figure>
            </div>
            <div class="card-content is-centered">
              <div class="media">
                <div class="media-content">
                  <p class="title is-6 is-family-secondary is-uppercase">
                    {{ edge.node.title }}
                  </p>
                  <p class="subtitle is-6">
                   $29.00
                  </p>
                </div>
              </div>

            <!--  <div
                class="content"
                v-html="product.descriptionHtml" />  -->
              <div class="field is-centered ">
                <div class="">
                  <g-link
                    :to="edge.path"
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
    props: {
        blogs: {
            type: Array,
            required: true
        }
    }
}
</script>

<page-query>
{
  blogs: allContentfulBlog{
    edges{
      node{
        id
        title
        excerpt
        slug
        author
        path
        picture1 {
          id
          title
          file{
            url
          }
          
        }
        description  
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