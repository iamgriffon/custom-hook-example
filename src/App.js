import React from 'react';

import User from './components/user/user.component';
import Post from './components/post/post.component';
import UseReducerExample from './components/use-reducer-example/use-reducer-component'


import './App.css';
import UseEffectExample from './components/use-effect-example/use-effect-example.component';

const App = props => {
  return (
    <div className='App'>
      <UseReducerExample />
      <UseEffectExample />
      <User userId={5} />
      <Post postId={15} />
    </div>
  );
};

export default App;
