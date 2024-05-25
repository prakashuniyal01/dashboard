import React from 'react'
import FlexBetween from './FlesBetween'
import { Box, Typography, useTheme } from '@mui/material'

type Props = {
    title : string;
    subTitle?: string;
    icon?: React.ReactNode;
    sidText: string
}

const BoxHeader = ({icon ,subTitle,sidText, title}: Props) => {
    const {palette} = useTheme();
  return (
    <FlexBetween color={palette.grey[400]} margin='1.rem 1rem 0 1rem' >
        <FlexBetween>
            {icon}
            <Box width="100%" >
                <Typography>
                    {title}
                </Typography>
                <Typography variant='h6' >
                    {subTitle}
                </Typography>
            </Box>
        </FlexBetween>
        <Typography variant='h5' fontWeight="700" color={palette.secondary[500]}>
            {sidText}
        </Typography>
    </FlexBetween>
  )
}

export default BoxHeader