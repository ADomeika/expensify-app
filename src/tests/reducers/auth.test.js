import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should log user in and set the uid', () => {
  const uid = '124jbg1lk1g25oi12g7dIJFG';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(uid);
});

test('should log user out and clear the uid', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'astrgasvsat24vs' }, action);
  expect(state).toEqual({});
});
