import { TutorDetail } from "./tutor-detail.model";

export interface LoginResponse {
  token: string;
  userDetails: TutorDetail;
}