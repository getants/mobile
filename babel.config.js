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
            '@/assets': './assets',
            '@/components': './components',
            '@/screens': './screens',
            '@/stacks': './stacks',
            '@/utils': './utils',
          }
        }
      ],
    ]
  };
};
