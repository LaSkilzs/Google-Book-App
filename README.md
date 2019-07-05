# 8th-Light-Book-App

code challenge for 8th Light, create a book app using the google api and deploy the app.

## Directions

Create an application that allows you to use the Google Books API to search for books, and deploy it somewhere that we can access through a web browser.

## How to Use

1. npm install && npm run start
2. npm run test
3. https://pensive-euler-c9ecb5.netlify.com

Type name of book that you would like to find, and click on search. If the book is available, a list of books shall appear. You can click on see more, if you would like more information about the book.

## Deliverables

1. Type in a query and display a list of books matching that query.
2. Each item in the list should include the book's author, title, and publishing company, as well as a picture of the book.
3. From each list item, you should also be able to navigate to more information about the book, but this information does not necessarily need to appear on a page within your application. In other words, this could link out to an external site with more information about that particular book.
4. Must be deployed

## FeedBack Deliverables

1. Handle the search button, so that it is disabled when inbox is empty or there is nothing to search
2. Manage local persistance, such that when user “goes back” to previous page, the search results are still present.
3. Remove books that do not have a title from the search results list.
4. Create a unit test, testing for a search list that returns a list of books without a title.
5. Make app mobile responsive
6. redeploy

# Overall Project Should Include

1. Should include testing
2. Version Control History
3. Read Me

Due date: Both components of this step are due by end of day on Wednesday, June 26.
Feedback Due: due by end of day on Saturday, June 6.

## My WorkFlow

1. Completed deliverables in order
2. Deployed using netlify

## Peer UI Design FeedBack

1. Make Cards the same height (set explicit height)
2. Set Max height to 1220 on 1400++ screens
3. Search — button (remove 10px off top on desktop)
4. Search Button - left padding and right padding give search more space
