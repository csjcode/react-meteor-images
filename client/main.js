// Any JS here is automatically run

// Import React library

import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

// Create React component

const App = () => {
   return (
      <div>
         <ImageList />
      </div>
   )
}

// Render the component to the screen - Meteor.startup to make sure DOM is fully loaded before React render.
Meteor.startup(() => {
   ReactDOM.render(<App />, document.querySelector('.container'));
});
