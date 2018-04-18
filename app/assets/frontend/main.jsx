import React, { Component } from "react";
import ReactDOM from 'react-dom';
import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';
import TweetStore from './stores/TweetStore';
import TweetActions from './actions/TweetActions';

TweetActions.getAllTweets();


let getAppState = () => {
  return {tweetsList: TweetStore.getAll()};
}


class Main extends Component{
  constructor(props) {
    super(props);
    this.state= getAppState();
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    TweetStore.addChangeListener(this._onChange)
   }

  componentWillUnMount() {
    TweetStore.removeChangeListener(this._onChange)
   }
   _onChange(){
    console.log(5, 'onchange function  ')
    this.setState(getAppState());
   }

    render() {
      return (
      <div className='container'>
        <TweetBox />
        <TweetList tweets={this.state.tweetsList} />
      </div>
      );
    }
  }

	let documentReady = () =>{
	  ReactDOM.render(
		<Main />,
		document.getElementById('react')
		);
	};

$(documentReady)