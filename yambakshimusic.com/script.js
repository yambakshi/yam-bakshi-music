function preSaveSpotify() {
    window.open('https://accounts.spotify.com/authorize/?client_id=f836f60428f7446994bbbaffee896816&amp;response_type=code&amp;redirect_uri=https://snd.click/callback/spotify_presave&amp;scope=user-library-modify&amp;state={&quot;smartlink_id&quot;:11716,&quot;ltoken&quot;:&quot;vP7MntLSABvH&quot;,&quot;domain&quot;:&quot;https:\/\/snd.click&quot;}', 'Connect to Spotify', 'resizable=no,width=300,height=390,top=100,left=' + ((screen.width / 2) - 150));
    return false;
}

function preSaveAppleMusic() {
    window.open("https://music.apple.com/us/album/stutter-ep/1510122304?ls=1&app=itunes");
    return false;
}

function preSaveDeezer() {
    window.open('https://connect.deezer.com/oauth/auth.php?app_id=374304&redirect_uri=https://click.soundplate.com/callback/deezer_presave&perms=basic_access,email,manage_library,offline_access&state={"smartlink_id":11716,"ltoken":"vP7MntLSABvH","domain":"https: \/\/snd.click"}', 'Connect to deezer', 'resizable=no,width=300,height=390,top=100,left=' + ((screen.width / 2) - 150));
    return false;
}