import Card from "../components/Card/Card";
import Search from "../assets/search";
import Calculator from "../assets/calculator";
import Karma from "../assets/karma";
import Team from "../assets/team";

const HomePage = () => {
  return (
    <div className="p-1.5rem pt-[2.5rem] bg-light_gray">
      <header className="border-2 text-center flex flex-col space-y-1rem px-[16px]">
        <h1 className="text-dark_blue text-[1.5rem] font-poppins">
          Reliable efficient delivery
          <br />
          <span className="mt-[5px] block font-[600]">
            Powered by Technology
          </span>
        </h1>
        <p className="text-grayish_blue text-[1.1rem] leading-[1.8rem] font-poppins font-[400]">
          Our Artificial intelligence powerred tools use millions of project
          data points to ensurre that your project is succesful
        </p>
      </header>

      <div className="mt-[3.5rem] flex flex-col space-y-[2rem] relative">
        <div className="box before:bg-cyan">
          <Card
            title={"Supervisor"}
            text={"Monitor activity to identify project roadblocks"}
            icon={<Search />}
          />
        </div>

        <div className="box before:bg-red">
          <Card
            title={"Team Builder"}
            text={
              "Scans our talent network to create the optimal team for your project"
            }
            icon={<Team />}
          />
        </div>

        <div className="box before:bg-orange">
          <Card
            title={"Karma"}
            text={"Regularly evaluates our talent to ensure quality"}
            icon={<Karma />}
          />
        </div>

        <div className="box before:bg-blue">
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
