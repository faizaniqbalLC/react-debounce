/* eslint-disable react/prop-types */
const Item = ({ result }) => {
  const itemTextCol = (
    <div className="item-column">
      <h2>
        <a
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          rel="noreferrer">
          {result.title}
        </a>
      </h2>
      <p>{result.extract}</p>
    </div>
  );

  const content = <article className="search-item">{itemTextCol}</article>;

  return content;
};
export default Item;
