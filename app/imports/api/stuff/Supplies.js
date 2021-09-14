import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Supplies = new Mongo.Collection('Supplies');

/** Define a schema to specify the structure of each document in the collection. */
const SuppliesSchema = new SimpleSchema({
    name: String,
    location: String,
    amount: Number,
    expiration: Date,
    reserves_location: String,
    reserves_amount: Number,
    
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Supplies.attachSchema(SuppliesSchema);

/** Make the collection and schema available to other code. */
export { Supplies, SuppliesSchema };