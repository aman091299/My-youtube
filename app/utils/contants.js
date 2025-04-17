export const ButtonListName=
["ALL","Gaming","Live","Soccer","Music","Cricket","Drama","Cooking","Adventure","Travel","Books","Listening","Writting","Comedy","MakeUp","SkinCare"]

export const YOUTUBE_VIDEOS_API=
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyChtM2_7eLXjggTGBy6RHIKtm7wY-aD1-4"


export const YOUTUBE_SUGGESTION_API="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="


export const randomName=(length)=> {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
      
    }
    return randomString;
}
