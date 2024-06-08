import jwtDecode from "jwt-decode";
import axios from "axios";
import { prismaClient } from "../config/prisma";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { firebase_admin } from "../config/firebase";

const methods = {
  async register(body: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const find_email: any = await prismaClient.uSER.findFirst({
          where: {
            email: body.email,
          },
        });
        if (find_email?.email)
          return reject({ status: 401, message: "email is duplicate" });
        let new_date = new Date();
        new_date.setHours(new_date.getHours() + 7);
        body.uuid = uuidv4();
        body.created_date = new_date;
        body.updated_date = new_date;
        const saltRounds = 10;
        const hashPws = await bcrypt.hash(body.password, saltRounds);
        body.password = hashPws;
        const create = await prismaClient.uSER.create({
          data: body,
        });
        return resolve(create);
      } catch (err) {
        console.log(err);
        return reject(err);
      }
    });
  },
  async login(body: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const check_status: any = await prismaClient.uSER.findFirst({
          where: {
            email: body.email,
          },
        });
        if (check_status?.status == 3)
          return reject({ status: 401, message: "this user has been delete" });
        if (!check_status?.status)
          return reject({ status: 401, message: "Incorrect" });

        const checkPassword = await bcrypt.compare(
          body.password,
          check_status?.password
        );

        if (checkPassword === false)
          return reject({ status: 401, message: "Incorrect" });

        if (check_status && checkPassword === true) {
          const token = methods.userDataToToken(check_status);
          return resolve(token);
        }
      } catch (err) {
        console.log(err);
        return reject(err);
      }
    });
  },
  async userDataToToken(body: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = {
          uuid: body.uuid,
          username: body.username,
          picture: body.picture,
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          user_level: body.user_level,
          user_id: body.firebase_uid,
        };
        console.log(data);
        const token = jsonwebtoken.sign(
          data,
          process.env.JSON_SECRET_KEY as string,
          {
            expiresIn: "7d",
          }
        );

        return resolve(token);
      } catch (err) {
        console.log(err);
        return reject(err);
      }
    });
  },
  async googleAuth(user: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const google_auth: any = await firebase_admin.getUser(user.user_id);
        let data: any;
        if (google_auth) {
          const check_register: any = await prismaClient.uSER.findFirst({
            where: {
              email: user.email,
            },
          });
          if (!check_register) {
            const saltRounds = 10;
            const hashPws = await bcrypt.hash(user.user_id, saltRounds);
            const create_user = await prismaClient.uSER.create({
              data: {
                uuid: uuidv4(),
                email: user.email,
                username: user.name,
                password: hashPws,
                picture: user.picture,
                firebase_uid: user.user_id,
                status: 1,
                created_date: new Date(),
                updated_date: new Date(),
              },
            });
            data = await methods.userDataToToken(create_user);
          } else {
            data = await methods.userDataToToken(check_register);
          }
        }
        resolve(data);
      } catch (err) {
        console.log(err);
        return reject(err);
      }
    });
  },
  async getProfile(user: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const find = await prismaClient.uSER.findFirst({
          where: {
            email: user.email,
          },
          select: {
            username: true,
            first_name: true,
            last_name: true,
            picture: true,
            phone: true,
            email: true,
          },
        });
        resolve(find);
      } catch (err) {
        console.log(err);
        return reject(err);
      }
    });
  },
  async editProfile(user: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const check_duplicate = await prismaClient.uSER.findFirst({
          where: {
            username: user.username,
          },
        });

        if (check_duplicate && check_duplicate.email !== user.email)
          return reject({
            status: 401,
            message: "This username is already used",
          });

        const body = {
          username: user.username,
          first_name: user.first_name,
          last_name: user.last_name,
          phone: user.phone,
        };

        const find = await prismaClient.uSER.update({
          data: body,
          where: {
            email: user.email,
          },
        });
        resolve(find);
      } catch (err) {
        console.log(err);
        return reject(err);
      }
    });
  },
};

export default { ...methods };
