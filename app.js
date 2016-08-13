const CommentForm = React.createClass({
  render: function () {
    return (
      <div className="commentForm">
        Hello, World! CommentForm!
      </div>
    );
  }
});

const Comment = React.createClass({
  rawMarkup: function () {
    const md = new Remarkable();
    const rawMarkup = md.render(this.props.children.toString());
    return {__html: rawMarkup};
  },
  render: function () {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span
          dangerouslySetInnerHTML={this.rawMarkup()}
        />
      </div>
    )
  }
})

const CommentList = React.createClass({
  render: function () {
    const commentNodes = this.props.data.map(function (comment, index) {
      return (
        <Comment
          key={index}
          author={comment.author}
        >
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

const data = [
  {
    author: "Koooooooooo",
    text: "**WOW**, _so_ awesome!"
  },
  {
    author:"Jooooo",
    text: "I know, fufufuffufu"
  }
]

const CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
        <CommentForm />
        <CommentList
          data={data}/>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById("app")
)