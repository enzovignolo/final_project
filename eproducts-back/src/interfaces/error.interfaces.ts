export interface IError extends Error {
	status?: number;
	code?: number;
	keyPattern?: Object;
}
