import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
// here it will be the main layout, Header component will appear just here
//the sidebar will appear here

export default function MainLayout(props) {
    
    return <div>
        <div>
            <Header />
                {
                    props.children
                }
            <Sidebar />
        </div>
    </div>
}