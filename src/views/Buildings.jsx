import React from 'react'
import InfoCard from './../components/InfoCard'
import { ThemeProvider } from '@material-ui/core'
import SearchBar from './../components/SearchBar'
import theme from "./../components/palette/palette";

export default function Buildings() {
    return (
        <div>
            <ThemeProvider>
            <SearchBar/>
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            </ThemeProvider>
        </div>
    )
}
