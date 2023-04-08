import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
// import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

// import  AppHeaderDropdown  from './index'
import { logo } from '../../assets/brand/logo.js'
import AppHeaderDropdown from '../header/AppHeaderDropdown.js'
import ModalLogin from '../../auth/ModalLogout.jsx'
import { useAuthValue } from '../../auth/AuthContext.js'

const AppHeader = () => {
  const { currentUser } = useAuthValue();
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebar.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'sidebar/setSidebarShow', sidebarShow: !sidebarShow })}
        >
          {/* <CIcon icon={cilMenu} size="lg" /> */}
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          {/* <CIcon icon={logo} height={48} alt="Logo" /> */}
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
          <CNavLink to="/product" component={NavLink}>
              Products
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <p style={{paddingTop:"10px"}}>{currentUser?.email}</p>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              {/* <CIcon icon={cilEnvelopeOpen} size="lg" /> */}
              <ModalLogin />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      {/* <CHeaderDivider /> */}
      {/* <CContainer fluid> */}
        {/* <AppBreadcrumb /> */}
      {/* </CContainer> */}
    </CHeader>
  )
}

export default AppHeader
