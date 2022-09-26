import { BaseResponse } from "../response";

export class BillingSyncConfigApi extends BaseResponse {
  billingSyncKey: string;

  constructor(data: any) {
    super(data);
    if (data == null) {
      return;
    }
    this.billingSyncKey = this.getResponseProperty("BillingSyncKey");
  }
}
