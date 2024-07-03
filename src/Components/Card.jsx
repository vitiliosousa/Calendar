import PropTypes from 'prop-types';

function Card(props) {
    const { image, nome } = props;
    const imageUrl = `url(${image})`;
    
    return (
      <div className=" h-44 w-full bg-center bg-cover rounded flex items-center justify-center text-center text-white font-extrabold" style={{backgroundImage: imageUrl}}>
        <div>
          <h1>{nome}</h1>
        </div>
      </div>
    );
  }
  
  Card.propTypes = {
    image: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired
  };
  
  export default Card;