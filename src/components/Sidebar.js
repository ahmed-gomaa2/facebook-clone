import React from 'react';
import './css/Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

const Sidebar = () => {
    return (
        <div className={'sidebar'}>
            <SidebarRow src={''} title={'Ahmed'} />
            <SidebarRow Icon={LocalHospitalIcon} title={'Covid-19 Information center'} />
            <SidebarRow Icon={EmojiFlagsIcon} title={'Pages'} />
            <SidebarRow Icon={PeopleIcon} title={'Friends'} />
            <SidebarRow Icon={ChatIcon} title={'Messenger'} />
            <SidebarRow Icon={StorefrontIcon} title={'Marketplaces'} />
            <SidebarRow Icon={VideoLibraryIcon} title={'Videos'} />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title={'More'} />
        </div>
    );
};

export default Sidebar;