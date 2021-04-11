import { Mongo } from 'meteor/mongo';

export const LinksCollection = new Mongo.Collection('links');

export const taskCollection = new Mongo.Collection('tasks');