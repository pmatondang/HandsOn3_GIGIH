import React from 'react';
import HomePageMenu from './homepage-menu';

export default function HomePageHeader() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-left">
                    <h1 className="logo">
                        <img src={require('../../images/new-logo.jpg')} alt="" />
                    </h1>
                </div>
                <HomePageMenu />
            </div>
        </header>
    );
}