const Statistic = () => {
    return (

        <div id="Statistic" className="bg-red-50 pt-20 ">
              <div className="flex flex-col md:flex-row  text-gray-900 mx-24">
        <div className="md:w-1/2">
          <img className="h-10/12 w-10/12 mx-auto md:ml-0" src="https://i.ibb.co/72zQK6T/consultant2-pic5.png" alt="" />
        </div>
        <div className="flex flex-col justify-center text-center gap-y-10 w-full md:w-1/2">
          <p className="text-red-500">NULLA MAURIS DOLOR</p>
          <h3 className="lg:mx-auto lg:text-5xl text-3xl font-semibold">Allamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen.</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 justify-between gap-y-10 gap-x-20 lg:gap-x-2  mt-20">
            <div className="text-red-500">
              <h3 className="text-6xl font-extrabold">23k</h3>
              <p className="font-extrabold">Allamco laboris nisi ut aliq</p>
            </div>
            <div className="text-red-500 flex flex-col justify-center items-center">
              <img className="h-[70px] w-[100px]" src="https://i.ibb.co/4VzkpJQ/consultant2-icon2.png" alt="" />
              <p className="font-extrabold">Quantum perto via monto</p>
            </div>
            <div className="text-red-500">
              <h3 className="text-6xl font-extrabold">5</h3>
              <p className="font-extrabold">Elexus quatro</p>
            </div>
            <div className="text-red-500">
              <h3 className="text-6xl font-extrabold">96</h3>
              <p className="font-extrabold">Mauris rhoncus orci in imperdiet</p>
            </div>
            <div className="text-red-500">
              <h3 className="text-6xl font-extrabold">99%</h3>
              <p className="font-extrabold">Aliquam fringilla aliquam ex sit</p>
            </div>
          </div>
        </div>
      </div>
        </div>
      
      
    );
};

export default Statistic;