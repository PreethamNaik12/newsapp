import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source, color} = this.props;
    return (
      <>
        <div style={{
          justifySelf: 'center'
        }}>
          <div className="card" style={{
            width: "24rem",
            minHeight: '10em'
        }}>
              <img src={imageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                  <span className={`badge text-bg-${color}`}>{source}</span>
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}...</p>
                  <p class="card-text"><small class="text-body-secondary">By {author===null?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                  <a rel="noreferrer" href={newsUrl} style={{
                        width: '100%',
                        padding: '0.7em'
                  }} target= "_blank" className="btn btn-sm btn-primary btn-dark">Read More</a>
              </div>
            </div>
          </div>
        </>
    )
  }
}
