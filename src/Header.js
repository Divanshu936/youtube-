import React, { useState } from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import Notifications from "@material-ui/icons/Notifications"
import Avatar from '@material-ui/core/Avatar'
import { Link } from "react-router-dom"
function Header() {
    const [inputSearch, setInputSearch] = useState('')
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
                </Link>
            </div>
            <div className="header__input">
                <input onChange={(e) => setInputSearch(e.target.value)}
                    value={inputSearch}
                    placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon " />
                <Notifications className="header__icon" />
                <Avatar
                    alt="divanshu  mahindra"
                    src="https://image.shutterstock.com/image-photo/new-common-metal-shortlink-chain-260nw-1876215235.jpg" />
            </div>
        </div>
    )
}

export default Header
