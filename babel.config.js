module.exports = function (api) {
  const isTest = api.env('test');
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      // Only enable nativewind outside of test to avoid PostCSS async issues in Jest
      ...(!isTest ? ["nativewind/babel"] : []),
    ],
  };
};
