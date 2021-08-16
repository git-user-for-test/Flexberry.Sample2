import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-sample-country', 'Unit | Model | new-platform-sample-country', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
