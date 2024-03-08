const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Wiek: {user.age}</p>
      {user.occupation ? (
        <h3>Zawód: {user.occupation}</h3>
      ) : (
        <p>Brak informacji o zawodzie</p>
      )}
    </div>
  );
};
export default UserProfile;
