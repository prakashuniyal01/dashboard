// import { Build } from "@mui/icons-material";
import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis"],
    endpoints: (build) =>({
        getKpis: build.query<void, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        })
    })
})


// export const { useGetKpisQuery } = api;