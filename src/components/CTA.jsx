import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="flex justify-between items-center my-3">
      <p className=" text-base sm:text-3xl  font-semibold text-green-950">
        Let's work together.
      </p>
      <Link className="btn px-5 py-2 w-fit" to="/contact">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
