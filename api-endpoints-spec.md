# API endpoints

## `GET /home-feed`

Gets the content for the user's home feed.

URL parameters: 
- `?favourites`: `true | false` - Only show favourites (content the user has added manually using the "Add to Digest" buttons in other BBC apps)

```json
[
    {
        "id": "c0ewlxvlw81o",
        "favourite": true,
        "category": "news-article",
        "data": {
            "title": "Chris McCausland's journey from salesman to Strictly winner",
            "image": "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/4252/live/f197d930-b944-11ef-a0f2-fd81ae5962f4.jpg.webp"
        }
    },
    {
        "id": "b006vb2f",
        "favourite": false,
        "category": "iplayer-programme",
        "data": {
            "title": "Escape to the Country",
            "image": "https://ichef.bbci.co.uk/images/ic/464x261/p0hwj6l0.jpg",
        }
    },
    {
        "id": "p04d42rc",
        "favourite": true,
        "category": "sounds-programme",
        "data": {
            "title": "CrowdScience",
            "image": "https://ichef.bbci.co.uk/images/ic/1008x567/p0d0l8bz.jpg"
        }
    }
]
```

## `GET /news-articles/:id`

Gets the details of a news article.

```json
{
  "id": "c0ewlxvlw81o",
  "favourite": true,
  "title": "Chris McCausland's journey from salesman to Strictly winner",
  "image": "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/4252/live/f197d930-b944-11ef-a0f2-fd81ae5962f4.jpg.webp",
  "publicationDate": "2024-12-12 10:01:01",
  "content": "..."
}
```

> What format should the content be in? Markdown?

## `GET /sounds-programmes/:id`

Gets the details of a Sounds programme.

```json
{
    "id": "p04d42rc",
    "favourite": false,
    "title": "CrowdScience",
    "image": "https://ichef.bbci.co.uk/images/ic/1008x567/p0d0l8bz.jpg",
    "episodes": [
      {
        "id": "w3ct5rj2",
        "title": "Why can't my dog live as long as me?",
        "image": "https://ichef.bbci.co.uk/images/ic/320x320/p0k5wb96.jpg.webp",
        "mediaUrl": "/media/audio-1234.mp3"
      }
    ]
}
```

`mediaUrl` will be the URL where the actual MP3 is stored in our backend.

## `GET /iplayer-programmes/:id`

```json
{
    "id": "b006vb2f",
    "favourite": false,
    "title": "Escape to the Country",
    "image": "https://ichef.bbci.co.uk/images/ic/464x261/p0hwj6l0.jpg",
    "episodes": [
      {
        "id": "m0025x26",
        "title": "Series 25: 24. Northumberland",
        "image": "https://ichef.bbci.co.uk/images/ic/464x261/p0k5vwbf.jpg",
        "mediaUrl": "/media/video-1234.mp4"
      }
    ]
}
```

`mediaUrl` will be the URL where the actual MP4 is stored in our backend.

## `GET /media/:file`

Download audio/video file for playback.
