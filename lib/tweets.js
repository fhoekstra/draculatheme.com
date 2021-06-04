export async function fetchTweets(journeys) {
  for (const [index, obj] of journeys.entries()) {
    if (obj.tweets) {
      const twitterReq = await fetch(`https://api.twitter.com/2/tweets?tweet.fields=created_at,public_metrics,entities&expansions=attachments.media_keys&media.fields=url&ids=${obj.tweets.join(',')}`, {
        headers: {
          'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
        }
      });

      const twitterRes = await twitterReq.json();

      journeys[index].tweets = twitterRes.data.map((data, index) => {
        twitterRes.includes.media.map(media => {
          if (data?.attachments?.media_keys[0] === media.media_key && media.url) {
            data.image = media.url;
          }
        });

        return data;
      }).sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      });
    }
  }

  return journeys;
}