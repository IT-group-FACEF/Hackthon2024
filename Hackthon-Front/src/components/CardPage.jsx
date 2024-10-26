import PropTypes from "prop-types";

const Card = ({ imageUrl, content }) => {
  return (
    <div className="relative w-full max-w-xs">
      {/* Imagem de fundo */}
      <div
        className="w-full h-56 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      {/* Div branca posicionada no final da imagem */}
      <div className="flex flex-col absolute inset-x-0 bottom-0 bg-white p-4 shadow-lg rounded-lg mx-auto w-4/5 text-center items-center">
        <p className="text-[20px] text-[#717171]">{content} </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  typeButton: PropTypes.string.isRequired,
  hrefButton: PropTypes.string.isRequired,
};

export default Card;
