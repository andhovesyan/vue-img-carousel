<template>
<layout>
  <h1 class="text-center">Contact Us</h1>
  <form class="contact-form mx-auto" action="/" method="post">
    <fieldset class="form-group">
      <label for="">Name</label>
      <input
        type="text"
        class="form-control"
        :value="name"
        @input="(e) => setName(e.target.value)"
      >
    </fieldset>
    <fieldset class="form-group">
      <label for="">Email</label>
      <input
        type="email"
        class="form-control"
        :value="email"
        @input="(e) => setEmail(e.target.value)"
      >
    </fieldset>
    <fieldset class="form-group">
      <label for="">Message</label>
      <textarea
        type="text"
        class="form-control"
        :value="message" 
        @input="(e) => setMessage(e.target.value)"
      />
    </fieldset>
    <fieldset class="form-group">
      <button type="button" class="btn btn-block btn-primary">Send</button>
    </fieldset>
  </form>
</layout>
</template>

<script>
import Layout from '@/layouts/default';
import {
  mapGetters,
  mapMutations,
} from 'vuex';

export default {
  components: {
    Layout,
  },
  computed: {
    ...mapGetters({
      name: 'contact/name',
      email: 'contact/email',
      message: 'contact/message',
    }),
  },
  methods: {
    ...mapMutations({
      setName: 'contact/SET_NAME',
      setEmail: 'contact/SET_EMAIL',
      setMessage: 'contact/SET_MESSAGE',
    }),
  },
};
</script>
<style>
  .contact-form {
    max-width: 400px;
  }
</style>
