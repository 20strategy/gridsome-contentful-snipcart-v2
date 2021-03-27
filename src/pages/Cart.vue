<template>
  <Layout>
    <div class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h3 class="title is-family-secondary">
            Cart
          </h3>
        </div>
      </div>
    </div>
    <div class="container cart">
      
      <br>
    
      
    </div>
  </Layout>
</template>

<script>
// Packages
import gql from 'graphql-tag'
// Components


export default {
  metaInfo: {
    title: 'Your Cart'
  },

  data: () => ({ isLoading: false }),
  computed: {
    cart () { return this.$store.state.cart }
  },
  methods: {
    async checkout (email) {
      if (!this.cart.length) return alert('No items in cart')
      const lineItems = this.cart.map(item => ({ quantity: item.qty, variantId: item.variantId }))

      const checkoutInput = { email, lineItems }

      try {
        this.isLoading = true
        const { data: { checkoutCreate } } = await this.$apollo.mutate({
          mutation: gql`mutation checkoutCreate($input: CheckoutCreateInput!) {
            checkoutCreate(input: $input) {
              checkout {
                id
                webUrl
              }
              checkoutUserErrors {
                
               
              }
            }
          }`,
          variables: { input: checkoutInput }
        })
        if (checkoutCreate.checkoutUserErrors.length) throw new Error(checkoutCreate.checkoutUserErrors[ 0 ].message)

        window.location = checkoutCreate.checkout.webUrl
      } catch (error) {
        this.isLoading = false
      
       
      }
    }
  }
}
</script>


