// Any JS here is automatically run

// Import React library

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// Create React component
class App extends Component {
   constructor(props){
      super(props);

      this.state = { images: [] };
   }
   componentWillMount() {
      axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
         .then(response => console.log(response));
   }
   render()  {
      return (
         <div>
            <ImageList />
         </div>
      )
   }
}

// Render the component to the screen - Meteor.startup to make sure DOM is fully loaded before React render.
Meteor.startup(() => {
   ReactDOM.render(<App />, document.querySelector('.container'));

});
