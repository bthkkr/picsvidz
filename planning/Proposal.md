

# This is my Project-2 Proposal

## Project Description

My app is called PicsVidz.  It's a photo & video app for people who want to have images photographic views and pictures on various categories. Users can see a list of all of the photos and videos which they want to choose to see, search and explore and then click on a specific photo or video to see a summary of the photo and video.  In the future, I'd like to add a feature so that users can see latest trending photos and videos.


## Wireframes


### Home
![All Photos & Videos](wireframes/Screen%20Shot%20Home2.png)

### Photo Video Details
![Photo Video details](wireframes/Screen%20Shot%20List.png)

### MVP User Stories


_**MVP User Stories**_
- _As a user, I want to see a listing of all of the photos and videos currently trending so that I can consider which ones I might want to go see._
- _As a user, I would like to click on an individual photo or video to view additional details about it including a summary of the photo or video and a link to the video so that I can better determine which photo or video I'd like to go see._
- _As a user, I want to be able to easily navigate the photos or videos on my mobile phone so that I can see photo or video details while searching exploring or navigating._


_**Post MVP Stretch Goals**_
- _As a user, I would like to be able to search for photos or videos by name so that I can more easily find a photo or video and view its details._
- _As a user, I would like to filter or search photos or videos by categories, so that I can more easily select photos or videos based on the type of the photos and videos I'm interested in watching._
- _As a user, I would like to see photos and videos of my choice or search._ 


## API

### Search photos

```json
{
  page: 1,
  per_page: 15,
  total_results: 236,
  url: "https://www.pexels.com/search/example%20query/",
  next_page: "https://api.pexels.com/v1/search/?page=2&per_page=15&query=example+query"
  photos: [{
    width: 1000,
    height: 1000,
    url: "https://www.pexels.com/photo/12345",
    photographer: "Name",
    src: {
      original: "https://*.jpg",
      large: "https://*.jpg",
      large2x: "https://*.jpg",
      medium: "https://*.jpg",
      small: "https://*.jpg",
      portrait: "https://*.jpg",
      landscape: "https://*.jpg",
      tiny: "https://*.jpg"
    }, (NEXT PHOTOS)]
  }
}
```
### Search Videos

```json
https://api.pexels.com/videos/search?query=example+query&per_page=15&page=1
```





## Component Hierarchy

![wireframepicture](Screen%20Shot.png)

#### OPTIONAL Component Details
| Component  | Description                                                      | State/Props |
| ---------- | ---------------------------------------------------------------- | :---------: |
| App        | This will make the initial data request and include React Router |    State    |
| Header     | This will render the header include the nav                      |    Props    |
| PhotosList | This will render all of the Photos                               |    Props    |
| Photo      | This will render an individual Photo                             |    Props    |
| VideosList | This will render all of the Videos                               |    Props    |
| Videos     | This will render an individual Video                             |    Props    |
| Footer     | This will render the footer                                      |    Props    |
