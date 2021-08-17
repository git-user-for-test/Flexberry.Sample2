import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-sample-language', 'Unit | Serializer | new-platform-sample-language', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:new-platform-sample-language',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:new-platform-sample-author',
    'model:new-platform-sample-book',
    'model:new-platform-sample-country',
    'model:new-platform-sample-language',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
