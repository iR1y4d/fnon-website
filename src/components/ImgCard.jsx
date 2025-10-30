import clsx from "clsx";
const ImgCard = ({ id, item, changeBigImage, mainImage }) => {
  const handleClick = () => {
    if (mainImage.id !== id) changeBigImage(item);
  };

  return (
    <li onClick={handleClick} key={id}>
      <img
        src={item.image}
        alt="image"
        className={clsx(
          "rounded-xl hover:translate-y-[-5px] duration-500 cursor-pointer border-3 border-transparent hover:border-secondry",
          item.id === mainImage.id && "border-secondry!"
        )}
        loading="lazy"
      />
    </li>
  );
};

export default ImgCard;
