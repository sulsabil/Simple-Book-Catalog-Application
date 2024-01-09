
export interface YourBookType {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}
export interface UserRegistration {
  _id?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}
