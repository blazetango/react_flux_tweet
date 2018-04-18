import AppDispatcher from '../dispatcher'
import ActionTypes from '../constants'

export default {
	receivedTweets(rawTweets) {
		console.log(3, 'receivedTweets');
		AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets
		});
	},
  receivedOneTweet(rawTweet) {
		console.log(3, 'receivedONeTweet');
		AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet
		});
	}

}