import { Outlet } from "react-router-dom";

export const GuestLayout = () => {
  return (
    <>
      <div>
        <h1>This is Navbar</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
