# Web Development Final Project - *Bookshelf Chronicles*

Submitted by: **David Cao 1**

This web app: **A forum-like website used to track book reviews / recommendations for me and my friends!**

Time spent: **24** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **A create form that allows the user to create posts**
- [X] **Posts have a title and optionally additional textual content and/or an image added as an external image URL**
- [X] **A home feed displaying previously created posts**
- [X] **By default, the time created, title, and number of upvotes for each post is shown on the feed**
- [X] **Clicking on a post shall direct the user to a new page for the selected post**
- [X] **Users can sort posts by either their created time or upvotes count**
- [X] **Users can search for posts by title**
- [X] **A separate post page for each created post, where any additional information is shown is linked whenever a user clicks a post**
- [X] **Users can leave comments underneath a post on the post's separate page**
- [X] **Each post should have an upvote button on the post's page. Each click increases its upvotes count by one and users can upvote any number of times**
- [X] **A previously created post can be edited or deleted from its post page**

The following **optional** features are implemented:

- [X] Users can only edit and deleted posts or delete comments by entering the secret key, which is set by the user during post creation
    - each individual post, when created, has to be set with a secret key. That secret key is salted and hashed before getting sent to the database.
- [X] Upon launching the web app, the user is assigned a random user ID. It will be associated with all posts and comments that they make and displayed on them.
    - I have it so that the website will prompt the user for their name when they try to comment or create a post. If they don't then an automatic random name will be given to them.
- [ ] Users can repost a previous post by referencing its post ID. On the post page of the new post, the referenced post is displayed and linked, creating a thread
- [ ] Users can customize the interface of the web app
- [X] Users can share and view web videos
- [X] Users can set flags while creating a post. Then users can filter posts by flags on the home feed.
    - My search bar can filter by category and by title of the post!
    - Uses fuzzy searching by the Fuse.js library
- [ ] Users can upload images directly from their local machine as an image file
- [X] Display a loading animation whenever data is being fetched

The following **additional** features are implemented:

* [X] Loads of custom css personalization, I tried to go for a more pastel type look
* [X] Mobile responsive
* [X] Utilizes **open library** api to fetch books and displays it in a nice list. Once a user clicks on one of the books fetched from the list, it will take them to the create a page with the title, image, and content filled out to help them get started on reviewing that book! 
* [X] Able to upload images, media, change the header etc with a custom built CKEditor5.



## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='./output2x.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF recorded using OBS and converted to GIF (.mkv --> .gif) by FFMPEG
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

This was by far the project that I spent the most time on and found the most rewarding. I had to learn a lot of different things with this project
and it was definitely very satisfying finishing. 

Some things I had challenges with:

1. Figuring out how to salt and hash a website using bcrypt. I found out that bcrypt doesn't work with React so I had to use a bcryptjs instead so that took a while to figure out.
2. Figuring out how to use a custom build CKEditor5
    - I really wanted to be able to upload images via URL and the only way to do that was a custom build of CKEditor5. Nonetheless, I figured it out after a long time
3. Working with media embeds
    - For some reason, CKEditor5 sends back media as an oembed and not an iframe. I had to use regex to go through my HTML string and filter the oembeds, and change them into iframes! It was pretty crazy.
4. Styling too a VERY long time. I originally was using bootstrap, but after a certain point, it became faster for me to just use my own type of bootstrap. That is, create classes that style certain things and just adding them to the divs! For example, I had a 'red-button' class that I could just tag on the buttons I wanted red.
5. Learning local storage was pretty cool, if I had more time, I could probably learn how to utilize this to upload images itself. 
6. Using the Open library API and getting cover images.
    - For some reason they don't have an up to date documentation for getting covers on their website, I had to use a different url to get the cover and a different one to get the description! Then I combined it at the end...

Additionally, Netlify flagged me for being a spam account so I couldn't make a Netlify account to deploy my website. Good thing I could use Github Pages to deploy it pretty easily. 
Here is the link to the deployed site: https://dave-cao.github.io/Book-Chronicles/



## License

    Copyright [2023] [David Cao]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
