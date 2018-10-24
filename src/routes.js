import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';

// import PostActionPage from'./Pages/PostActionPage/PostActionPage';
import AccountActionPage from './pages/AccountActionPage/AccountActionPage';
// import PostListPage from './pages/PostListPage/PostListPage';
import AllPost from './pages/AllPostList/allpost';
import PostActionPage from './pages/PostActionPage/PostActionPage';
import DetailPost from './pages/DetailPage/DetailPost';
import UserPage from './pages/userPage';
import UserActionPage from './pages/UserActionPage/UserActionPage';
import Login from './components/Login/Login';
import TestPage from './containers/TestPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/about',
        exact: false,
        main: () => <TestPage />
    },
    {
        path: '/post/add',
        exact: false,
        main: ({ location, history }) => <PostActionPage location={location} history={history} />
    },
    {
        path: '/posts/:id/edit',
        exact: false,
        main: ({ match, history }) => <PostActionPage match={match} history={history} />
    },
    {
        path: '/categories/:id/posts',
        exact: false,
        main: ({ match, history }) => <DetailPost match={match} history={history} />
    },
    {
        path: '/list',
        exact: false,
        main: () =><AllPost />
    },
    // {
    //     path: '/post-add',
    //     exact: false,
    //     main: () =><PostActionPage />
    // },
    {
        path: '/account',
        exact: false,
        main:  ({ match, location }) =><AccountActionPage match={match} location={location}  />
    },
    {
        path: '/login',
        exact: false,
        main: ({location, history}) =><Login location={location} history={history}/>
    },
      {
        path: '/logout',
        exact: false,
        main: ({location}) =><Login location={location} />
    },
    {
        path: '/register',
        exact: false,
        main: ({ location, history }) => <UserActionPage location={location} history={history} />
    },

    {
        path: '/userpage',
        exact: false,
        main: ({ location, history }) => <UserPage location={location} history={history} />
    },

    
    {
        
        path: '/',
        exact: false,
        main: () =><NotFound />
    },
];

export default routes;