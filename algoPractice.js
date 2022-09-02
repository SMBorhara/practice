s = 'abacabad';
// FIND FIRST NON REPEATING CHARACTER IN A STRING AND RETURN IT
function solution(s) {
	let notRepeat = new Map();

	for (let i = 0; i < s.length; i++) {
		if (!notRepeat[s.charAt(i)]) {
			notRepeat[s.charAt(i)] = 1;
		} else {
			notRepeat[s.charAt(i)] = notRepeat[s.charAt(i)] + 1;
		}
	}
	for (let i = 0; i < s.length; i++) {
		if (notRepeat[s[i]] === 1) {
			return s[i];
		}
	}

	return '_';
}

console.log(solution(s));
