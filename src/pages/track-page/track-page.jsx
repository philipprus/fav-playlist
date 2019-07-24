import * as React from "react";
import { Grid, Button } from "@material-ui/core";
import Thumbnails from "../../components/Thumbnails";
import { isLoading } from "../../service/deep-objects";
import { withStyles } from '@material-ui/core/styles';


const useStyles = () => ({

    backButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    pageStyle: {
        marginBottom: "100px"
    }
  });

class TrackPage extends React.Component {

    handlerClosePage() {
        const { openPage } = this.props;
        openPage && openPage();
        this.props.history.push("/");
    }

    componentDidMount() {
        const { has_lyrics, track_id, lyrics } = this.props.track;
        const { getLyrics } = this.props;
        has_lyrics && !lyrics && getLyrics(track_id);
    }   

    renderLyrics = () => {
        const { lyrics, status_lyrics  } = this.props.track;
        if (!lyrics) {
            return <p>No lyrics</p>
        }
        if(isLoading(status_lyrics)) {
            return <p>Loading</p>
        }
        if(lyrics) {
            return (
                <div>
                    <div dangerouslySetInnerHTML={{__html: lyrics && lyrics.lyrics_body}}/>
                    <h5>Copyright</h5>
                    <p>{lyrics && lyrics.lyrics_copyright}</p>
                </div>);
        }
    }



    render(){
        const { track_name, album_name, artist_name, album  } = this.props.track;
        const { classes } = this.props;
        // const { music_genre: {music_genre_name} } = primary_genres.music_genre_list[0];

        return (
            <div>
                <Grid container className={classes.pageStyle} spacing={3}>
                    <Grid item xs={3}>
                        <Thumbnails imageUrl={album && album.album_coverart_100x100} title={album_name} />
                    </Grid>
                    <Grid item xs={9}>
                        <h2>{track_name}</h2>
                        <p><strong>Album name:</strong> { album_name }</p>
                        <p><strong>Artist name:</strong> { artist_name }</p>
                        <h3>Lyrics</h3>
                        {this.renderLyrics()}
                        {/* <p>{ music_genre_name }</p> */}
                        <Button className={classes.backButton} onClick={()=> this.handlerClosePage()}>👌 Back to playlist</Button>
                    </Grid>
                </Grid> 
            </div>);
    }
};

export default withStyles(useStyles)(TrackPage);