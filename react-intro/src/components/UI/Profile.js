import { getImageUrl } from '../utilities/utils';


export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Robert Regalado',
          imageId: 'B9VaZJE'
        }}
      />
    </Card>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}