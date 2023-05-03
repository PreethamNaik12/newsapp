import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  
  static PropsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  constructor(props){
    super(props);
    console.log('hello I am a constructor from news component');
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title =`News Monkey- ${this.capitalize(this.props.category)}`;
  } 

  
  async componentDidMount(){
    console.log('cdm');
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    this.props.setProgress(55);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(70);
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      }
    );
    this.props.setProgress(100);
  }

  handlePrevClick = async () => {
    console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState(
      {
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
      }
    )

  }
  handleNextClick = async () => {
    if (Math.ceil(this.state.page + 1 > this.state.totalResults/this.props.pageSize)){

    }
    else {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState(
      {
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      }
    )
    }
  }

  fetchMoreData = async () => {
      this.setState({page:this.state.page + 1});
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      });
  };
      

  render() {
    console.log('rendering...');
    return (
      <>
        <h1 className='text-center'>Top Headlines on {`${this.capitalize(this.props.category)}`}</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading && <Spinner />}
        >
        
        <div className='container my-3' style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(23em, 1fr))',
          gridGap: '1em',
          margin: 'auto',
          width: '97%'
        }}>
              {this.state.articles.map((element=>{
              return <NewsItem key={element.url} title = {element.title===null?element.title:element.title} description = {element.description===null?element.description:element.description.slice(0, 45)} imageUrl= {element.urlToImage===null?"https://img.freepik.com/free-vector/tv-presenters-broadcasting-news-modern-television-studio-with-cameraman-light-equipment-earth-huge-panoramic-screen-anchorman-newscaster-reporting-program-cartoon-vector-illustration_107791-7902.jpg?w=2000":element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} color={this.props.color} />
            }))}
                  

            </div>
            
        </InfiniteScroll>
            
      </>
    )
  }
}

