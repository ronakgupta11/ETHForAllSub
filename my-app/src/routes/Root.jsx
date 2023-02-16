import {
    Outlet,
    Link,
    NavLink,
    useNavigation,

  } from "react-router-dom";

export default function Root(){
  const navigation = useNavigation();
    return (
        <div className = "root">
        <div id="sidebar">
          <h1>App Name</h1>
          <nav>
            <ul>
              
                <li>
                  <NavLink
                    to="/bridge"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >

                  <Link to="/bridge">
                    <>
                    Bridge Tokens</>
                  </Link>
                  </NavLink>

                </li>
                <li>
                  <NavLink
                    to="/swap"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >

                  <Link to="/swap">
                    <>
                    Swap Tokens</>
                  </Link>
                  </NavLink>

                </li>
                <li>
                  <NavLink
                    to="/stake"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >

                  <Link to="/stake">
                    <>
                    Stake</>
                  </Link>
                  </NavLink>

                </li>
                <li>
                  <NavLink
                    to="/lend"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >

                  <Link to="/lend">
                    <>
                    Lend</>
                  </Link>
                  </NavLink>

                </li>
                <li>
                  <NavLink
                    to="/borrow"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >

                  <Link to="/borrow">
                    <>
                    Borrow</>
                  </Link>
                  </NavLink>

                </li>

            </ul>

          </nav>
        </div>
        <div id="detail" className={
          navigation.state === "loading" ? "loading" : ""
        }>
            <Outlet/>
        </div>
      </div>
    );
    
}