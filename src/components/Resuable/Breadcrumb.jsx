import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);

  return (
    <nav className="text-sm text-gray-600 my-4">
      <ol className="list-reset flex">
        <li>
          <Link to="/" className="text-[#101750] hover:underline">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <>
              <li><span className="mx-1">.</span></li>
              <li>
                {isLast ? (
                  <span className="text-[#FB2E86] font-medium capitalize">{value}</span>
                ) : (
                  <Link to={to} className="text-[#101750] hover:underline capitalize">{value}</Link>
                )}
              </li>
            </>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
