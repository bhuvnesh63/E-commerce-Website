// // import React from 'react'
// // import { useSelector, useDispatch } from 'react-redux'
// // import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
// // import { AppSidebarNav } from './AppSidebarNav'
// // import SimpleBar from 'simplebar-react'
// // import 'simplebar/dist/simplebar.min.css'


// // import navigation from '../_nav'

// // const AppSidebar = () => {
// //   const dispatch = useDispatch()
// //   const unfoldable = useSelector((state) => state.sidebarUnfoldable)
// //   const sidebarShow = useSelector(state => state.sidebarShow);

// //   return (
// //     <CSidebar
// //       position="fixed"
// //       unfoldable={unfoldable}
// //       visible={sidebarShow}
// //       onVisibleChange={(visible) => {
// //         dispatch({ type: 'set', sidebarShow: visible })
// //       }}
// //     >
// //       <CSidebarBrand className="d-none d-md-flex" to="/">
// //         <h5>Ecommerce Admin</h5>
// //       </CSidebarBrand>
// //       <CSidebarNav>
// //         <SimpleBar>
// //           <AppSidebarNav items={navigation} />
// //         </SimpleBar>
// //       </CSidebarNav>
// //       <CSidebarToggler
// //         className="d-none d-lg-flex"
// //         onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
// //       />
// //     </CSidebar>
// //   )
// // }

// // export default React.memo(AppSidebar)
// // import React from 'react'
// // import { useSelector, useDispatch } from 'react-redux'
// // import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
// // import { AppSidebarNav } from './AppSidebarNav'
// // import SimpleBar from 'simplebar-react'
// // import 'simplebar/dist/simplebar.min.css'

// // // sidebar nav config
// // import navigation from '../_nav'

// // const AppSidebar = () => {
// //   const dispatch = useDispatch()
// //   const unfoldable = useSelector((state) => state.sidebarUnfoldable)
// //   const sidebarShow = useSelector((state) => state.sidebarShow)

// //   const handleSidebarToggle = () => {
// //     dispatch({ type: 'set', sidebarShow: !sidebarShow })
// //   }

// //   return (
// //     <CSidebar
// //       position="fixed"
// //       unfoldable={unfoldable}
// //       visible={sidebarShow}
// //       onVisibleChange={handleSidebarToggle}
// //     >
// //       <CSidebarBrand className="d-none d-md-flex" to="/">
// //         <h5>Ecommerce Admin</h5>
// //       </CSidebarBrand>
// //       <CSidebarNav>
// //         <SimpleBar>
// //           <AppSidebarNav items={navigation} />
// //         </SimpleBar>
// //       </CSidebarNav>
// //       <CSidebarToggler
// //         className="d-none d-lg-flex"
// //         onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
// //       />
// //     </CSidebar>
// //   )
// // }

// // export default React.memo(AppSidebar)
// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
// import { AppSidebarNav } from './AppSidebarNav'
// import SimpleBar from 'simplebar-react'
// import 'simplebar/dist/simplebar.min.css'
// import { toggleSidebarShow, toggleSidebarUnfoldable } from '../store/actions/changeStateAction';

// import navigation from '../_nav'

// const AppSidebar = () => {
//   const dispatch = useDispatch();
//   const unfoldable = useSelector((state) => state.sidebar.sidebarUnfoldable);
//   const sidebarShow = useSelector(state => state.sidebar.sidebarShow);

//   // debugger
//   const toggleSidebar = () => {
//     dispatch(toggleSidebarShow(!sidebarShow));
//   }

//   const toggleUnfoldable = () => {
//     dispatch(toggleSidebarUnfoldable(!unfoldable));
//   }

//   return (
//     <CSidebar
//       position="fixed"
//       unfoldable={unfoldable}
//       visible={sidebarShow}
//       onVisibleChange={toggleSidebar}
//     >
//       <CSidebarBrand className="d-none d-md-flex" to="/">
//         <h5>Ecommerce Admin</h5>
//       </CSidebarBrand>
//       <CSidebarNav>
//         <SimpleBar>
//           <AppSidebarNav items={navigation} />
//         </SimpleBar>
//       </CSidebarNav>
//       <CSidebarToggler
//         className="d-none d-lg-flex"
//         onClick={toggleUnfoldable}
//       />
//     </CSidebar>
//   )
// }

// export default React.memo(AppSidebar)

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react';
import { AppSidebarNav } from './AppSidebarNav';
import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar.min.css';

// sidebar nav config
import navigation from '../../_nav';

const AppSidebar = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector(state => state.sidebar.sidebarShow);

  return (
    <CSidebar
      position="fixed"
      visible={sidebarShow}
      onVisibleChange={visible => {
        dispatch({ type: 'sidebar/setSidebarUnfoldable', payload: visible });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <h5>Ecommerce Admin</h5>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      {/* <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'sidebar/toggleSidebarUnfoldable' })}
      /> */}
    </CSidebar>
  );
};

export default React.memo(AppSidebar);