import { INCREMENT, DECREMENT, ADD, DELETE, FIND, EDIT} from './constants'
//let state = 0;

export function increment(){
	return {
		type : INCREMENT
	}
}

// 向上计数
export function decrement(step = 1){
	return {
		type : DECREMENT
	}
}

export function Add(text){
	console.log(text)
	return {
		type : ADD,
		text 
	}
}

export function Delete(index){
	return {
		type : DELETE,
		index
	}
}

export function Find(text){
	return {
		type : FIND,
		text
	}
}

export function Edit(text,textFinal){
	return {
		type : EDIT,
		text ,
		textFinal
	}
}


