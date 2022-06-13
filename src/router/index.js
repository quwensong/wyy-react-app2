import React from 'react';
import { Redirect } from 'react-router-dom';

import Discover from '@/pages/discover'
import Recommend from '@/pages/discover/children-pages/recommend';
import Ranking from '@/pages/discover/children-pages/ranking';
import Songs from "@/pages/discover/children-pages/songs";
import Djradio from "@/pages/discover/children-pages/djradio";
import Artist from "@/pages/discover/children-pages/artist";
import Album from "@/pages/discover/children-pages/album";
import Players from "@/pages/players";

import Friends from '@/pages/friends'
import Mine from '@/pages/mine';


const routes = [
  {
    path: '/',
    exact:true,
    render:()=>(<Redirect to="/discover"/>)
  },
  { 
    path: '/discover',
    component:Discover,
    routesroutes: [
    {
      path: "/discover",
      exact: true,
      render:()=>(<Redirect to="/discover/recommend"/>)
    },
    {
      path: "/discover/recommend",
      component: Recommend
    },
    {
      path: "/discover/ranking",
      component: Ranking
    },
    {
      path: "/discover/songs",
      component: Songs
    },
    {
      path: "/discover/djradio",
      exact: true,
      component: Djradio
    },
    {
      path: "/discover/artist",
      component: Artist
    },
    {
      path: "/discover/album",
      component: Album
    },
    {
      path: "/discover/player",
      component: Players
    }
  ]},
  { path: '/mine', component:Mine},
  { path: '/friends', component:Friends }
  
]

export default routes;