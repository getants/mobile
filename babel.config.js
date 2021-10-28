module.exports = function(api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ["./"],
          alias: {
            '@/components': './components',
            '@/utils': './utils',
          }
        }
      ],
    ]
  };
};
