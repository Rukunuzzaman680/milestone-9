import Cousin from '../Cousin/Cousin';

const Aunty = ({ ring }) => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin>Kamal</Cousin>
        <Cousin hasFriend={true} ring={ring}>
          Jamal Bro
        </Cousin>
      </section>
    </div>
  );
};

export default Aunty;
