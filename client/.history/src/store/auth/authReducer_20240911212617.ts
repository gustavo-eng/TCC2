import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeCookie, setCookie } from "typescript-cookie";
import { api, removeSession, setSession } from "../../lib/axios";
import client from "../../service/client";
import { AuthResponse, userSchema } from "./authTypes";

const initialState: any = {
  user: null,
  loading: false,
  error: null,
  userPermission: null,
  permissionError: null,
};

export const login = createAsyncThunk<AuthResponse>("auth/auth", async (data) => {
  return client.auth.post(data);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.error = null;
      state.loading = false;
      removeCookie("authorization");
      removeSession('user')
      setInterceptorRequest(null);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
       const {token, user} = action.payload;

       const parsed = userSchema.safeParse(user);
       state.loading = false;
       state.user  = parsed.success ? user : null;
       state.error = null;
       if(!parsed.success) {
            removeCookie('authorization');
            removeSession('user');
            state.error = parsed.error.message;
            return
       }

       setCookie('authorization', token);
       setSession('user', user) //todo colocar essa funcao no storageHelpers
       setInterceptorRequest(token as string);
    });
    builder.addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.error = 'failed';
        state.user = null;

    })
  },
});

/*response auth client FPRJ APP
{
	"status": true,
	"isLogged": true,
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibHV0YWRvcjMiLCJ1c2VyUGVybWlzc2lvbiI6ImF0aGxldCIsInVzZXJJZCI6NywiaWF0IjoxNzI2MDkzNzY5LCJleHAiOjE3MjYxODAxNjl9.TI-a0uE2Zjjm3FC8i4lM4W7VLHoXJFZfHyKIgw2Bw1U",
	"msg": "User successfully authenticated"
}
*/

/*
//Reponse SFM
{
    "user": {
        "hasAt": 11,
        "responseUser": {
            "email": "gustavodias@weg.net",
            "firstName": "Gustavo",
            "lastName": "Alexandre Dias ",
            "userTags": {
                "insights": "true",
                "info": "true",
                "warning": "true",
                "error": "true",
                "critical": "true",
                "eventsCount": "5",
                "theme": "light",
                "unit": "metric",
                "dailyReportEmail": "false",
                "monthlyReportEmail": "false",
                "ativoSensor": "true",
                "maintenanceReportEmail": "false",
                "unitTemperature": "°c",
                "unitVelocity": "mm/s"
            },
            "applicationId": "65c4df1c76103c77e70938d2",
            "creationDate": "2024-06-05T13:40:31.519Z",
            "lastUpdated": "2024-09-11T23:09:06.352Z",
            "passwordLastUpdated": "2024-06-10T18:26:59.518Z",
            "lastLogin": "2024-09-11T23:09:06.129Z",
            "tokenCutoff": "2024-09-11T23:09:06.000Z",
            "experienceUserId": "66606acf71fa149dbd5cf480",
            "avatarUrl": "https://secure.gravatar.com/avatar/7a22b4bf44d45e29c8b2e1574f5ee276?d=retro&s=240",
            "id": "66606acf71fa149dbd5cf480",
            "experienceGroups": [
                {
                    "id": "65e2124d31e51f658b6b2f80",
                    "name": "$_ADMINISTRATORS",
                    "parentId": null
                },
                {
                    "id": "663d1e89d19f0545cd79ddc5",
                    "name": "WMO",
                    "parentId": null
                }
            ]
        },
        "responseToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjYwNmFjZjcxZmExNDlkYmQ1Y2Y0ODAiLCJzdWJ0eXBlIjoiZXhwZXJpZW5jZVVzZXIiLCJhcHAiOiI2NWM0ZGYxYzc2MTAzYzc3ZTcwOTM4ZDIiLCJpYXQiOjE3MjYwOTYxNDYsImlzcyI6Ikxvc2FudEV4cGVyaWVuY2UifQ.V5jwSHUXNwDRCEGnylVSuxSIxAkokwDnkFHvLjDLdkI"
    },
    "type": "Success"
}
*/

const setInterceptorRequest = (token: string | null) => {
  api.interceptors.request.clear();
  api.interceptors.request.use((req) => {
    if (!token) {
      delete req.headers.Authorization;
    } else {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  });
};


