import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';

export const stuffConditions = ['excellent', 'good', 'fair', 'poor'];
export const stuffPublications = {
  stuff: 'Stuff',
  stuffAdmin: 'StuffAdmin',
};

class StuffCollection extends BaseCollection {
  constructor() {
    super('Stuffs', new SimpleSchema({
      name: String,
      type: String,
      location: String,
      supply: Number,
      amount: Number,
      expiration: Date,
      reserves_supply: Number,
      reserves_expiration: Date,
    }));
  }


  

  /**
   * Defines a new Stuff item.
   * @param name the name of the item.
   * @param type what kind of item.
   * @param location where it is stored.
   * @param amount the number of items.
   * @param supply the condition of the item.
   * @param expiration expiration date.
   * @param reserves_supply the condition of the item.
   * @param reserves_expiration the condition of the item.
   * @return {String} the docID of the new document.
   */
  define({ name, type, location, supply, amount, expiration, reserves_supply, reserves_expiration }) {
    const docID = this._collection.insert({
      name,
      type,
      location,
      supply,
      amount,
      expiration,
      reserves_supply,
      reserves_expiration,
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
  update(docID, { name, quantity, condition }) {
    const updateData = {};
    if (name) {
      updateData.name = name;
    }
    // if (quantity) { NOTE: 0 is falsy so we need to check if the quantity is a number.
    if (_.isNumber(supply)) {
      updateData.supply = supply;
    }
    if (_.isNumber(amount)) {
      updateData.amount = amount;
    }
    if (condition) {
      updateData.condition = condition;
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
   * It publishes the entire collection for admin and just the stuff associated to an owner.
   */
  publish() {
    if (Meteor.isServer) {
      // get the StuffCollection instance.
      const instance = this;
      /** This subscription publishes only the documents associated with the logged in user */
      Meteor.publish(stuffPublications.stuff, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      /** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
      Meteor.publish(stuffPublications.stuffAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  /**
   * Subscription method for stuff owned by the current user.
   */
  subscribeStuff() {
    if (Meteor.isClient) {
      return Meteor.subscribe(stuffPublications.stuff);
    }
    return null;
  }

  /**
   * Subscription method for admin users.
   * It subscribes to the entire collection.
   */
  subscribeStuffAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(stuffPublications.stuffAdmin);
    }
    return null;
  }

}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Stuffs = new StuffCollection();
