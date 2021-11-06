import React from 'react'

//here it will be the other layout, Header component will not appear just here.
// the sidebar will appear here
export default function MainLayout(props) {
    
    return <div>
        <div>
                {
                    props.children
                }
        </div>
    </div>
}