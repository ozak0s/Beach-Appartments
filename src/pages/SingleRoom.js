import React, { useContext } from "react";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../context";

function SingleRoom(props) {
  const { slug } = useParams();
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="error">
        <h3> no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    type,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  // const [main, ...defaultImages] = images;

  return (
    <>
      <StyledHero img={images[1]}>
        <Banner title={name} subtitle={type}>
          <Link to="/" className="btn-primary">
            back to Home
          </Link>
        </Banner>
      </StyledHero>

      <section className="single-room">
        <div className="single-room-images ">
          {images.map((item, index) => (
            <div className="">
              <img
                key={index}
                src={item}
                alt={name}
                className="img-animation"
              />
            </div>
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras </h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default SingleRoom;

// export default class SingleRoom extends Component {
//   constructor(props) {
//     super(props);
//     let slug = useParams();
//     console.log(slug);

//     this.state = {
//       slug: this.props.match.params.slug,
//       defaultBcg,
//     };
//   }
//   static contextType = RoomContext;
//   // componentDidMount() {}

//   render() {
//     const { getRoom } = this.context;
//     const room = getRoom(this.state.slug);
//     if (!room) {
//       return (
//         <div className="error">
//           <h3>No such room could be found...</h3>
//           <Link to="/rooms" className="btn-primary">
//             Back to rooms
//           </Link>
//         </div>
//       );
//     }
//     return <div>hello from Single Room page</div>;
//   }
// }
