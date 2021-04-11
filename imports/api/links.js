import { Mongo } from 'meteor/mongo';

export const LinksCollection = new Mongo.Collection('links');
export const taskCollection = new Mongo.Collection('tasks');
export const ExpenseCollection = new Mongo.Collection('expense');
export const ProfileCollection = new Mongo.Collection('profile');
