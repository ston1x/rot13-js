var parsed_message = new Vue({
  data: {
    value: ''
  }
}
)

Vue.component('original-message', {
  props: ['value'],
  template: `
  <textarea
    rows=15
    cols=50
    id="input_message"
    placeholder="your original text goes here"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value); rot13($event.target.value)"
    >
  </textarea>
  `,
  methods: {
    rot13: function (message) {
      const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
      app.rot13_message = message.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13]);
    }
  }
})

Vue.component('output-message', {
  props: ['value'],
  template: `
  <textarea
    rows=15
    cols=50
    readonly
    id="output_message"
    placeholder="your output will be here"
    v-bind:value="value"
    >
  </textarea>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    name: 'rot13',
    rot13_message: ''
  }
})
