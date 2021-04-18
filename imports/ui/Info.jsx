import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const Info = () => {
  const links = useTracker(() => {
    return LinksCollection.find().fetch();
  });

  return (
    <div>
      <h2>Learn Meteor!</h2>
      
    </div>
  );
};
