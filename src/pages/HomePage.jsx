import Card from "../components/Card/Card";
import Search from "../assets/Search";
import Calculator from "../assets/Calculator";
import Karma from "../assets/Karma";
import Team from "../assets/Team";

const HomePage = () => {
  return (
    <div className="p-1.5rem pt-[2.5rem] bg-light_gray">
      <header className="text-center flex flex-col space-y-1rem px-[1px] max-w-[600px] mx-[auto]">
        <h1 className="text-dark_blue text-[1.5rem] font-poppins md:text-[2rem]">
          Reliable efficient delivery
          <br />
          <span className="mt-[5px] block font-[600]">
            Powered by Technology
          </span>
        </h1>
        <p className="text-grayish_blue text-[1.1rem] leading-[1.8rem] font-poppins font-[400] md:text-[1.3rem md:leading-[2rem]]">
          Our Artificial intelligence powerred tools use millions of project
          data points to ensurre that your project is succesful
        </p>
      </header>

      <div className="mt-[2.5rem] py-[3rem] flex flex-col space-y-[3rem] relative md:mt-[2rem] md:grid md:grid-cols-[1fr_1fr_1fr] md:space-y-[0] md:[grid-gap:3rem] md:p-2rem">
        <div className="box before:bg-cyan md:[grid-area:1/1/3/2] md:self-center">
          <Card
            title={"Supervisor"}
            text={"Monitor activity to identify project roadblocks"}
            icon={<Search />}
          />
        </div>

        <div className="box before:bg-red md:[grid-area:1/2/2/3]">
          <Card
            title={"Team Builder"}
            text={
              "Scans our talent network to create the optimal team for your project"
            }
            icon={<Team />}
          />
        </div>

        <div className="box before:bg-orange md:[grid-area:2/2/3/3]">
          <Card
            title={"Karma"}
            text={"Regularly evaluates our talent to ensure quality"}
            icon={<Karma />}
          />
        </div>

        <div className="box before:bg-blue md:[grid-area:1/3/3/4] md:self-center ">
          <Card
            title={"Calculator"}
            text={"Monitor activity to identify project roadblocks"}
            icon={<Calculator />}
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
