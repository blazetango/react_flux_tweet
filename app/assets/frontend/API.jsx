import ServerActions from './actions/ServerActions'

export default {

	getAllTweets(){
		console.log(2, 'getAllTweets');
    $.get('/tweets')
    .success(rawTweets => ServerActions.receivedTweets(rawTweets))
    .error(error => (console.log(error)))
	},
	createTweet(body){
		console.log(2, 'createTweets');
    $.post('/tweets', { body })
    .success(rawTweet => ServerActions.receivedOneTweet(rawTweet))
    .error(error => (console.log(error)))
	}
}