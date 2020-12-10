<template>
  <div><label class="GLabel">Input CSS Code</label></div>
  <textarea v-model="inputCss"></textarea>

  <div class="GConfig">
    <div class="GConfigControls">
      <div>
        <button @click="doCompress" class="GButton">Submit CSS</button>
      </div>
      <div class="FieldCheckBox">
        <input type="checkbox" v-model="config.endSemicolon" />
        Remove Ending Semicolon ({{ config.endSemicolon }})
      </div>
      <div class="FieldCheckBox">
        <input type="checkbox" v-model="config.stacked" />
        Stacked Lining ({{ config.stacked }})
      </div>
      <div class="FieldCheckBox" v-if="config.stacked">
        <input type="checkbox" v-model="config.indent" />
        Indent Props ({{ config.indent }})
      </div>
      <div class="FieldCheckBox">
        <input type="checkbox" v-model="config.spacedSelector" />
        Spaced Selector ({{ config.spacedSelector }})
      </div>
      <div class="FieldCheckBox">
        <input type="checkbox" v-model="config.comments" />
        Remove Comments ({{ config.comments }})
      </div>
    </div>
    <div class="GConfigReport">
      <section>
        <div class="GConfigReportItem">
          <div class="GConfigReportItem__value">{{ inputBytes }}</div>
          <div class="GConfigReportItem__title">Input Bytes</div>
        </div>
        <div class="GConfigReportItem">
          <div class="GConfigReportItem__value">{{ outputBytes }}</div>
          <div class="GConfigReportItem__title">Output Bytes</div>
        </div>
        <div class="GConfigReportItem">
          <div class="GConfigReportItem__value">
            {{ savings }}<span class="percent">%</span>
          </div>
          <div class="GConfigReportItem__title">Total Saving</div>
        </div>
      </section>
    </div>
  </div>

  <br />

  <div v-if="outputCss">
    <br />
    <div><label class="GLabel">Output CSS</label></div>
    <textarea v-model="outputCss" readonly></textarea>
  </div>
</template>

<script>
//import { sampleInputCss } from "./utils/samples";

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
        indent: false,
      },
      inputBytes: 0,
      outputBytes: 0,
      savings: 0,
      // inputCss: sampleInputCss.trim(),
      inputCss: "",
      outputCss: "",
      submitted: false,
    };
  },
  updated() {
    if (this.submitted) this.doCompress();
  },
  methods: {
    applyIndent(css) {
      // Extract rules from css
      const rules = css.match(/\{.+?\}/gm);

      // Loop through every rule
      rules.forEach((r, index) => {
        // Remove parantheses, semicolon splitting and clear empty
        let props = r.slice(1, -1).split(";").filter(Boolean);

        // Loop through properties
        props = props
          .map((p, index) => {
            let indented = "";

            // Remove ending semicolon if needed
            if (this.config.endSemicolon && index === props.length - 1) {
              indented = `\t${p}\n`;
            } else {
              indented = `\t${p};\n`;
            }

            // Apply props newline
            if (index === 0) indented = "\n" + indented;
            return indented;
          })
          .join(" ");

        // Replace css
        css = css.replace(r, `{${props}}`);
      });

      return css;
    },
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

      // Apply Indent
      if (config.indent) {
        css = this.applyIndent(css);
      }

      // Set Data
      this.inputBytes = new TextEncoder().encode(inputCss).length;
      this.outputBytes = new TextEncoder().encode(css).length;
      this.savings = (100 - (this.outputBytes / this.inputBytes) * 100).toFixed(
        2
      );
      this.submitted = true;
      this.outputCss = css;
    },
  },
};
</script>
