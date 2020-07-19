import React from 'react';
import PropTypes from 'prop-types';

  
const Profile = props => {
    return (
  <div>
    {props.handleName(props.name)}

      <p>FullName:{props.name}</p>
      <p>bio:{props.bio}</p>
      <p>Profession:{props.profession}</p>
      {props.children}



  </div>



);
};

Profile.defaultProps={
    name: "None",
    bio: "None",
    profession: "None"
};



Profile.propTypes = {
  profile: PropTypes.any
}
export default Profile;