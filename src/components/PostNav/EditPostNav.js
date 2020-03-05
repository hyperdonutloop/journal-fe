// import React from 'react';
// import { axiosWithAuth } from '../../auth/axiosWithAuth.js';
// import { Link } from 'react-router-dom';
// import { Button, Icon } from 'semantic-ui-react';

// const EditPostNav = props => {
//   const saveEditHandler = e => {
//     e.preventDefault();

//     axiosWithAuth().put(`https://journal-be.herokuapp.com/api/entries/${props.entry.id}`, {
//       title: props.entry.title,
//       text: props.entry.text,
//       user_id: props.entry.user_id
//     })
//     .then(res => {
//       console.log(res);
//       props.routerProps.history.push('/home')
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }
//     return (
//       <div className="nav">
//         <div className="slogan">
//         </div>
//         {/* <div className="nav-bar">
//           <div className="back-button">
//             <Link to={`/post/${props.entry.id}`}>
//               <h3>
//                 <i className="chevron-left-icon" title="back" />
//               </h3>
//             </Link>
//           </div>
//         </div> */}
//         {/* <div onClick={saveEditHandler}>
//           <i aria-hidden="true" className="save large icon" title="save"></i>
//           Save
//         </div> */}
//         <Button className="button" animated onClick={saveEditHandler}>
//           <Button.Content visible>
//             Save
//           </Button.Content>
//           <Button.Content hidden>
//             <Icon name='save' />
//           </Button.Content>
//         </Button>
//       </div>
//     )
// };

// export default EditPostNav;