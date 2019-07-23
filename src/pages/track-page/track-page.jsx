import * as React from "react";
import { Grid, Button } from "@material-ui/core";
import Thumbnails from "../../components/Thumbnails";

export default class TrackPage extends React.Component {

    handlerClosePage() {
        const { openPage } = this.props;
        openPage && openPage();
        this.props.history.push("/");
    }

    componentDidMount() {
        const { has_lyrics, track_id } = this.props.track;
        const { getLyrics } = this.props;
        has_lyrics && getLyrics(track_id);
    }   


    render(){
        const { track_name, album_name, artist_name, primary_genres, album  } = this.props.track;
        // const { music_genre: {music_genre_name} } = primary_genres.music_genre_list[0];
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Thumbnails imageUrl={album && album.album_coverart_100x100} title={album_name} />
                    </Grid>
                    <Grid item xs={9}>
                        <h2>{track_name}</h2>
                        <p>{ album_name }</p>
                        <p>{ artist_name }</p>
                        {/* <p>{ music_genre_name }</p> */}
                        <Button onClick={()=> this.handlerClosePage()}>Back ❤❤</Button>
                    </Grid>
                </Grid> 
            </div>);
    }
};