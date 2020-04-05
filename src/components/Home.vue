<template>
  <div class="home">
    <img src="@/assets/img/undraw_collecting.svg" alt="" width="200">
    <div class="home__container">
      <div class="home__container--input"
        :class="focus ? 'focus' : textInput !== '' ? 'focus' : ''">
        <div class="input__icon">
          <i class="fas fa-search"></i>
        </div>
        <div class="input__bar">
          <h5>Search Github User</h5>
          <input type="text" 
            v-model="textInput"
            @input="debouncedOnInput()"
            @keyup.enter="onInput()"
            @focus="focus = !focus"
            @blur="focus = !focus">
        </div>
      </div>
      <div v-if="isLoadingUserRepositories" class="home__loading">
        <b-spinner></b-spinner>
        <strong>Loading...</strong>
      </div>
      <div v-else-if="errorUserRepositories" class="home__error mt-5">
        <img src="@/assets/img/undraw_empty.svg" alt="" width="200">
        <p>User Not Found</p>
      </div>
      <div class="home__container--repository" v-else-if="itemUserRepositories" role="tablist">
        <b-card no-body class="mb-2" v-for="(item, i) in itemUserRepositories" :key="item.id">
          <b-card-header header-tag="header" role="tab">
            <b-button block href="#" v-b-toggle="`accordion-${i}`" class="m-1" variant="info"
              @click="fetchMarkdown(item.name)">
              {{item.name}}
            </b-button>
          </b-card-header>
          <b-collapse :id="`accordion-${i}`" accordion="my-accordion" role="tabpanel">
            <b-card>
              <div v-if="isLoadingMarkdown" class="home__loading">
                <b-spinner></b-spinner>
                <strong>Loading...</strong>
              </div>
              <div v-else-if="errorMarkdown" class="home__error">
                <img src="@/assets/img/undraw_empty.svg" alt="" width="200">
                <p class="text-center">Markdown Document Not Found</p>
              </div>
              <vue-markdown v-else-if="itemMarkdown"
                class="markdown"
                :source = itemMarkdown>
              </vue-markdown>
            </b-card>
          </b-collapse>
        </b-card>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
import VueMarkdown from 'vue-markdown' // production

export default {
  name: 'Home',
  components: {
    VueMarkdown
  },
  data: function () {
    return {
      textInput: '',
      focus: false,
    }
  },
  computed: {
    ...mapGetters({
      // get user repository
      itemUserRepositories : 'github/itemUserRepositories',
      isLoadingUserRepositories : 'github/isLoadingUserRepositories',
      errorUserRepositories : 'github/errorUserRepositories',

      // get markdown
      itemMarkdown : 'github/itemMarkdown',
      isLoadingMarkdown : 'github/isLoadingMarkdown',
      errorMarkdown : 'github/errorMarkdown',
    }),
    // wait for input 
    debouncedOnInput() {
      return _.debounce(this.onInput, 3000);
    },
  },
  methods: {
    // dispatch GET_USER_REPOS
    fetchUserRepos(item) {
      this.$store.dispatch('github/GET_USER_REPOS', item)
    },
    // dispatch GET_MARKDOWN
    fetchMarkdown(item) {
      const textInput = this.textInput
      this.$store.dispatch('github/GET_MARKDOWN', { user: textInput, repository: item })
    },
    // set condition on input
    onInput() {
      if (!_.isEmpty(this.textInput)) {
        this.fetchUserRepos(this.textInput)
      } else {
        this.clearState()
      }
    },
    clearState() {
      this.$store.state.github.itemUserRepositories = {}
      this.$store.state.github.itemMarkdown = {}
    }
  },
  mounted() {
    this.clearState()
  }
}
</script>