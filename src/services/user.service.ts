import jwtDecode from "jwt-decode";
import axios from "axios";
import { prismaClient } from "../config/prisma";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

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
          console.log("test");
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
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
        };
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
};

export default { ...methods };
