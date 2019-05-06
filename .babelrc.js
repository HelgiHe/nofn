const isTest = String(process.env.NODE_ENV) === 'test';
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '60'
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    'syntax-dynamic-import',
    'transform-class-properties',
    'transform-object-rest-spread',
    'react-hot-loader/babel',
    '@babel/plugin-syntax-dynamic-import'
    // isTest ? 'dynamic-import-node' : null
  ].filter(Boolean)
};
