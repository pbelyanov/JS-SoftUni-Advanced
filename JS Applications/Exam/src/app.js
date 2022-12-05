import {
    homePageView
} from "./views/homePageView.js";

import {
    nav
} from "./nav.js"

document.getElementsByTagName('main')[0].innerHTML = '';
homePageView();
nav();