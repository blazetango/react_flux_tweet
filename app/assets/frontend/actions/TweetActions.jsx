import API from '../API'

export default{
	getAllTweets(){
		console.log(1, 'TweetAction');
		API.getAllTweets();
	},

	sendTweet( body ){
		console.log(1, 'TweetAction');
		API.createTweet(body);
	}
}