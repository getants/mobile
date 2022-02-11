const { getDefaultConfig } = require('expo/metro-config');

// this one does not work
// const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts.push('cjs');

module.exports = defaultConfig;

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
//   resolver: {
//     ...defaultResolver,
//     sourceExts: [...defaultResolver.sourceExts, 'cjs'],
//   },
// };
