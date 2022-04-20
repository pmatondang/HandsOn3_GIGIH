import React from "react"
import { ButtonSelect } from "../../components/material-ui/ui-button.js";
import data from '../../data/data-sample.js';
import HomePageMainRight from "./homepage-main-right.js";

const HomePageMain = ({ url, name, spotify, singer, track_num, release_date }) => {
    return (
        <div className="container">
            <div className="data">
                <div className="main-left">
                    <div className="top-wrapper">
                        <h1 className="h1">WELCOME TO MY PAGE </h1>
                        <div className="playlist">
                            <div className="image-div">
                                <center><img className="img" src={url} alt="album" /></center>
                            </div>
                            <p className="playlist-icon">{name}</p>
                            <p className="txt-contents">{singer} - {track_num} track ({release_date})</p>
                            <div className="aHref">
                                <a href={spotify} >Go to Spotify </a>
                            </div>
                            <div className="button-div">
                                <ButtonSelect type='submit'>Select</ButtonSelect>
                            </div>
                        </div>
                    </div>
                </div>
                <HomePageMainRight />
            </div>  
        </div >
    )
};

const RenderAlbumPage = () => {
    return data.map((album) => (
        <div>
            < HomePageMain
                key={album.album.album_type}
                spotify={album.album.external_urls.spotify}
                singer={album.album.artists[0].name}
                url={album.album.images[1].url}
                release_date={album.album.release_date}
                name={album.album.name}
                track_num={album.album.total_tracks}
            />
        </div>
    ));
};

export default RenderAlbumPage;