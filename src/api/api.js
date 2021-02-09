import * as React from "react";
import * as axios from "axios";
import headers from "./../private/API-KEY";

let instance = axios.create({
  withCredentials: true,
  headers,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const followAPI = {
  postUsers(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  deleteUsers(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};
