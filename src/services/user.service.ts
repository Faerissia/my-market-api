import jwtDecode from "jwt-decode";
import axios from "axios";
import { prismaClient } from "../config/prisma";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

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
};

export default { ...methods };
