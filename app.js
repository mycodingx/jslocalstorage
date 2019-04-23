// Variables
const tweetList = document.getElementById('tweet-list');

// Event Listensers
eventListeners();

function eventListeners() {
    // Form Submission 
    document.querySelector('#form').addEventListener('submit', newTweet);

    // Remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

    // Document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}

// Functions

function newTweet(e) {
    e.preventDefault();
    // Read the textarea value
    const tweet = document.getElementById('tweet').value;

    //create the remove button
    const removeBtn = document.createElement('span');
    removeBtn.classList = 'badge badge-danger badge-pill remove-tweet';
    removeBtn.textContent = 'X';

    //create an <li> element
    const li = document.createElement('li');
    li.textContent = tweet;
    li.classList = 'list-group-item d-flex justify-content-between align-items-center';


    // Add the remove button to each tweet
    li.appendChild(removeBtn);

    // Add tweet to the list
    tweetList.appendChild(li);

    // Add tweet to localStorage
    addTweetLocalStorage(tweet);

    // Alert the tweet has been added
    swal("Greate!", "Your Tweet Has Been Added Successfully!", "success");

    // Clear out the form
    this.reset();
}

// Remove the tweet from DOM

function removeTweet(e) {
    if (e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }

    // Remove from Storage
    removeTweetLocalStorage(e.target.parentElement.textContent);
}

// Adds the tweet into local storage

function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    // Add the tweet into the array
    tweets.push(tweet);

    // Convert tweet array into String
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Get all tweets from local storage

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    // Get the values, if null is returned the we create an empty array
    if (tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(tweetsLS);
    }

    return tweets;

}

// Prints tweets in localStorage on Load

function localStorageOnLoad() {
    let tweets = getTweetsFromStorage();

    // Loop through storage and then print the values
    tweets.forEach(tweet => {
        //create the remove button
        const removeBtn = document.createElement('span');
        removeBtn.classList = 'badge badge-danger badge-pill remove-tweet';
        removeBtn.textContent = 'X';

        //create an <li> element
        const li = document.createElement('li');
        li.textContent = tweet;
        li.classList = 'list-group-item d-flex justify-content-between align-items-center';


        // Add the remove button to each tweet
        li.appendChild(removeBtn);

        // Add tweet to the list
        tweetList.appendChild(li);
    });
}

// Removes the tweet from local storage

function removeTweetLocalStorage(tweet) {
    // Get tweets from storage
    let tweets = getTweetsFromStorage();

    // Remove the X from tweet

    const tweetDelete = tweet.substring(0, tweet.length - 1);

    // Loop through the tweet and remove the tweet that's equal
    tweets.forEach((tweetLS, index) => {
        if (tweetDelete === tweetLS) {
            tweets.splice(index, 1);
        }
    });

    // Save the data
    localStorage.setItem('tweets', JSON.stringify(tweets));

    // Alert the tweet has been removed
    swal("Deleted!", "Your Tweet Has Been Removed Successfully!", "error");
}