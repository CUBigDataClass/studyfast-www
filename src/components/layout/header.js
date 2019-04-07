import React from 'react';

function Header() {
	return (
		<header style={headerStyle}>
			<h1>YouTube Caption Search</h1>
		</header>
	)
}

const headerStyle = {
    background: 'rgb(255, 255, 255)',
    color: 'rgb(255, 0, 0)',
    textAlign: 'center',
    paddingTop: '35px',
    height: '125px',
    fontSize: '20px',
    marginBottom: '23px'
}



export default Header;