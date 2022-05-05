import { Link } from 'react-router-dom';
import "./jonneCard.scss";

const JonneCard = (props) => {
	return (
		<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
			<div className="card">
				<img
					src={props.image}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p>{props.price}€</p>
					<Link
						className="links btn btn-outline-light btn-lg"
						role="button"
						to={'/productDetail/'+ props.id}
					>
						Tuotetiedot
					</Link>
				</div>
			</div>
		</div>
	);
};

export default JonneCard;
