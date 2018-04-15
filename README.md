# React-Youtube-App

A react based application that shows Youtube videos realted to the search query. It uses Youtube Api for fetching the video list and then it renders them instantly using react. 

### Getting Started

#### Dependencies

Nodejs - For npm

Google Api Key- For Youtube Search Api

Clone the repo in your computer

Open terminal and run these commands

```

> npm install
> npm start

```
Open index.js in the src folder and change the API_KEY with your own YoutubeApiKey

```
> const API_KEY = '<YOUR_API_KEY>';
```
I am using lodash for throttling of the search query result. The default throttle time is 500, i.e the search functions only works after 500ms. You can edit it in the 'videoSearch' function in 'src/index.js'.

```
>  const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

```




