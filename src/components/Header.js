import React from 'react';
import './css/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import FlagIcon from '@material-ui/icons/Flag'
import HomeIcon from '@material-ui/icons/Home'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import {SupervisedUserCircle} from "@material-ui/icons";
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const Header = () => {

    const [active, setActive] = React.useState(false)

    const handleSearchClick = () => {
        setActive(!active)
    }

    return (
        <div className={'header'}>
            <div className="header__left">
                <img className={`${active && 'header__logoInActive'}`} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png" alt=""/>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder={'Search Facebook'}/>
                </div>
                <div className="header__hiddenInput">
                    <KeyboardBackspaceIcon onClick={handleSearchClick} className={`header__hiddenInputGoBack ${active && 'header__hiddenInputGoBackActive'}`} />
                    <SearchIcon onClick={handleSearchClick} className={`header__hiddenInputIcon ${active && 'header__hiddenInputIconInActive'}`}/>
                    <input placeholder={'Search in Facebook'} className={`${active && 'header__hiddenInputActive'}`} type="text"/>

                </div>
            </div>

            <div className="header__center">
                <div className="header__option header__optionActive">
                    <HomeIcon />
                </div>
                <div className="header__option">
                    <FlagIcon />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon />
                </div>
                <div className="header__option">
                    <SupervisedUserCircle />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Ahmed Gomaa</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default Header;