import React from "react";
import { useState } from "react";
import "../../styles/setting.css";
import Sidebar from "../../components/NavBar";
import userImage from "../../images/settings.png";

function SettingsPage() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("random@gmail.com");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSaveChanges = () => {
    // Implement logic to save changes (e.g., send to server)
    console.log("Changes saved:", { name, email, password });
    alert("Changes saved:", { name, email, password });
  };

  return (
    <>
      <Sidebar />
      <div
        className="setting-page"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="setting-form"
          style={{ width: "100%", maxWidth: "768px" }}
        >
          {/* Your form fields go here */}
          <div className="flex flex-col items-center justify-center h-full bg-gray-100">
            <div className="bg-white p-2 rounded shadow-md w-full max-w-screen-md mt-10">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={userImage} // Replace with your desired user image
                  alt="User Avatar"
                  style={{
                    width: "144px",
                    height: "144px",
                    borderRadius: "50%",
                    marginRight: "16px",
                    transition: "opacity 0.3s",
                  }}
                  className="hover:opacity-75"
                />
                <label
                  htmlFor="image"
                  className="cursor-pointer text-blue-500 hover:underline"
                  style={{ color: "#3b82f6" }}
                >
                  Change Image
                  <input
                    type="file"
                    id="image"
                    className="hidden"
                    onChange={(e) =>
                      console.log("Image changed:", e.target.files[0])
                    }
                  />
                </label>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Profile Settings
              </h2>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #e2e8f0",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  className="focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #e2e8f0",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  className="focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #e2e8f0",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  className="focus:border-blue-500"
                />
              </div>

              <div>
                <br />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
                  onClick={handleSaveChanges}
                  style={{
                    backgroundColor: "#3b82f6",
                    borderRadius: "4px",
                    border: "none",
                    transition: "background-color 0.2s, color 0.2s",
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsPage;
