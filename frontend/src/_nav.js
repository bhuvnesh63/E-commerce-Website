import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
  // User
  {
    component: CNavItem,
    name: 'User',
    to: '/user',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavGroup,
  //   name: 'Users',
  //   to: '/base',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //   ],
  // },
  // Products
  {
    component: CNavGroup,
    name: 'Products',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Categry',
        to: '/category',
      },
      {
        component: CNavItem,
        name: 'All Products',
        to: '/all-products',
      },
      {
        component: CNavItem,
        name: 'Latest Products',
        to: '/latest-products',
      },
    ],
  },
  // Orders
  {
    component: CNavItem,
    name: 'Order',
    to: '/order',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Orders',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    // items: [
    //   {
    //     component: CNavItem,
    //     name: 'Form Control',
    //     to: '/forms/form-control',
    //   },
    //   {
    //     component: CNavItem,
    //     name: 'Product',
    //     to: '/product',
    //   },
    //   {
    //     component: CNavItem,
    //     name: 'Checks & Radios',
    //     to: '/forms/checks-radios',
    //   },
    //   {
    //     component: CNavItem,
    //     name: 'Range',
    //     to: '/forms/range',
    //   },
    // ],
  },
  // Payments
  {
    component: CNavGroup,
    name: 'Payment',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    // items: [
    //   {
    //     component: CNavItem,
    //     name: 'CoreUI Free',
    //     to: '/icons/coreui-icons',
    //   },
    //   {
    //     component: CNavItem,
    //     name: 'CoreUI Flags',
    //     to: '/icons/flags',
    //   },
    //   {
    //     component: CNavItem,
    //     name: 'CoreUI Brands',
    //     to: '/icons/brands',
    //   },
    // ],
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Home',
        to: '/home',
      },
      {
        component: CNavItem,
        name: 'Products',
        to: '/products',
      },
      {
        component: CNavItem,
        name: 'Login/SignUp',
        to: '/login-signup',
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
