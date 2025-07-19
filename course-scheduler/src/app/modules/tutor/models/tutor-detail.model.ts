export interface TutorDetail {
  id?: number;
  userId?: number;

  firstName: string;
  lastName: string;
  email: string;           // <-- added email here
  contactNo?: string;
  qualification?: string;
  expertiseArea?: string;
  bio?: string;
  gender?: string;
  dob?: Date | null;
  address?: string;
}

export interface TutorRegistrationDto {
  firstName: string;
  lastName: string;
  email: string;           // <-- added email here
  contactNo?: string;
  qualification?: string;
  expertiseArea?: string;
  bio?: string;
  gender?: string;
  dob?: Date | null;
  address?: string;
  password: string;
}