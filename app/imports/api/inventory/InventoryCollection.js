import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';

export const inventoryPublications = {
  inventory: 'Inventory',
  inventoryAdmin: 'InventoryAdmin',
};

class InventoryCollection extends BaseCollection {
  constructor() {
    super('Inventorys', new SimpleSchema({
      name: String,
      type : {
        type: String,
        allowedValues: ['Allergy & Cold Medicines', 'Analgesics/Anti-inflammatory', 'Anti-hypertensives',
        'Anti-microbial', 'Cardiac/Cholesterol', 'Dermatological Preparations', 'Diabetes Meds', 'Ear and Eye Preparations',
        'Emergency Kit', 'GI Meds', 'GYN Meds', 'Pulmonary', 'Smoking Cessation', 'Vitamins and Supplements'],
        defaultValue: ' ',
    },
      location: String,  
      amount: Number,
      // supply: Array,
      // expiration: Array,
      reserves_supply: Number,
      reserves_expiration: String,
      owner: String,
    }));
  }

  /**
   * Defines a new Inventory item.
   * @param name the name of the item.
   * @param quantity how many.
   * @param owner the owner of the item.
   * @param condition the condition of the item.
   * @return {String} the docID of the new document.
   */
  define({ name, type, location, amount, reserves_supply, reserves_expiration, owner }) {
    const docID = this._collection.insert({
      name,
      type,
      location,
      amount,
      // supply,
      // expiration,
      reserves_supply,
      reserves_expiration,
      owner,
    });
    return docID;
  }

  /**
   * Updates the given document.
   * @param docID the id of the document to update.
   * @param name the new name (optional).
   * @param quantity the new quantity (optional).
   * @param condition the new condition (optional).
   */
  update(docID, { name, type, location, amount, reserves_supply, reserves_expiration }) {
    const updateData = {};
    if (name) {
      updateData.name = name;
    }
    // if (quantity) { NOTE: 0 is falsy so we need to check if the quantity is a number.
    if (type) {
      updateData.type = type;
    }
    if (location) {
      updateData.location = location;
    }
    if (_.isNumber(amount)) {
      updateData.amount = amount;
    }
    // if (supply) {
    //   updateData.supply = supply;
    // }
    // if (expiration) {
    //   updateData.expiration = expiration;
    // }
    if (reserves_supply) {
      updateData.reserves_supply0 = reserves_supply;
    }
    if (reserves_expiration) {
      updateData.reserves_expiration = reserves_expiration;
    }
    this._collection.update(docID, { $set: updateData });
  }

  /**
   * A stricter form of remove that throws an error if the document or docID could not be found in this collection.
   * @param { String | Object } name A document or docID in this collection.
   * @returns true
   */
  removeIt(name) {
    const doc = this.findDoc(name);
    check(doc, Object);
    this._collection.remove(doc._id);
    return true;
  }

  /**
   * Default publication method for entities.
   * It publishes the entire collection for admin and just the inventory associated to an owner.
   */
  publish() {
    if (Meteor.isServer) {
      // get the InventoryCollection instance.
      const instance = this;
      /** This subscription publishes only the documents associated with the logged in user */
      Meteor.publish(inventoryPublications.inventory, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      /** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
      Meteor.publish(inventoryPublications.inventoryAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  /**
   * Subscription method for inventory owned by the current user.
   */
  subscribeInventory() {
    if (Meteor.isClient) {
      return Meteor.subscribe(inventoryPublications.inventory);
    }
    return null;
  }

  /**
   * Subscription method for admin users.
   * It subscribes to the entire collection.
   */
  subscribeInventoryAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(inventoryPublications.inventoryAdmin);
    }
    return null;
  }

}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Inventorys = new InventoryCollection();
