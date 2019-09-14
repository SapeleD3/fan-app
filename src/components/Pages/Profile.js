import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles({
	Avatar: {
	display: "flex",
	"justify-content": "center",
    margin: 10,
    width: 200,
    height: 200,
  },
});

function Profile(){
  	const classes = useStyles();

  	return (
  		<div className='prof-bg'>
  			<div className="profilecard">
  				<div className="center">
	  			<h1>Profile</h1>
	  			</div>
	  			<div className="prof-details">
	  				<div className="center">
		  				<Avatar 
		  				id="avat"
		  				alt="Remy Sharp" 
		  				src="https://i.forbesimg.com/media/lists/people/jason-derulo_416x416.jpg" 
		  				className={classes.Avatar}
		  				/>
				    </div>

				    <div>
		  				<h2 className=" f2 center">Mr Richards</h2>
		  				<span className=" center">
		  					<Icon>stars</Icon>
		  					<Icon>stars</Icon>
		  					<Icon>stars</Icon>
		  					<Icon>star</Icon>
		  					<Icon>star</Icon>
		  				</span>
		  				<h3 className="center">General DRA-gon</h3>
		  				<h2 className="center">DieHard Chelsea Fan</h2>
	  				</div>
	  				<Button variant="contained" color="default" className={classes.button}>
					        Edit Profile
					        <CloudUploadIcon className={classes.rightIcon} />
					    </Button>
	  				
		  		</div>

	  		</div>
  		</div>
  		
  		
  	);
}
export default Profile;
