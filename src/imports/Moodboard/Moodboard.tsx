import imgImage1 from "./0933a513e9226ae84c99e2da75589f4f4daa9d60.png";
import imgImage2 from "./55633baa974dd5487eb7b7bc2e7a347bfce3f351.png";
import imgImage3 from "./58aa68674d7d9858277565aaf21b44a702b16523.png";
import imgImage4 from "./e6a37d5304913d64498443d4abf6dc40d049565a.png";
import imgImage5 from "./389c2bc8ed00fc30c45318315cd28dee9e0f545a.png";
import imgImage6 from "./f47864e1402abdac4a4aef58a5bcf04ba76ee9aa.png";
import imgImage7 from "./09ad94b2125d7db3bb1c72a044ad27244a732fe0.png";
import imgImage8 from "./874a6ff8a797a3603e11f1665ff5fe5a2f13297a.png";
import imgImage9 from "./a6dd478c30c56cc47aa19c005982754d7dbc29e3.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[652px] left-0 top-0 w-[891px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.79%] left-[-6.62%] max-w-none top-[-8.9%] w-[114.93%]" src={imgImage1} />
        </div>
      </div>
      <div className="absolute left-[919px] size-[638px] top-0" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute h-[638px] left-[1573px] top-0 w-[739px]" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[108.54%] left-[-12.57%] max-w-none top-[-8.51%] w-[125%]" src={imgImage3} />
        </div>
      </div>
      <div className="absolute h-[426px] left-0 top-[677px] w-[501px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="absolute h-[1103px] left-[523px] top-[677px] w-[736px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="absolute h-[528px] left-[1281px] top-[677px] w-[1031px]" data-name="image 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[163.38%] left-[-4.14%] max-w-none top-[-25.88%] w-[108.01%]" src={imgImage6} />
        </div>
      </div>
      <div className="absolute h-[335px] left-0 top-[1128px] w-[501px]" data-name="image 7">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage7} />
        </div>
      </div>
      <div className="absolute h-[551px] left-[1281px] top-[1229px] w-[1031px]" data-name="image 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[108.67%] left-0 max-w-none top-0 w-full" src={imgImage8} />
        </div>
      </div>
      <div className="absolute h-[292px] left-0 top-[1488px] w-[484px]" data-name="image 9">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[253.81%] left-0 max-w-none top-[-73.89%] w-full" src={imgImage9} />
        </div>
      </div>
    </div>
  );
}

export default function Moodboard() {
  return (
    <div className="relative size-full" data-name="Moodboard">
      <Group />
    </div>
  );
}