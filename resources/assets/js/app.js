/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

window._ = require('lodash');

// window.Vue = require('vue');
import Vue from 'vue'
//import Vue from 'vue/dist/vue.js'

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */



/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
    next();
});

// Vue.component(
//     'passport-clients',
//     require('./components/passport/Clients.vue')
// );
//
// Vue.component(
//     'passport-authorized-clients',
//     require('./components/passport/AuthorizedClients.vue')
// );
//
// Vue.component(
//     'passport-personal-access-tokens',
//     require('./components/passport/PersonalAccessTokens.vue')
// );

// testing
import App from './picturesque-app.vue'
import Home from './components/picturesque-home.vue'
import Blog from './components/picturesque-blog.vue'
import Post from './components/picturesque-post.vue'
import About from './components/picturesque-about.vue'
import Contact from './components/picturesque-contact.vue'
import Admin from './components/picturesque-admin.vue'
import AdminPosts from './components/admin/picturesque-posts.vue'
import AdminPostsForm from './components/admin/picturesque-posts-form.vue'
import AdminCategories from './components/admin/picturesque-categories.vue'
import AdminCategoriesForm from './components/admin/picturesque-categories-form.vue'
import AdminPhotos from './components/admin/picturesque-photos.vue'
import AdminPhotosForm from './components/admin/picturesque-photos-form.vue'
import AdminUsers from './components/admin/picturesque-users.vue'
import AdminUsersForm from './components/admin/picturesque-users-form.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/blog/:slug', name: 'post', component: Post },
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/admin', name: 'contact', component: Admin },

    { path: '/admin/posts', name: 'admin.posts', component: AdminPosts },
    { path: '/admin/posts/create', name: 'admin.posts.create', component: AdminPostsForm },
    { path: '/admin/posts/:id/edit', name: 'admin.posts.edit', component: AdminPostsForm },
    { path: '/admin/categories', name: 'admin.categories', component: AdminCategories },
    { path: '/admin/categories/create', name: 'admin.categories.create', component: AdminCategoriesForm },
    { path: '/admin/categories/:id/edit', name: 'admin.categories.edit', component: AdminCategoriesForm },
    { path: '/admin/photos', name: 'admin.photos', component: AdminPhotos },
    { path: '/admin/photos/create', name: 'admin.photos.create', component: AdminPhotosForm },
    { path: '/admin/photos/:id/edit', name: 'admin.photos.edit', component: AdminPhotosForm },
    { path: '/admin/users', name: 'admin.users', component: AdminUsers },
    { path: '/admin/users/create', name: 'admin.users.create', component: AdminUsersForm },
    { path: '/admin/users/:id/edit', name: 'admin.users.edit', component: AdminUsersForm },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => {
        return h(App)
    }
})

// new Vue({
//     router,
//     App
// })