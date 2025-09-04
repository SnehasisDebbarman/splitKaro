module.exports = function (api) {
  const isTest = api.env("test");

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Required for expo-router
      "expo-router/babel",
      // Disable NativeWind Babel plugin during tests to avoid async PostCSS errors
      !isTest && "nativewind/babel",
    ].filter(Boolean),
  };
};
