import jwtDecode from "jwt-decode";
import axios from "axios";
import { prismaClient } from "../config/prisma";

export const getImageUrl = async (url: string) => {
  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });

    const contentType = response.headers["content-type"];
    const base64String = Buffer.from(response.data, "base64");
    return {
      type: contentType,
      length: base64String.length,
      data: base64String,
    };
  } catch (err) {
    //return { error: true };
  }
};

export const userUuidToUserId = async (uuid: string) => {
  try {
    const { id }: any = await prismaClient.uSER.findUnique({
      where: {
        uuid: uuid,
      },
    });
    return id;
  } catch (err) {
    //return { error: true };
  }
};
