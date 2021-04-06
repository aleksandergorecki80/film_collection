import axios from 'axios';

export const fetchUserData = (userToken) => {
  return (dispatch) => {
    axios
    .get('/api/users/me', {
      headers: {
        'x-auth-token': userToken,
      },
    })
    .then((res) => {
      dispatch(fetchUserDataAction({name: res.data.name}))
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

export const fetchUserDataAction = (user) => {
  return { type: 'LOAD_USER_DATA', user }
}