<template>
  <Layout>
    <div class="container is-max-desktop">
      <div class="columns">
        <div class="column is-three-fifths">
          <figure class="image image is-4by5">
            <v-lazy-image
              :src="$page.post.picture1.file.url+`?h=550`"
             
              :alt="$page.post.title" />
          </figure>
          <br>
          <div class="columns">
     
          </div>
        </div>
        <div class="column is-two-fifths">
          <h3 class="title is-family-secondary">
            {{ $page.post.title }}
          </h3>
  <!--  **********************check from here   book mark   -***********-->
          <h5
            
            class="subtitle">
            $29.00
          </h5>
        
          <div      
            class="field">
            <div class="control">
              <label
              
                class="label">
             Color
                <div class="select is-fullwidth">
                  <select
                   
                    >
                    <option
                     >
                      Blue
                    </option>
                  </select>
                </div>
              </label>
            </div>
          </div>

                    <div      
            class="field">
            <div class="control">
              <label
              
                class="label">
             Size
                <div class="select is-fullwidth">
                  <select
                   
                    >
                    <option
                     >
                      Small
                    </option>
                  </select>
                </div>
              </label>
            </div>
          </div>
         
   







          <br>
          <div class="field is-grouped is-grouped-right">
            <div class="field has-addons is-fullwidth">
              <div class="control">
                <label
                  class="label"
                  for="quantity">
                  Quantity
                </label>
                <input
                  id="quantity"
                  
                  class="button input quantity"
                  type="number"
                  placeholder="Number">
              </div>
              <div class="add-to-cart">
                 <button 
                  class="button is-primary">
                  Add To Cart
                </button>
               
                
        
              </div>
            </div>
          </div>
          <br>
         
        </div>
      </div>
    </div>
   
      <div class="product-content has-text-centered mt-6"
           v-html="richTextToHTML($page.post.description)" />
  </Layout>
</template>

<page-query>
query ($id:ID!){
  post: contentfulBlog (id: $id) {
     id
     title
     picture1 {
      file{
        url
      }
    }
     description 
  }
}

</page-query>

<script>
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  methods: {
    richTextToHTML (content) {
      return documentToHtmlString(content, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return `<img src="${node.data.target.fields.file.url}?w=450" style="width:98%;max-width:600px;display:block;margin-right:auto;margin-left:auto;" alt="${node.data.target.fields.title}" />`
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.is-fullwidth {
  width: 100%;
  .control {
    width: 100%;
  }
}
.quantity {
  width: 100%;
  height: 50px;
}
.add-to-cart {
  display: flex;
  align-items: flex-end;
}
.product-content {
  max-width: 800px;
  width: 98%;
  margin-left:auto;
  margin-right:auto;
}
</style>
