import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PostItem.css';
import like from './images/like.png';

// function PostItem(props) {
// 	const handleClick = () => {
// 		props.onVote(props.post.id);
// 	};
// 	const { post } = props;
// 	return (
// 		<li className="item">
// 			<div className="title">{post.title}</div>
// 			<div>
//         创建人:
// 				<span>{post.author}</span>
// 			</div>
// 			<div>
//         创建时间：
// 				<span>{post.date}</span>
// 			</div>
// 			<div className="like">
// 				<span><img src={like} onClick={handleClick} /></span>
// 				<span>{post.vote}</span>
// 			</div>
// 		</li>
// 	);
// }

class PostItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			post: props.post,
		};
		this.handleVote = this.handleVote.bind(this);
		this.handleEditPost = this.handleEditPost.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.post !== nextProps.post) {
			this.setState({
				post: nextProps.post,
			});
		}
	}

	handleVote() {
		this.props.onVote(this.props.post.id);
	}

	handleEditPost() {
		const { editing } = this.state;
		// 当前处于编辑态，调用父组件传递的onSave方法保存帖子
		if (editing) {
			this.props.onSave({
				...this.state.post,
				date: this.getFormatDate(),
			});
		}
		this.setState({
			editing: !editing,
		});
	}

	handleTitleChange(event) {
		const newPost = { ...this.state.post, title: event.target.value };
		this.setState({
			post: newPost,
		});
	}

	getFormatDate() {

	}

	render() {
		const { post } = this.state;
		return (
			<li className="item">
				<div className="title">
					{this.state.editing
						? (
							<form>
								<textarea value={post.title} onChange={this.handleTitleChange} />
							</form>
						) : post.title}
				</div>
				<div>
        			创建人:
					<span>{post.author}</span>
				</div>
				<div>
       				 创建时间：
					<span>{post.date}</span>
				</div>
				<div className="like">
					<span><img src={like} onClick={this.handleVote} /></span>
					<span>{post.vote}</span>
				</div>
				<div>
					<button onClick={this.handleEditPost}>
						{this.state.editing ? '保存' : '编辑'}
					</button>
				</div>
			</li>
		);
	}
}

PostItem.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		author: PropTypes.string,
		date: PropTypes.string,
		vote: PropTypes.number,
	}).isRequired,
	onVote: PropTypes.func.isRequired,
};

export default PostItem;
