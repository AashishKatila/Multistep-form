import { usePageContext } from "../context/PageContext";

const { form, setPage } = usePageContext();

const handleRegister = async (data) => {
  console.log(data);
  try {
    const response = await fetch(
      "https://rest-api-bjno.onrender.com/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    // Handle the response from the server
    if (response.ok) {
      console.log("Signup successful!");
      setPage(0);
      localStorage.removeItem("names");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    } else {
      console.error("Signup failed.");
    }
  } catch (error) {
    console.error("Error sending signup request:", error);
  }
};

export default handleRegister;
