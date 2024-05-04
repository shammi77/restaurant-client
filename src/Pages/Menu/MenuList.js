import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bg-neutral">
      <h2 className="text-center text-gray-700 text-4xl font-bold">𝓜𝓮𝓷𝓾</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 ">
        <div className="">
          <div className="card w-64 bg-base-100 shadow-2xl bg-primary m-20 ">
            <div className="card-body">
              <h2 className="font-bold text-white">
                ミ★ 𝘌𝘕𝘛𝘙𝘈𝘕𝘛𝘌𝘚 𝘚𝘛𝘈𝘙𝘛𝘌𝘙𝘚 ★彡
              </h2>

              <div className="card-actions ">
                <Link to="/menuitems">
                  {" "}
                  <button className="btn btn-active btn-ghost underline underline-offset-8 text-white">
                    Explore Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="card w-64 bg-base-100 shadow-2xl bg-primary m-20">
            <div className="card-body">
              <h2 className="font-bold text-white">
                ミ★ 𝘛𝘈𝘕𝘋𝘖𝘖𝘙𝘐 𝘌𝘕𝘛𝘙𝘈𝘕𝘛𝘌𝘚 / 𝘛𝘈𝘕𝘋𝘖𝘖𝘙𝘐 𝘚𝘛𝘈𝘙𝘛𝘌𝘙𝘚 ★彡
              </h2>

              <div className="card-actions ">
                <Link to="/menutandoori">
                  {" "}
                  <button className="btn btn-active btn-ghost underline underline-offset-8 text-white">
                    Explore Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card w-64 bg-base-100 shadow-2xl bg-primary m-20">
            <div className="card-body">
              <h2 className="font-bold text-white">
                ミ★ 𝘔𝘌𝘕𝘜 𝘗𝘈𝘙𝘈 𝘕𝘐𝘕𝘖𝘚 / 𝘊𝘏𝘐𝘓𝘋𝘙𝘌𝘕𝘚 𝘔𝘌𝘕𝘜 ★彡
              </h2>

              <div className="card-actions ">
                <Link to="/menuchild">
                  {" "}
                  <button className="btn btn-active btn-ghost underline underline-offset-8 text-white">
                    Explore Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card w-64 bg-base-100 shadow-2xl bg-primary m-20">
            <div className="card-body">
              <h2 className="font-bold text-white">
                ミ★ 𝘚𝘌𝘎𝘜𝘕𝘋𝘖𝘚 𝘗𝘓𝘈𝘛𝘖𝘚 𝘊𝘓𝘈𝘚𝘐𝘊𝘖𝘚 (𝘊𝘖𝘕 𝘚𝘈𝘓𝘚𝘈)/ 𝘊𝘓𝘈𝘚𝘚𝘐𝘊 𝘔𝘈𝘐𝘕 𝘔𝘌𝘈𝘓
                𝘋𝘐𝘚𝘏𝘌𝘚 ★彡
              </h2>

              <div className="card-actions ">
                <Link to="/menuclassic">
                  {" "}
                  <button className="btn btn-active btn-ghost underline underline-offset-8 text-white">
                    Explore Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card w-64 bg-base-100 shadow-2xl bg-primary m-20">
            <div className="card-body">
              <h2 className="font-bold text-white">ミ★ 𝘉𝘐𝘙𝘠𝘈𝘕𝘐 𝘋𝘐𝘚𝘏𝘌𝘚 ★彡</h2>

              <div className="card-actions ">
                <Link to="/menubiriani">
                  {" "}
                  <button className="btn btn-active btn-ghost underline underline-offset-8 text-white">
                    Explore Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card w-64 bg-base-100 shadow-2xl bg-primary m-20">
            <div className="card-body">
              <h2 className="font-bold text-white">
                ミ★ 𝘗𝘈𝘕 𝘐𝘕𝘋𝘐𝘖 / 𝘐𝘕𝘋𝘐𝘈𝘕 𝘉𝘙𝘌𝘈𝘋𝘚 ★彡
              </h2>

              <div className="card-actions ">
                <Link to="/menubread">
                  {" "}
                  <button className="btn btn-active btn-ghost underline underline-offset-8 text-white">
                    Explore Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card w-64 bg-base-100 shadow-2xl bg-primary m-20">
            <div className="card-body">
              <h2 className="font-bold text-white">
                ミ★ 𝘈𝘙𝘙𝘖𝘡 𝘙𝘐𝘊𝘌 / 𝘉𝘈𝘚𝘔𝘈𝘛𝘐 ★彡
              </h2>

              <div className="card-actions ">
                <Link to="/menurice">
                  {" "}
                  <button className="btn btn-active btn-ghost underline underline-offset-8 text-white">
                    Explore Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="card w-64 bg-base-100 shadow-2xl bg-primary m-20">
            <div className="card-body">
              <h2 className="font-bold text-white">
                ミ★ 𝘝𝘌𝘙𝘋𝘜𝘙𝘈𝘚 / 𝘝𝘌𝘎𝘌𝘛𝘈𝘉𝘓𝘌 𝘚𝘐𝘋𝘌 𝘋𝘐𝘚𝘏𝘌𝘚 ★彡
              </h2>

              <div className="card-actions ">
                <Link to="/menuveg">
                  {" "}
                  <button className="btn btn-active btn-ghost underline underline-offset-8 text-white">
                    Explore Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="card w-64 bg-base-100 shadow-2xl bg-primary m-20">
            <div className="card-body">
              <h2 className="font-bold text-white">
                ミ★ 𝘚𝘌𝘎𝘜𝘕𝘋𝘖𝘚 𝘗𝘓𝘈𝘛𝘖𝘚 𝘛𝘈𝘕𝘋𝘖𝘖𝘙𝘐 (𝘚𝘐𝘕 𝘚𝘈𝘓𝘚𝘈) / 𝘛𝘈𝘕𝘋𝘖𝘖𝘙𝘐 𝘔𝘈𝘐𝘕 𝘔𝘌𝘈𝘓
                𝘋𝘐𝘚𝘏𝘌𝘚 ★彡
              </h2>

              <div className="card-actions ">
                <Link to="/menutan">
                  {" "}
                  <button className="btn btn-active btn-ghost underline underline-offset-8 text-white">
                    Explore Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="card w-64 bg-base-100 shadow-2xl bg-primary m-20">
            <div className="card-body">
              <h2 className="font-bold text-white">
                ミ★ 𝘚𝘌𝘎𝘜𝘕𝘋𝘖𝘚 𝘗𝘓𝘈𝘛𝘖𝘚 𝘝𝘌𝘎𝘌𝘛𝘈𝘙𝘐𝘈𝘕𝘖𝘚 / 𝘝𝘌𝘎𝘌𝘛𝘈𝘙𝘐𝘈𝘕 𝘔𝘈𝘐𝘕 𝘔𝘌𝘈𝘓𝘚 ★彡
              </h2>

              <div className="card-actions ">
                <Link to="/menuvegmain">
                  {" "}
                  <button className="btn btn-active btn-ghost underline underline-offset-8 text-white">
                    Explore Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="card w-64 bg-base-100 shadow-2xl bg-primary m-20">
            <div className="card-body">
              <h2 className="font-bold text-white">
                ミ★ 𝘚𝘜𝘎𝘌𝘙𝘌𝘕𝘊𝘐𝘈𝘚 𝘋𝘌𝘓 𝘊𝘏𝘌𝘍 / 𝘊𝘏𝘌𝘍'𝘚 𝘙𝘌𝘊𝘖𝘔𝘔𝘌𝘕𝘋𝘈𝘛𝘐𝘖𝘕𝘚★彡
              </h2>

              <div className="card-actions ">
                <Link to="/menurec">
                  {" "}
                  <button className="btn btn-active btn-ghost underline underline-offset-8 text-white">
                    Explore Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="card w-64 bg-base-100 shadow-2xl bg-primary m-20">
            <div className="card-body">
              <h2 className="font-bold text-white">
                ミ★ 𝘌𝘚𝘗𝘌𝘊𝘐𝘈𝘓𝘐𝘋𝘈𝘋𝘌𝘚 𝘋𝘌 𝘊𝘏𝘌𝘍 / 𝘊𝘏𝘌𝘍 𝘚𝘗𝘌𝘊𝘐𝘈𝘓𝘐𝘛𝘐𝘌𝘚 ★彡
              </h2>

              <div className="card-actions ">
                <Link to="/menuchef">
                  {" "}
                  <button className="btn btn-active btn-ghost underline underline-offset-8 text-white">
                    Explore Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
