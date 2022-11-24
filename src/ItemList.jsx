import Rating from "./components/itemList/Rating";
import itemsData from "./data/itemData";

const ItemList = () => {
  const sortedData = [...itemsData].sort((a, b) => b.createdAt - a.createdAt).slice(0, 6);

  return (
    <>
      {sortedData.map((item, index) => (
        <div key={item.name + index} className='item'>
          <div className="item-image">
            <a href={item.link}>
              <img src={item.image} alt={item.name} />
            </a>
          </div>
          <p className="item-name">
            <a href={item.link}><strong>{item.name}</strong></a>
          </p>
          <p className="item-price">{item.price.toLocaleString()}원</p>
          <p className="item-rating">
            <Rating rating={item.score} />
            <span className="rating-number">{' '}({item.score})</span>
          </p>
        </div>
      ))}
    </>
  );
};

export default ItemList;
