import jwtDecode from "jwt-decode";
import axios from "axios";
import { prismaClient } from "../config/prisma";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { firebase_admin } from "../config/firebase";

const methods = {
  async editProfile(user: any) {
    return new Promise(async (resolve, reject) => {
      try {
        resolve("find");
      } catch (err) {
        console.log(err);
        return reject(err);
      }
    });
  },
};

export default { ...methods };
