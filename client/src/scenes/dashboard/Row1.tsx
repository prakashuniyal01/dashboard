// import { Box, useMediaQuery, useTheme } from '@mui/material';

import DashboardBox from '../../components/DashboadBox';
// import { useGetKpisQuery } from '../../state/api';

type Props = {}

const Row1 = (props: Props) => {
    // const {data} = useGetKpisQuery();
    return (
        <>
            <DashboardBox gridArea="a" ></DashboardBox>
            <DashboardBox gridArea="b" ></DashboardBox>
            <DashboardBox gridArea="c" ></DashboardBox>
        </>
    )
}

export default Row1