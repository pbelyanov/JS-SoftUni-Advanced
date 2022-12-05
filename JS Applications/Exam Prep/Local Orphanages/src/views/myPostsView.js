import {
    directive,
    html,
    render
} from "../../node_modules/lit-html/lit-html.js"
import {
    getRequest
} from "../util/api.js"
import {
    detailsView
} from "./detailsView.js"

export async function myPosts(event) {


    const userID = sessionStorage.ownerID
    const URL = `http://localhost:3030/data/posts?where=_ownerId%3D%22${userID}%22&sortBy=_createdOn%20desc`
    const main = document.getElementById('main-content')
    const baseView = () => html `<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    <!-- Display a div with information about every post (if any)-->
    <div class="my-posts">
    </div>
    <!-- Display an h1 if there are no posts -->
    <h1 class="title no-posts-title">You have no posts yet!</h1>
</section>`


    function post(title, img, id) {
        const target = document.getElementsByClassName('my-posts')[0];

        const post = document.createElement('div');
        post.setAttribute('class', 'post')
        post.innerHTML = `
        <h2 class="post-title">${title}</h2>
        <img
          class="post-image"
          src="${img}"
          alt="Material Image"
        />
        <div class="btn-wrapper">
          <a href="#" class="details-btn btn">Details</a>
        </div>
    `
        target.appendChild(post)
        post.getElementsByTagName('a')[0].setAttribute('data-id', `${id}`)

        post.getElementsByTagName('a')[0].addEventListener('click', detailsView)
    }

    render(baseView(), main)


    const data = await getRequest(URL)
    for (let row of data) {
        if (row.title !== '') {
            document.getElementsByTagName('h1')[2].style.display = 'none'
        }
        post(row.title, row.imageUrl, row._id)
    }
}