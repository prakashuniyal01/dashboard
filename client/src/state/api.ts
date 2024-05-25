// import { Build } from "@mui/icons-material";
import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse } from "./types";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL }),
    // console.log(api);
    
    reducerPath: "main",
    tagTypes: ["Kpis"],
    endpoints: (build) =>({
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        })
    })
})


export const { useGetKpisQuery } =
  api;