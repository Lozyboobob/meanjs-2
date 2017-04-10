import {TypedRecord} from 'typed-immutable-record';

export interface IUser {
  firstName: string;
  lastName: string;
  roles : Array<string>
};
export interface IMessage {
  type: string;
  message: string;
};

export interface IUserRecord extends TypedRecord<IUserRecord>, IUser {
};

export interface ISession {
  token: string;
  user: IUser;
  hasError: boolean;
  isLoading: boolean;
  hasMessage : IMessage
};

export interface ISessionRecord extends TypedRecord<ISessionRecord>,
  ISession {
};
