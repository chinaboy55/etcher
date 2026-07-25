declare module 'path-is-inside' {
	function pathIsInside(thePath: string, potentialParent: string): boolean;
	export as namespace pathIsInside;
	export = pathIsInside;
}
