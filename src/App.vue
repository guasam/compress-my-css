<template>
  <textarea v-model="inputCss"></textarea>
  <br />
  <button @click="doCompress">Submit</button>
  <fieldset>
    <div>
      <input type="checkbox" v-model="config.endSemicolon" />
      Remove Ending Semicolon ({{ config.endSemicolon }})
    </div>
    <div>
      <input type="checkbox" v-model="config.stacked" />
      Stacked Lining ({{ config.stacked }})
    </div>
    <div>
      <input type="checkbox" v-model="config.spacedSelector" />
      Spaced Selector ({{ config.spacedSelector }})
    </div>
    <div>
      <input type="checkbox" v-model="config.comments" />
      Remove Comments ({{ config.comments }})
    </div>
    <div>Input Bytes : {{ inputBytes }}, Output Bytes : {{ outputBytes }}, Savings : {{ savings }}%</div>
  </fieldset>
  <br />
  <pre v-text="outputCss"></pre>
</template>

<script>
import { sampleInputCss } from "./utils/samples";

export default {
  name: "App",
  components: {},
  data() {
    return {
      config: {
        comments: true,
        spacedSelector: true,
        endSemicolon: false,
        stacked: false,
      },
      inputBytes: 0,
      outputBytes: 0,
      savings: 0,
      inputCss: sampleInputCss.trim(),
      outputCss: "",
    };
  },
  updated() {
    this.doCompress();
  },
  methods: {
    doCompress() {
      const { outputCss, inputCss, config } = this;

      let css = inputCss;

      // Remove newlines
      css = css.replace(/(\r\n|\n|\r|\t)/gm, "");

      // Remove whitespaces around parantheses
      css = css.replace(/\s+{/gm, "{");
      css = css.replace(/\{\s+/gm, "{");
      css = css.replace(/\s+\}/gm, "}");

      // Remove whitespaces around colon
      css = css.replace(/\s+:/gm, ":");
      css = css.replace(/:\s+/gm, ":");

      // Remove whitespaces around semicolon
      css = css.replace(/\s+;/gm, ";");
      css = css.replace(/;\s+/gm, ";");

      // Newline after closing parantheses
      if (config.stacked) {
        css = css.replace(/}/gm, "}\r\n");

        // Newline between ;|@ to make @rules neat
        css = css.replace(/\;\@/gm, ";\r\n@");
      }

      // Whitespace before opening parantheses
      if (config.spacedSelector) {
        css = css.replace(/{/gm, " {");
      }

      // Remove ending semicolon
      if (config.endSemicolon) {
        css = css.replace(/;}/gm, "}");
      }

      // Remove comments
      if (config.comments) {
        css = css.replace(/\/\*.+\*\//gm, "");
      }

      // Set Data
      this.inputBytes = new TextEncoder().encode(inputCss).length;
      this.outputBytes = new TextEncoder().encode(css).length;
      this.savings = (100 - (this.outputBytes / this.inputBytes) * 100).toFixed(2);
      this.outputCss = css;
    },
  },
};
</script>
