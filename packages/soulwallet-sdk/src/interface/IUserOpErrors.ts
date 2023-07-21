export class UserOpErrors extends Error {
  code: number;
  data: any | undefined;
  constructor(code: number, message: string, data?: any | undefined) {
    super(message);
    this.name = 'UserOpErrors';
    this.code = code;
    this.data = data;
  }
  toString(): string {
    return `UserOpErrors: ${this.message} (${this.code})`;
  }
}

export class UserOpErrorCodes {
  static UnknownError = -1;
  static InvalidUserOp = -32602;
  static EntryPointValidationFailed = -32500;
  static PaymasterValidationFailed = -32501;
  static OpcodeValidationFailed = -32502;
  static TimeRangeValidationFailed = -32503;
  static PaymasterThrottled = -32504;
  static PaymasterStakeTooLow = -32505;
  static UnsupportedSignatureAggregator = -32506;
  static SignatureValidationFailed = -32507;
}
