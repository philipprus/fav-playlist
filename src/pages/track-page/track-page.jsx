import * as React from "react";
import { Grid, Button } from "@material-ui/core";
import Thumbnails from "../../components/Thumbnails";
import { isLoading, isIdle } from "../../service/deep-objects";

export default class TrackPage extends React.Component {

    handlerClosePage() {
        const { openPage } = this.props;
        openPage && openPage();
        this.props.history.push("/");
    }

    componentDidMount() {
        const { has_lyrics, track_id } = this.props.track;
        const { getLyrics } = this.props;
        has_lyrics && console.log(has_lyrics);
        has_lyrics && getLyrics(track_id);
    }   

    renderLyrics = () => {
        const { lyrics  } = this.props.track;
        if (!lyrics) {
            return <p>No lyrics</p>
        }
        if(lyrics && isLoading(lyrics)) {
            return <p>Loading</p>
        }
        if(lyrics && isIdle(lyrics)) {
            return <p>{lyrics && lyrics.lyrics_body}</p>
        }
    }

    render(){
        const { track_name, album_name, artist_name, album  } = this.props.track;
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
                        <h3>Lyrics</h3>
                        <p>{this.renderLyrics()}</p>
                        {/* <p>{ music_genre_name }</p> */}
                        <Button onClick={()=> this.handlerClosePage()}>Back ❤❤</Button>
                    </Grid>
                </Grid> 
            </div>);
    }
};