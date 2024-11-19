import { useParams } from "react-router-dom";

const SongIdPage = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default SongIdPage;
