
const postForm = document.querySelector('form');
const tweetsDiv = document.querySelector('#tweets');

postForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the tweet content
  const tweetContent = postForm.querySelector('input[name="tweet"]').value;

  // Post the tweet
  // ...

  // Add the tweet to the DOM
  const tweetEl = document.createElement('div');
  tweetEl.classList.add('tweet');

  const tweetHeaderEl = document.createElement('div');
  tweetHeaderEl.classList.add('tweet-header');

  const usernameEl = document.createElement('span');
  usernameEl.classList.add('username');
  usernameEl.textContent = 'Your username';

  const actionsEl = document.createElement('div');
  actionsEl.classList.add('actions');

  const likeEl = document.createElement('a');
  likeEl.href = '#';
  likeEl.textContent = 'Like';

  const unlikeEl = document.createElement('a');
  unlikeEl.href = '#';
  unlikeEl.textContent = 'Unlike';

  const deleteEl = document.createElement('a');
  deleteEl.href = '#';
  deleteEl.textContent = 'Delete';

  actionsEl.appendChild(likeEl);
  actionsEl.appendChild(unlikeEl);
  actionsEl.appendChild(deleteEl);

  tweetHeaderEl.appendChild(usernameEl);
  tweetHeaderEl.appendChild(actionsEl);

  tweetEl.appendChild(tweetHeaderEl);
  tweetEl.appendChild(document.createTextNode(tweetContent));

  tweetsDiv.appendChild(tweetEl);

  // Clear the tweet content
  postForm.querySelector('input[name="tweet"]').value = '';

  // Add an event listener to the like button
  likeEl.addEventListener('click', function() {
    // Change the color of the comment to red
    tweetEl.style.color = 'red';
  });

  // Add an event listener to the unlike button
  unlikeEl.addEventListener('click', function() {
    // Remove the red color from the comment
    tweetEl.style.color = '';
  });

  // Add an event listener to the delete button
  deleteEl.addEventListener('click', function() {
    // Delete the tweet
    tweetsDiv.removeChild(tweetEl);
  });
});
