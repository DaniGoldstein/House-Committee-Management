import React from 'react'
import './message.css'

export default function Message({name,date,content}) {
    return (
        <div className="messageContainer">
            <div className="sender">{name}</div>
            <div className="date">{date}</div>
            <div className="content">{content}</div>
        </div>
    )
}
