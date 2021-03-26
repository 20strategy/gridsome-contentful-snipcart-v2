<template>
  <Layout>
    <div class="container is-max-widescreen">    
        <div class="columns">
          <div class="column is-two-fifths header">
            <div class="header-content">
              <h1 class="title is-size-2 is-family-secondary">
                Walk and Play ♬
              </h1>
              <div class="content"> 
                <p>You love your puppy and you love your walk. Walking will bring your dog and you closer everyday. Let's make walking more pleasant.</p>
              </div>
              <g-link
                to="/about"
                class="button is-primary is-outlined">
                Shop Now
              </g-link>
            </div>
          </div>
          <div class="column is-three-fifth">
            <figure class="image">
              <g-image
                src="https://images.ctfassets.net/80g45033v4tf/63IDbt2v0lBynjVg9QTQDh/d554fa5d4df1e71957d77a9369a151c8/homepage-image.webp"
          
                alt="A model is holding a puppy" />
            </figure>
          </div>
        
      </div>
    </div>
    <br>
    <br>

    <!-- *****************8  divider  **********************************8-->
    <div class="container is-max-widescreen has-text-centered">
      <hr>
      <h3 class="title is-size-4 is-family-secondary">
        Featured Blogs
      </h3>
      <hr>
      <br>
      <div class="columns is-multiline">
        <div
          v-for="edge in $page.blogs.edges"
          :key="edge.node.id"
          class="column is-4 imagehovering">
          <div class="card ">
            <div class="card-image ">
              <figure class="image is-4by5">
                <g-link :to="edge.node.path">
                  <v-lazy-image
                  :src="edge.node.picture1.file.url+`?h=500`"
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
                    {{edge.node.excerpt}}
                  </p>
                </div>
              </div>
              <div class="field is-centered">
                <div class="">
                  <g-link
                    :to="edge.node.path"
                    class="button is-primary is-outlined ">
                    Read More
                  </g-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
     <Subscribe/>
    </div>
    
  </Layout>
</template> 

<page-query>
{
  blogs: allContentfulBlog (limit:6){
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


<script>


import Subscribe from "@/components/Subscribe"
export default {
  components:{
    Subscribe,
  },
  metaInfo: {
    title: 'puppyous.com'
  },

}
</script>



<style  lang="scss"scoped>
.header {
  align-items: center;
  display: flex;}
.header-content {
    text-align: center;
  }
.imagehovering:hover {
  transform: scale(1.01);
  

}

</style>
