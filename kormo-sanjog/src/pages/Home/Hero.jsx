import heroImg from "../../assets/hero-img.png";
export default function Hero() {
  return (
    <div className="hero py-[70px] pl-[8%]">
      <div className="grid grid-cols-2 items-center">
        <div>
          <h1>To Choose Right Jobs.</h1>
          <p>
            2400 Peoples are daily search in this portal, 100 user added job
            portal!
          </p>
          <div>
            <form action="">
              <input type="text" />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="hero_img" />
        </div>
      </div>
    </div>
  );
}
