---
created: 2023-12-20
updated: 2023-12-20
author: David Cao
---

<h1 align='center'>📚 Book Chronicles</h1>
<h4 align='center'>A forum-like website used to track book reviews / recommendations for me and my friends!</h4>
<br>

<!-- Video walkthrough or image -->
<img src='./bookshelf.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<br>

<!-- List links to the project here (eg: live-link, youtube video) -->
- **Visit the project at: https://dave-cao.github.io/Book-Chronicles/**
- **Demonstration Video: coming soon...**


<!-- ABOUT THE PROJECT -->
## About

This project is a book review website I created as a place to store my book reviews and recommendations. I wanted to create a hub where me and my friends could geek out on books that we've read and talk about them!

The website features a login system, a rich text editor to write your reviews, and the usage of a books API to grab book data!

### Why Did I Build it?

I built this as a final project for CodePath Intermediate Web Development course. But also, it's a cool place to store my book reviews!

<!-- USAGE EXAMPLES -->
## Usage

1. Go to https://dave-cao.github.io/Book-Chronicles/
2. Sign up and make an account
3. Create a post!

_For a more comprehensive example of using this application, refer to this [video](coming soon...)_

## Notes

This was by far the project that I spent the most time on and found the most rewarding during this course. I had to learn a lot of different things with this project
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


<!-- ROADMAP -->
## Roadmap

For now I won't be working on this other than adding my book reviews as I continue reading. However, I do want to make it so it only shows the top `x` amount of posts per page. And then at the bottom, it has a next button.

Some additional features that I am thinking about is embedding a post within a post. Perhaps I reviewed a book and another friend wants to review the same book. We can have it on the same thread.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->
## Contact

#### David Cao
- Email: sirdavidcao@gmail.com
- Personal Website: https://davidcao.xyz/
- [Other Projects](https://davidcao.xyz/ProjectsPage/index.html)
- [Youtube](https://www.youtube.com/channel/UCEnBPbnNnqhQIIhW1uLXrLA)
- [Linkedin](https://www.linkedin.com/in/david-cao99/)


## License

    Copyright [2024] [David Cao]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
