import React from 'react';
const { Component } = React;

class BlogPostPreview extends Component {
  render() {
    const { title, excerpt } = this.props;
    return (
      <div className="col-12 col-md-4 mb-4">
        <div className="card blog-post-preview">
          <div className="card-header font-weight-bold">
            {title}
          </div>
          <div className="card-body text-left">
            {excerpt}
          </div>
        </div>
      </div>
    );
  }
};

export default BlogPostPreview;