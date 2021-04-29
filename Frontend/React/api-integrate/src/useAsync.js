import { useReducer, useEffect } from 'react';

function reducer(state, action) {
	switch (action.type) {
		case 'LOADING':
			return {
				loading: true,
				data: null,
				error: null
			};
		case 'SUCCESS':
			return {
				loading: false,
				data: action.data,
				error: null
			};
		case 'ERROR':
			return {
				loading: false,
				data: null,
				error: action.error
			};
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

function useAsync(callback, deps = [], skip = false) { 
	// callback: API 요청을 시작하는 함수, deps: 해당 함수 안에서 사용하는 useEffect의 deps로 설정됨
	const [state, dispatch] = useReducer(reducer, {
		loading: false,
		data: null,
		error: false
	});

	const fetchData = async () => {
		dispatch({ type: 'LOADING' });
		try {
			const data = await callback();
			dispatch({ type: 'SUCCESS', data });
		} catch (e) {
			dispatch({ type: 'ERROR', error: e});
		} 
	};

	useEffect(() => {
		if (skip) return;
		fetchData();
	}, deps);

	return [state, fetchData];
}

export default useAsync