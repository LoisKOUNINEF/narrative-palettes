import {
	earthy,
	neutral,
	nutin,
	portfolio,
} from "./secret-themes/index.js";

export const secretThemePairs: IThemePair[] = [
	neutral,
	nutin,
	portfolio,
	earthy,
];

export const secretThemes: ITheme[] = secretThemePairs.flatMap((pair) => [pair.light, pair.dark]);
