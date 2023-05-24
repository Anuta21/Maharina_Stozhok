import { ISighUpRequestBody } from "../../services";

export interface IFormData extends ISighUpRequestBody {
  confirmPassword: string;
}
