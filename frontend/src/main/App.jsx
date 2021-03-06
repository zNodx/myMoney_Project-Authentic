import React from 'react'

import Messages from '../common/msg/messages'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'

export default props => (
    <div className='wrapper'>
        <Header />
        <Messages/>
        <SideBar />
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Footer />
    </div>
)