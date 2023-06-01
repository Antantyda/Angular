import {Injectable} from "@angular/core";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers = (): UserModel[] => {
    return [
      {username: "Zbyňa", value: 10},
      {username: "Zbyňa1", value: 11},
      {username: "Zbyňa2", value: 12},
      {username: "Zbyňa3", value: 13},
    ];
  }
}
