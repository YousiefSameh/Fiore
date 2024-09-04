import React from "react";

const OurStore = () => {
	return (
    <section className="pb-24">
      <div className="container mx-auto bg-third h-full flex gap-12 items-center">
        <img src="Images\img24.jpg" className="w-1/2 p-16 bg-secondary" alt="" />
        <div className="text w-1/2">
          <h1 className="font-primary text-6xl">Our Store</h1>
          <div className="row flex mt-12 w-full pr-12 justify-between">
            <p>Goddard Hall 60 <br /> Washington Square E <br /> New York, NY 10003, USA</p>
            <p>+20 123-456-7890 <br /> info@fiore.com</p>
          </div>
          <hr className="border-fourth my-12"/>
          <div className="row flex mt-12 w-full pr-12 justify-between">
            <p>Monday - Friday <br /> 7am - 7pm <br /></p>
            <p>Saturday - Sunday <br /> 8am - 7pm <br /></p>
          </div>
          <button className='border border-black px-12 py-4 rounded-full hover:bg-black hover:text-white transition-colors w-fit my-12'><a href="#" className='text-inherit uppercase'>View Map</a></button>
        </div>
      </div>

    </section>
  );
};

export default OurStore;
