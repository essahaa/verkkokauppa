import { Link } from 'react-router-dom';

//When backend is ready implement these through props
const JonneCard = (imgUrl, title) => {
	return (
		<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
			<div className="card">
				<img
					src={"/images/battery.png"}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{"Title"}</h5>
					<Link
						className="links btn btn-outline-light btn-lg"
						role="button"
						to={'/productDetail/'}
					>
						Tuotetiedot
					</Link>
				</div>
			</div>
		</div>
	);
};

export default JonneCard;
