module.exports = {
  name: 'cards-list',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/cards-list',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
