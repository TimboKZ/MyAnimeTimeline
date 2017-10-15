# MyAnimeTimeline

[![Join the chat at https://gitter.im/MyAnimeTimeline/Lobby](https://badges.gitter.im/MyAnimeTimeline/Lobby.svg)](https://gitter.im/MyAnimeTimeline/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
A small web app that maps anime from one's MyAnimeList account to a timeline.

# Notes for developers

First of all, if you want to play around with the source code, I suggest you make use of the Gulp config included in this repo. It has a couple of useful tasks defined, most useful of which is `gulp watch` which will run BrowserSync for you and compile TS and Sass files for you in real time. Keep in mind that this project uses NodeJS, so you might need to install it before hand and then run `npm install`.

As you've probably guessed from the paragraph above, I used TypeScript and Sass for development so to get TS compiler to work properly you might need to run `typings install`. I tried to leave comments in the source code where necessary so you shouldn't have any issues navigating around it. You might want to use the TSLint config included in this repo to preserve my coding style.