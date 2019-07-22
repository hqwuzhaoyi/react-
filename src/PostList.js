import React, { Component } from 'react';
import PostItem from './PostItem';
import './PostList.css';

class PostList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
		this.timer = null;
		this.handleVote = this.handleVote.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	componentDidMount() {
		this.timer = setTimeout(() => {
			this.setState({
				posts: [
					{
						id: 1, title: '大家一起来讨论REACT吧', author: '张三', data: '2019-09-01 10:00', vote: 0,
					},
					{
						id: 2, title: '前端框架，你最爱哪一个', author: '李四', data: '2019-09-01 10:00', vote: 0,
					}, {
						id: 3, title: '大家一起来讨论REACT吧', author: '王五', data: '2019-09-01 10:00', vote: 0,
					},
				],
			});
		}, 1000);
	}

	componentWillUnmount() {
		if (this.timer) {
			clearTimeout(this.timer);
		}
	}

	handleVote(id) {
		let { posts } = this.state;
		posts = posts.map((item) => {
			const newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
			return newItem;
		});
		this.setState({
			posts,
		});
	}

	handleSave(post) {
		const posts = this.state.posts.map((item) => {
			const newItem = item.id === post.id ? post : item;
			return newItem;
		});
		this.setState({
			posts,
		});
	}

	render() {
		const { posts } = this.state;
		return (
			<div className="container">
        帖子列表:
				<ul>
					{posts.map((item, index) => (
						<PostItem
							key={item.id}
							onVote={this.handleVote}
							post={item}
							onSave={this.handleSave}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default PostList;
