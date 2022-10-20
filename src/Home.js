import React, { Component } from 'react';
import { Input, Button, Typography } from '@material-ui/core';
import ShortUniqueId from 'short-unique-id';

const uid = new ShortUniqueId({ length: 10 });

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			url: uid()
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length - 1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<div>
					<Typography
						variant='h3'
						component="h1"
						margin="5"
					>
						Classroomeditor
					</Typography>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
					<Input
						placeholder="URL"
						style={{
							fontSize: '35px',
							margin: '20px'
						}}
						onChange={e => this.handleChange(e)}
						value={this.state.url} />
					<Button variant="contained" color="primary" onClick={this.join}>Go</Button>
				</div>
			</div>
		)
	}
}

export default Home;