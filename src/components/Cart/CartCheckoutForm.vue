<template>
  <form @submit.prevent="checkout">
   
  </form>
</template>

<script>
// Packages
import gql from 'graphql-tag'

export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({ email: '' }),
  async mounted () {
    if (this.$store.getters.isAuthenticated) {
      const { data } = await this.$apollo.query({
        query: gql`query CustomerDetails ($accessToken: String!) {
          customer (customerAccessToken: $accessToken) {
            id
            email
          }
        }`,
        variables: { accessToken: this.$store.getters.accessToken }
      })
      if (data && data.customer) {
        this.email = data.customer.email
      }
    }
  },
  methods: {
    checkout () {
      this.$emit('checkout', this.email)
    }
  }
}
</script>
