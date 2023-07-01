import data from '../data.json';
import proptypes from 'prop-types';
function Articles() {
  return (
    <>
      <div className="grid">
        {data.map((info) => (
          <Article key={info.author} {...info} />
        ))}
      </div>
    </>
  );
}

function Article(props) {
  return (
    <>
      <div className="container box flex">
        <div className="card">
          <img className="client" src={props.urlToImage} alt="" width="380" />
          <h2 className="author">{props.author.toUpperCase()}</h2>
        </div>
        <div>
          <h3>{props.title}</h3>
          <p> {props.description}</p>
        </div>
        <button>
          <a href={props.url}>Read More!</a>
        </button>
      </div>
    </>
  );
}
Article.prototype = {
  author: proptypes.string,
  title: proptypes.string,
  description: proptypes.string,
  url: proptypes.string,
  urlToImage: proptypes.string,
  publishedAt: proptypes.string,
  content: proptypes.string,
};

export default Articles;
