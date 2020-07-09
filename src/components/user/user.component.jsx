import React from 'react';

import Card from '../card/card.component';

import useFetch from '../../effects/use-fetch';

const User = ({ userId }) => {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const fetchUser = async() => {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
  //     const users = await res.json();
  //     setUser(users[0])
  //   }
  //   fetchUser()
  // });

  const user = useFetch(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`
  );

  return (
    <Card>
      {user ? (
        <div>
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </Card>
  );
};

export default User;
