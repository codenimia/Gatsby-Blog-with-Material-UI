import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import { Apps, ContactMail } from '@material-ui/icons'
import BookIcon from '@material-ui/icons/Book'
import MenuBookIcon from '@material-ui/icons/MenuBook'
export const navItem = [
  {
    name: 'Home',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    name: 'Tutorial',
    path: '/tutorial',
    icon: <MenuBookIcon />,
  },
  {
    name: 'Article',
    path: '/article',
    icon: <BookIcon />,
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    icon: <Apps />,
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: <ContactMail />,
  },
]
