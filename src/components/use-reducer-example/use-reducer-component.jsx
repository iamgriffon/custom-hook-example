import React, { useEffect, useReducer } from 'react';
import Card from '../card/card.component';
import useFetch from '../../effects/use-fetch';

const UseReducerExample = ({userId}) => {

  const INITIAL_STATE = {
    user: null,
    searchQuery: '',
  }

  const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
      case 'SET_USER':
        return {...state, user: action.payload};
      case 'SET_SEARCH_QUERY':
        return {...state, searchQuery: action.payload};
      default:
        return state
    }
  }

  const setUser = user => ({
    type: 'SET_USER',
    payload: user
  });

  const setSearchQuery = searchString => ({
    type: 'SET_SEARCH_QUERY',
    payload: searchString
  })

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const {user, searchQuery} = state;

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
      );
      const resJson = await response.json();
      dispatch(setUser(resJson[0]));
    };
    fetchFunc();
  }, [searchQuery])

  return (
    <Card>
      <input
        type='search'
        value={searchQuery}
        onChange={event => dispatch(setSearchQuery(event.target.value))}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3> {user.username} </h3>
          <h3> {user.email} </h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </Card>
  );
};

export default UseReducerExample