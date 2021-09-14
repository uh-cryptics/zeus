import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/StuffCollection.js';
import { Inventorys } from '../../api/inventory/InventoryCollection';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.define(data);
}

/** Initialize the collection if empty. */
if (Stuffs.count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

function addInventory(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Inventorys.define(data);
}

/** Initialize the collection if empty. */
if (Inventorys.count() === 0) {
  if (Meteor.settings.medicationSample) {
    console.log('Creating default data.');
    Meteor.settings.medicationSample.map(data => addInventory(data));
  }
}
