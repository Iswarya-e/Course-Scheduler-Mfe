import { StudentDetail } from "../../student/models/studet-details.model";
import { TutorDetail } from "./tutor-detail.model";

export interface LoginResponse {
  token: string;
  userDetails: TutorDetail | StudentDetail;
}