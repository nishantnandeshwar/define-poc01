import React from "react";
import "./MemberProfile.css";

const MemberProfile: React.FC = () => {
  return (
    <div className="member-profile">
      {/* --------- TOP HEADER SECTION --------- */}
      <header className="top-header">
        <div className="header-left">
          <div className="logo">MembersFirst</div>
          <button className="btn small">Quick Links ▾</button>
        </div>

        <div className="header-center">
          <div className="search-box">
            <input type="text" placeholder="Need some help?" />
          </div>
        </div>

        <div className="header-right">
          <div className="header-buttons">
            <button className="btn small">List</button>
            <button className="btn small">New</button>
            <button className="btn small">Related</button>
            <button className="btn small">Summary</button>
            <button className="btn small">Fullscreen</button>
          </div>
          <div className="user-menu">
            <span>👤 Define Admin ▾</span>
          </div>
        </div>
      </header>

      <div className="content-area">
        <div className="project-box">
          <div className="title">Project Management Site #1</div>
          <div className="breadcrumbs">Home / Member Directory</div>
        </div>

        {/* --------- INFO BAR --------- */}
        <div className="info-bar">
          Email Address for Member Profile changes: <a href="#">Update</a>
        </div>

        {/* --------- TABS --------- */}
        <div className="tabs">
          <button className="tab active">General</button>
          <button className="tab">Advanced</button>
        </div>

        {/* --------- FILTER FORM --------- */}
        <div className="filter-box">
          <div className="form-grid">
            <div className="form-group">
              <label>Member No</label>
              <input type="text" placeholder="Member No" />
            </div>
            <div className="form-group">
              <label>Card ID</label>
              <input type="text" placeholder="Card ID" />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Username" />
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label>City</label>
              <input type="text" placeholder="City" />
            </div>
            <div className="form-group">
              <label>Member Type</label>
              <select>
                <option value="">Member Type</option>
              </select>
            </div>
            <div className="form-group">
              <label>Member Group</label>
              <select>
                <option value="">Member Group</option>
              </select>
            </div>
            <div className="form-group">
              <label>Member Status</label>
              <select>
                <option value="">Member Status</option>
              </select>
            </div>

            <div className="form-group">
              <label>Activity</label>
              <select>
                <option value="">Activity</option>
              </select>
            </div>
            <div className="form-group">
              <label>Tracking</label>
              <select>
                <option value="">Tracking</option>
              </select>
            </div>
            <div className="form-group">
              <label>State</label>
              <select>
                <option value="">State</option>
              </select>
            </div>
            <div className="form-group">
              <label>Country</label>
              <select>
                <option value="">Country</option>
              </select>
            </div>
            <div className="form-group">
              <label>Member Org</label>
              <select>
                <option value="">Member Org</option>
              </select>
            </div>

            <div className="form-group">
              <label>Email Option</label>
              <select>
                <option value="">Email Option</option>
              </select>
            </div>
            <div className="form-group">
              <label>Active</label>
              <select>
                <option value="">Is Active?</option>
              </select>
            </div>
            <div className="form-group">
              <label> Hidden</label>
              <select>
                <option value="">Is Hidden?</option>
              </select>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select>
                <option value="">Gender</option>
              </select>
            </div>
            <div className="form-group">
              <label>Reason</label>
              <select>
                <option value="">Reason</option>
              </select>
            </div>
          </div>

          <div className="actions">
            <button className="btn search">Search</button>
            <button className="btn clear">Clear</button>
          </div>
        </div>

        {/* --------- QUICK SEARCH --------- */}
        <div className="quick-search">
          <div className="project-box">
            <div className="title">QUICK SEARCH BY NAME</div>
          </div>
          <div className="quick-search-filters">
            <div className="form-group">
              <label>Match Name</label>
              <select>
                <option value="">Match Name</option>
              </select>
            </div>
            <div className="form-group">
              <label>Email Status</label>
              <select>
                <option value="">Email Status</option>
              </select>
            </div>
            <div className="form-group">
              <label>Website Active</label>
              <select>
                <option value="">Status</option>
              </select>
            </div>
          </div>
          <div className="alphabet">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => (
              <button key={l}>{l}</button>
            ))}
            <button>A-Z</button>
          </div>
        </div>

        {/* --------- TABLE --------- */}
        <table className="member-table">
          <thead>
            <tr>
              <th>Member No</th>
              <th>Member Name</th>
              <th>User Name</th>
              <th>GHIN #</th>
              <th>Home Phone</th>
              <th>Email</th>
              <th>Member Type</th>
              <th>G</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>John Doe</td>
              <td>jdoe</td>
              <td>123456</td>
              <td>555-1234</td>
              <td>john@example.com</td>
              <td>Regular</td>
              <td>M</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>002</td>
              <td>Jane Smith</td>
              <td>jsmith</td>
              <td>654321</td>
              <td>555-5678</td>
              <td>jane@example.com</td>
              <td>Premium</td>
              <td>F</td>
              <td>No</td>
            </tr>
            <tr>
              <td>003</td>
              <td>John Doe</td>
              <td>jdoe</td>
              <td>123456</td>
              <td>555-1234</td>
              <td>john@example.com</td>
              <td>Regular</td>
              <td>M</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>004</td>
              <td>Jane Smith</td>
              <td>jsmith</td>
              <td>654321</td>
              <td>555-5678</td>
              <td>jane@example.com</td>
              <td>Premium</td>
              <td>F</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberProfile;