import React from "react";

function left_ul() {
  return (
    <>
      <ul className="topbar-other-options d-flex flex-wrap justify-content-between">
        <li className="option-details">
          <a href="/login" className="login-btn">
            Login
          </a>
        </li>
        <li className="option-details btn-line">
          <a href="/register" className="signup-btn">
            Sign up
          </a>
        </li>
        <li className="option-details btn-line dropdown">
          <div class="dropdown language-option">
            <select fdprocessedid="hlqs2n" className="language dropbtn">
              <option className="btn_color"value="English">English</option>
              <option className="btn_color"value="Arabic">Arabic</option>
              <option className="btn_color"value="French">French</option>
            </select>
          </div>
        </li>
        <li className="option-details btn-line dropdown">
          <div class="dropdown language-option">
            <select fdprocessedid="2b4n64" className="price dropbtn">
              <option className="btn_color"value="USD">USD</option>
              <option className="btn_color"value="BD">BD</option>
              <option className="btn_color"value="URO">URO</option>
            </select>
          </div>
        </li>
      </ul>
    </>
  );
}

export default left_ul;