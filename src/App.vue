<template>
  <v-app>
    <v-content>
      <EBookView/>
    </v-content>
  </v-app>
</template>

<script>
import EBookView from './views/EBookView';

export default {
  name: 'App',

  components: {
    EBookView
  },

  data: () => ({
    //
  }),
};
</script>
