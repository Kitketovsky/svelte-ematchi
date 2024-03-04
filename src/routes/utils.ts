// Fisher–Yates shuffle algorithm
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

export function shuffle<T>(array: T[]) {
	let i = array.length;

	while (i--) {
		const randomIndex = Math.floor(Math.random() * i + 1);
		const temp = array[i];
		array[i] = array[randomIndex];
		array[randomIndex] = temp;
	}

	return array;
}

export function getTwemojiUrl(emoji: string) {
	const code = [...emoji].map((char) => char.codePointAt(0)?.toString(16)).join('-');
	return `/src/lib/assets/twemoji/${code}.svg`;
}
