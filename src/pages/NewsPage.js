import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class NewsPage extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    errors: null
  };

  getArticles() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=416f3054acfe4dbb96140b1066ae0d4a"
      )
      .then(response => {
        return response.data.articles.map(article => ({
          name: `${article.source.name}`,
          date: `${article.publishedAt}`,
          title: `${article.title}`,
          url: `${article.url}`,
          description: `${article.description}`,
          image: `${article.urlToImage}`
          
        }));
      })
      .then(articles => {
        this.setState({
          articles,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { isLoading, articles } = this.state;
    return (
      <React.Fragment>
      <div className="container">
      <div className="row">
          <div className="col-md-12">
              <div className="alert alert-primary" role="alert">
                 <h2 className="text-center">HEAD NEWS</h2> 
              </div>
          </div>
          
      </div>
    </div>
        <div>
          {!isLoading ? (
            articles.map(article => {
              const { date, title,  image,  description } = article;
              return (
                <div key={title} className='container'>
                    <div className="col-md-4">
                    <img className='img-fluid' src={image} alt='images' />
                    <div className='content-detail'>
                      <span>{date}</span>
                      <p>{title}</p>
                      <p>{description}</p>
                    </div>
                    

                    </div>
                  
                </div>
                
              );
            })
          ) : (
            <div className="container">
                 <p className="text-center">Loading...</p>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
 
export default NewsPage;