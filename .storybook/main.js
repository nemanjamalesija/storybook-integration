

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "docs": false
      }
    },
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  }
};
export default config;
