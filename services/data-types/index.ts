export interface QuizItemTypes {
  _id: string;
  type: string;
  kuisName: string;
  banner: string;
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
