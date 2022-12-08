module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    // {
    //   name: 'storybook-addon-sass-postcss',
    //   options: { rule: { test: /\.(scss|sass)$/i, }, }
    // },
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.module.rules.find(
      (rule) => rule.test.toString() === "/\\.css$/"
    ).exclude = /\.scss$/;

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    return config;
  },
};
