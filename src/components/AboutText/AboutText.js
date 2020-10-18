import React from 'react'
import "./AboutText.css"

export default function AboutText() {
    return (
        <>
        <p>
            <img src={require("../../assets/headshot.png")} class="img-thumbnail mr-3" alt="profile-pic"/>
    Hello my name is Blake Ehler, I am a web developer. I've been using computers my entire life. As a kid I mostly played video games but I got into coding. I did the free Codecademy courses and any YouTube ones as well. I like the problem solving aspect of coding and the feeling when you finlly figure out a problem is what makes coding enjoyable. After high school I enrolled in the University of Arizona's Full-Stack Developement program. 
        </p>
        <br />
        </>
    )
}
