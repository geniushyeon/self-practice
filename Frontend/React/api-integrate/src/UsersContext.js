import React, { createContext, useReducer, useContext } from 'react'
import {createAsyncDispatcher, createAsyncHandler, initialAsyncState } from './asyncActionUtils'
import * as api from './api'

const initialState = {
	users: initialAsyncState,
	user: initialAsyncState
}

const usersHandler = createAsyncHandler('GET_USERS', 'users')
const userHandler = createAsyncHandler('GET_USER', 'user')

// reducer
function usersReducer(state, action) {
	switch (action.type) {
		case 'GET_USERS':
		case 'GET_USERS_SUCCESS':
		case 'GET_USERS_ERROR':
			return usersHandler(state, action)

		case 'GET_USER':
		case 'GET_USER_SUCCESS':
		case 'GET_USER_ERROR':
			return userHandler(state, action)
		default:
			throw new Error(`unhanded action type: ${action.type}`)
	}
}

// state용 context와 dispatch용 context 따로 만들어주기
const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

// 두가지 Context들의 Provider로 감싸주는 컴포넌트
export function UsersProvider({ children }) {
	const [state, dispatch] = useReducer(usersReducer, initialState);

	return (
		<UsersStateContext.Provider value={state}>
			<UsersDispatchContext.Provider value={dispatch}>
				{ children }
			</UsersDispatchContext.Provider>
		</UsersStateContext.Provider>
	);
}

// State를 쉽게 조회할 수 있게 해주는 custom Hook
export function useUsersState() {
	const state = useContext(UsersStateContext);
	if (!state) {
		throw new Error('cannot find UsersProvider')
	}
	return state;
}

// dispatch를 쉽게 사용할 수 있게 해주는 custom hook
export function useUsersDispatch() {
	const dispatch = useContext(UsersDispatchContext);
	if (!dispatch) {
		throw new Error('cannot find UsersProvider')
	}
	return dispatch
}

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);