import BG from "../../assets/images/delaybackground2.png"
import googlePlay from "../../assets/images/googleButton.png"
import appStore from "../../assets/images/appStore.png"
import phone from "../../assets/images/mobile.png"
const Ig9iteApp = () => {
  let ig9ites = [
    {
      id: 1,
      image: "loan",
      header: "Get a Loan",
      parag: "Access quick loans from N1000 to N100,000 in 60 seconds.",
    },
    {
      id: 2,
      image: "stream",
      header: "Stream Movies & reality TV",
      parag: "Your all-in-one entertainment hub.",
    },
    {
      id: 3,
      image: "bill",
      header: "Pay Utility bills",
      parag: "Pay your bills from the comfort of your home.",
    },
    {
      id: 4,
      image: "world",
      header: "Buy smartphones & routers",
      parag: "Get everything you need to stay connected.",
    },
  ];
  return (
    <div
      className="min-h-[150vh] sm:px-32 bg-no-repeat bg-cover sm:pb-28 py-20 flex flex-col items-center gap-y-5"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="flex gap-x-3 p-1 bg-white justify-center rounded-2xl text-[13px]">
        <button className="rounded-2xl px-14  py-2 bg-[#006749] text-white">
          Ig9ite
        </button>
        <button className="rounded-2xl px-14 py-2 bg-[#f8f8fa]">9TV</button>
      </div>
      <div className="space-y-3 mb-5">
        <p className="text-2xl font-semibold">Download our Ig9ite app</p>
        <div className="flex gap-x-4">
          <button className="hover:scale-110">
            <img src={appStore} alt="appStore" />
          </button>
          <button className="hover:scale-110">
            <img src={googlePlay} alt="googlePlay" />
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between sm:relative sm:w-full sm:mt-5 gap-y-7 sm:gap-y-0">
        <div className="sm:absolute sm:left-[23.5rem] sm:top-[0.55rem] w-[200px] sm:w-[259px] sm:h-[70vh]">
          <img src={phone} alt="" />
        </div>
        <div className="flex flex-col sm:justify-between w-[67%] sm:w-[20%] text-center sm:text-start sm:h-[85vh] gap-y-5">
          {ig9ites
            .filter((ig9ite) => ig9ite.id <= 2)
            .map((ig9ite, i) => (
              <div key={i} className="space-y-2">
                <img
                  className="mx-auto"
                  src={ig9ite.image}
                  alt={ig9ite.header}
                />
                <h2 className="font-semibold text-2xl">{ig9ite.header}</h2>
                <p className="text-[#3e8565]">{ig9ite.parag}</p>
              </div>
            ))}
        </div>
        <div className="flex flex-col sm:justify-between w-[67%] sm:w-[25%]  text-center sm:text-end sm:h-[85vh] gap-y-5">
          {ig9ites
            .filter((ig9ite) => ig9ite.id > 2)
            .map((ig9ite, i) => (
              <div key={i} className="space-y-2">
                <img
                  className="mx-auto"
                  src={ig9ite.image}
                  alt={ig9ite.header}
                />
                <h2 className="font-semibold text-2xl">{ig9ite.header}</h2>
                <p className="text-[#3e8565]">{ig9ite.parag}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Ig9iteApp
