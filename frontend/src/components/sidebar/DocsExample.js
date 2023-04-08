import PropTypes from 'prop-types'
import React from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilCode, cilMediaPlay } from '@coreui/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DocsExample = (props) => {
  const navigate = useNavigate()
  const [activeButton, setActiveButton] = useState('');

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    if(activeButton === "button1") {
      navigate("/product")
    }

  };

  const { children } = props


  return (
    <div className="example">
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink  href="#/form-control" onClick={() => handleClick('button1')}
        className={activeButton === 'button1' ? 'active' : 'tab'}>
            {/* <CIcon icon={cilMediaPlay} className="me-2" /> */}
            Add Data{/* {active ? 'Add Data' : 'Inactive'} */}
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#/product" onClick={() => handleClick('button2')}
        className={activeButton === 'button2' ? 'active' : 'tab'}>
            {/* <CIcon icon={cilCode} className="me-2" /> */}
            View {/* {active ? 'View' : 'Inactive'} */}
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className='tab' href="#/setting" >
            Setting
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent className="rounded-bottom">
        <CTabPane className="p-3 preview" visible>
          {children}
        </CTabPane>
      </CTabContent>
    </div>
  )
}

DocsExample.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
}

export default React.memo(DocsExample)
