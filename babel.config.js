module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@assets': './src/assets',
          '@pages': './src/pages',
          '@config': './src/config',
          '@store': './src/store',
          '@axios': './src/axios',
          '@translations': './src/translations',
          '@navRef': './src/navigationRef',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
