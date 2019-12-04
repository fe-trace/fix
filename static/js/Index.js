import React from 'react';
import "./../css/index.css";

export default function Index(props) {
    return (
        <div className="index-page">
            <p className="index-tit">index</p>
            <div className="index-detail">detail: { props.name }</div>
        </div>
    );
}