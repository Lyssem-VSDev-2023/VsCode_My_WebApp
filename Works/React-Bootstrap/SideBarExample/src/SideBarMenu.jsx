import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "./SideBarMenu.css";

function SideBarMenu() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            {" "}
            <a className="text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2">
              <span className="ms-1 fs-4">Brand</span>
            </a>
            <hr className="text-secondary" />
            <ul class="nav nav-pills flex-column">
              <li class="nav-item text-white fs-4 my-1">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-speedometer"></i>
                  <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-house"></i>
                  <span className="ms-3 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-grid"></i>
                  <span className="ms-3 d-none d-sm-inline">Products</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-table"></i>
                  <span className="ms-3 d-none d-sm-inline">Orders</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-people"></i>
                  <span className="ms-3 d-none d-sm-inline">Customers</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown open">
            <a
              class="text-decoration-none text-white dropdown-toggle p-3"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle"></i>
              <span className="ms-3">Lyes</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="triggerId">
              <a class="dropdown-item" href="#">
                Profile
              </a>
              <a class="dropdown-item" href="#">
                Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarMenu;
