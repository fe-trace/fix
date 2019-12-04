import React from 'react';
import "./../css/home.css";

export default function Home(props) {
    return (
        <div className="home-page">
            <p className="home-tit">home</p>
            <div className="home-detail">detail: { props.name }</div>
        </div>
    );
}