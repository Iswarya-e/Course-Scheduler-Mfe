export interface Tutor {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  contactNo: string;
  qualification: string;
  expertiseArea: string;
  bio: string;
  gender: string;
  dob: Date | null;
  address: string;
}
