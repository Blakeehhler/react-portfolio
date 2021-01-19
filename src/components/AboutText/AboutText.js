import React from 'react'
import "./AboutText.css"

export default function AboutText() {
    return (
        <>
        <p>
            <img src={require("../../assets/headshot.png")} class="img-thumbnail mr-3" alt="profile-pic"/>
    Hello my name is Jeremy Greenfield, I am a web developer. I have always liked computers and  technology. I am also very much a people person, so coding in a team is a blend made for me!
        </p>
        <br />
        </>
    )
}
