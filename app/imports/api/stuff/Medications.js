import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';


/** Define a Mongo collection to hold the data. */
const Medications = new Mongo.Collection('Medications');

/** Define a schema to specify the structure of each document in the collection. */
const MedicationsSchema = new SimpleSchema({
    name: String,
    type: String,
    location: String,
    supply: Number,
    amount: Number,
    expiration: Date,
    reserves_supply: Number,
    reserves_expiration: Date,
    
}, { tracker: Tracker });


/** Attach this schema to the collection. */
Medications.attachSchema(MedicationsSchema);

/** Make the collection and schema available to other code. */
export { Medications, MedicationsSchema };