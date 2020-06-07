import React from 'react'

const requireLogin = (WrappedComponent) => {

    return class LoginMust extends React.Component {
          constructor(props){
              super(props);

          }

         checkLoggedIn(){
        
         }

          render(){
              return(
                  <div>

                  </div>
              )
          }
    }
};

export default requireLogin;
