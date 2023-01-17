export interface QuizItemTypes {
  _id: string;
  type: string;
  kuisName: string;
  banner: string;
  questions: Array<any>;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  profile_photo: string;
}

export interface JWTPayloadTypes {
  user: UserTypes;
  iat: number;
}

export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface QuizDataTypes {
  _id: string;
  kuisName: string;
  reference?: string;
  reference_link: string;
  description: string;
  banner: string;
  user: UserTypes;
  category: CategoryTypes;
  type: string;
  isActive: boolean;
  questions: any;
}
