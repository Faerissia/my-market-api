import jwtDecode from "jwt-decode";
import axios from "axios";
import { prismaClient } from "../config/prisma";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { firebase_admin } from "../config/firebase";

const methods = {
  async createProduct(body: any) {
    return new Promise(async (resolve, reject) => {
      try {
        let date = new Date();
        date.setHours(date.getHours() + 7);
        body.uuid = uuidv4();
        body.created_date = date;
        body.updated_date = date;

        const create = await prismaClient.pRODUCT.create({
          data: body,
        });
        resolve(create);
      } catch (err) {
        console.log(err);
        return reject(err);
      }
    });
  },
  async ProductDetail(product_uuid: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const get = await prismaClient.pRODUCT.findFirst({
          where: {
            uuid: product_uuid,
          },
          select: {
            uuid: true,
            product_name: true,
            description: true,
            amount: true,
            status: true,
            created_date: true,
            updated_date: true,
            USER: {
              select: {
                uuid: true,
                username: true,
                picture: true,
                status: true,
              },
            },
            PRODUCT_CATEGORY: true,
          },
        });
        resolve(get);
      } catch (err) {
        console.log(err);
        return reject(err);
      }
    });
  },
};

export default { ...methods };
