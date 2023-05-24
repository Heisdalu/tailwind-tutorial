// eslint-disable-next-line react/prop-types
const Card = ({ icon, text, title }) => {
  return (
    <section className="p-[1.5rem] rounded-[7px] font-poppins">
      <h1 className="text-[1.3rem] font-[600] text-dark_blue">{title}</h1>
      <p className="mt-0.5rem mb-2rem text-[1.1rem] text-grayish_blue font-[200]">
        {text}
      </p>
      <div className="flex">
        <span className="block ml-[auto]">{icon}</span>
      </div>
    </section>
  );
};

export default Card;
