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
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
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

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },

  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },
  updateProfileStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then((response) => {
        return response.data;
      });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put(`/profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      });
  },

  saveProfileInfo(profile) {
    return instance.put(`/profile`, profile).then((response) => {return response.data;});
  }
}


export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false, captcha= null) {
    return instance
      .post(`auth/login`, { email, password, rememberMe, captcha })
      .then((response) => {
        return response.data;
      });
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => {
      return response.data;
    });
  },
};
export const captchaAPI = {
  captcha() {
    return instance.get(`security/get-captcha-url`).then((response) => {
      return response.data;
    });
  },
};
