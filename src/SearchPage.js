import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>

            </div>
            <hr />
            <ChannelRow
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHR3SOFYFL3oqOJ_-eaX0lSY1bHnAF1bOWhQ&usqp=CAU"
                channel="AdventureWorld"
                verified
                subs="455k"
                noOfVideos="3"
                description="hey i am dev and i am making the adventures videos .if you like such kind of content the follo me along"
            />
            <hr></hr>
            <VideoRow

                title="This is awesome"
                views="31M views"
                subs="455K"
                timestamp="3 days ago"
                channel="AdventureWorld"
                channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHR3SOFYFL3oqOJ_-eaX0lSY1bHnAF1bOWhQ&usqp=CA"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOL8mnCtgVQuBqaQVtjS9wNBrsF4xYDEBZWw&usqp=CAU"
                description="hey i am dev and i am making the adventures videos .if you like such kind of content the follo me along"
            />
            <VideoRow

                title="Aa gayi BGMI"
                views="3.1M views"
                subs="455K"
                timestamp="6 days ago"
                channel="AdventureWorld"
                channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHR3SOFYFL3oqOJ_-eaX0lSY1bHnAF1bOWhQ&usqp=CA"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyi--QsBNsUwtSdi5WLNcO9wyeZUGu2bvZtw&usqp=CAU"
                description="hey i am dev and i am making the adventures videos .if you like such kind of content the follo me along"
            />
            <VideoRow

                title=" This is my robot"
                views="3M views"
                subs="455K"
                timestamp="1 days ago"
                channel="AdventureWorld"
                channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHR3SOFYFL3oqOJ_-eaX0lSY1bHnAF1bOWhQ&usqp=CA"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7go-0_xBejtu_88b3GXC4mk8Ua0TFmUowrQ&usqp=CAU"
                description="hey i am dev and i am making the adventures videos .if you like such kind of content the follo me along"
            />
        </div>
    )
}

export default SearchPage
