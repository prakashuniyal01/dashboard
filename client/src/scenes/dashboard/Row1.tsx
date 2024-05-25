import DashboardBox from '../../components/DashboadBox';
import { useGetKpisQuery } from '../../state/api';
import {
    ResponsiveContainer, CartesianGrid, AreaChart, XAxis, YAxis, Tooltip, Area,
    Line,
    Legend,
    LineChart,
    BarChart,
    Bar
} from 'recharts';
import { useMemo } from 'react';
import { useTheme } from "@mui/material";
import BoxHeader from '../../components/BoxHeader';

// type Props = {}

const Row1 = () => {
    const { palette } = useTheme();
    const { data } = useGetKpisQuery();
    console.log(data);
    const reveneuExpense = useMemo(() => {
        return (
            data &&
            data[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    expenses: expenses,
                }
            })
        )
    }, [data])

    const reveneuProfite = useMemo(() => {
        return (
            data &&
            data[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    profite: (revenue - expenses).toFixed(2),
                }
            })
        )
    }, [data])

    const revenue = useMemo(() => {
        return (
            data &&
            data[0].monthlyData.map(({ month, revenue }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue
                }
            })
        )
    }, [data])


    return (
        <>
            <DashboardBox gridArea="a" >
                <BoxHeader
                    title='Revenew and Expenses'
                    subTitle="top line represenst revenue "
                    sidText='+4%'
                />
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={reveneuExpense}
                        margin={{
                            top: 15,
                            right: 25,
                            left: -5,
                            bottom: 60,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%"
                                    stopColor={palette.primary[300]}
                                    stopOpacity={0.5} /><stop offset="95%"
                                        stopColor={palette.primary[300]}
                                        stopOpacity={0}
                                />

                            </linearGradient>
                            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%"
                                    stopColor={palette.primary[300]}
                                    stopOpacity={0.5} /><stop offset="95%"
                                        stopColor={palette.primary[300]}
                                        stopOpacity={0}
                                />

                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name"
                            tickLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <YAxis tickLine={false}
                            axisLine={{ strokeWidth: "0" }}
                            style={{ fontSize: "10px" }}
                            domain={[8000, 23000]}
                        />

                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" fillOpacity={1} dot={true} stroke={palette.primary.main} fill="url(#colorRevenue)" />
                        <Area type="monotone" dataKey="expenses" fillOpacity={1} dot={true} stroke={palette.primary.main} fill="url(#colorexpenses)" />
                    </AreaChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="b" >
                <BoxHeader
                    title='profite in months '
                    subTitle="top line represenst revenue "
                    sidText='+4%'
                />
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={reveneuProfite}
                        margin={{
                            top: 15,
                            right: 25,
                            left: -5,
                            bottom: 60,
                        }}
                    >
                        <CartesianGrid vertical={false}
                            stroke={palette.grey[800]} strokeDasharray="3 3" />
                        <XAxis dataKey="name"
                            tickLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <YAxis
                            yAxisId="left"
                            tickLine={false}
                            axisLine={false}
                            style={{ fontSize: "10px" }}
                            domain={[8000, 23000]}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation='right'
                            tickLine={false}
                            axisLine={false}
                            style={{ fontSize: "10px" }}
                            domain={[8000, 23000]}
                        />

                        <Tooltip />
                        <Legend height={20} wrapperStyle={{
                            margin: "0, 0 , 10px, 0"
                        }} />
                        <Line
                            yAxisId="left"
                            type="monotone"
                            dataKey="profite"
                            stroke={palette.tertiary[500]}
                        />
                        <Line yAxisId="right"
                            type="monotone"
                            dataKey="revenue"
                            stroke={palette.primary.main} />
                    </LineChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="c">
                <BoxHeader
                    title="Revenue Month by Month"
                    subTitle="graph representing the revenue month by month"
                    sidText="+4%"
                />
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={revenue}
                        margin={{
                            top: 17,
                            right: 15,
                            left: -5,
                            bottom: 58,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor={palette.primary[300]}
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor={palette.primary[300]}
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} stroke={palette.grey[800]} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <Tooltip />
                        <Bar dataKey="revenue" fill="url(#colorRevenue)" />
                    </BarChart>
                </ResponsiveContainer>
            </DashboardBox>
        </>
    );
};

export default Row1;