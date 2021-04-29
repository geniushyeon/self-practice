// parameter: action.type, promiseFn

export function createAsyncDispatcher(type, promiseFn) {
	// 성공, 실패에 대한 액션 타입 문자열 준비
	const SUCCESS = `${type}_SUCCESS`
	const ERROR = `${type}_ERROR`

	// 새로운 함수 생성
	// ...rest를 사용하여 나머지 파라미터를 rest 배열에 담는다.
	async function actionHandler(dispatch, ...rest) {
		dispatch({ type }); // request started

		try {
			const data = await promiseFn(...rest);
			dispatch({
				type: SUCCESS,
				data
			});
		} catch (e) {
			dispatch({
				type: ERROR,
				error: e
			})
		}
	}
	return actionHandler
}

export const initialAsyncState = {
	loading: false,
	data: null,
	error: null
}
// 로딩 중일 때 바뀔 상태 객체
const loadingState = {
	loading: true,
	data: null,
	error: null
}

// 성공했을 때의 상태를 만들어주는 함수
const success = data => ({
	loading: false,
	data,
	error: null
})

// 실패했을 때의 상태를 만들어주는 함수
const error = error => ({
	loading: false,
	data: null,
	error: error
})

// 세가지 액션 처리하는 리듀서 생성
export function createAsyncHandler(type, key) {
	const SUCCESS = `${type}_SUCCESS`
	const ERROR = `${type}_ERROR`

	// 함수 생성
	function handler(state, action) {
		switch (action.type) {
			case type:
				return {
					...state,
					[key]: loadingState
				}
			case SUCCESS:
				return {
					...state,
					[key]: success(action.data)
				}
			case ERROR:
				return {
					...state,
					[key]: error(action.error)
				}
			default:
				return state
		}
	}
	return handler
}