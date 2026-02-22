export class ApiError extends Error {
  constructor(
    override readonly message: string,
    public readonly statusCode: number,
  ) {
    super(message);
  }
}
