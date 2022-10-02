import Card from 'react-bootstrap/Card';


function Carta({poke}){
const { name, stats, src, types } = poke;


return(

  <Card style={{ width: "34rem" }} className="mt-5 mx-auto flex-row p-2">
  <Card.Img height="300" variant="top" src={src} />
  <Card.Body>
    <Card.Title className="fw-bold">{name}</Card.Title>
    <ul className="text-left">
      <Card.Text>
        {stats?.map((stat, i) => (
          <li key={i}>
            {stat.name}: {stat.base}
          </li>
        ))}
      </Card.Text>
    </ul>
    <Card.Text className="text-secondary">{types}</Card.Text>
  </Card.Body>
</Card>


)

}

export default Carta;