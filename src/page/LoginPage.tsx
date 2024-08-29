import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoBinus from "../assets/logo_binus.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMsal } from "@azure/msal-react";
import Cookies from "js-cookie";

function LoginPage() {
  const nav = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [companyLogin, setCompanyLogin] = useState(false);
  const { instance, inProgress, accounts } = useMsal();

  async function handleLogin() {
    Cookies.set("name", username, { expires: 1 / 24 });
    Cookies.set("email", "", { expires: 1 / 24 });
    Cookies.set("is_microsoft", "false", { expires: 1 / 24 });
    if (username === "company" && password === "company") {
      nav("/company/home");
    }
  }

  //   useEffect(() => {
  //     window.addEventListener("keydown", handleKeyDown);
  //     return () => {
  //       window.removeEventListener("keydown", handleKeyDown);
  //     };
  //   }, [sequence, bypassSequence]);

  useEffect(() => {
    const handleRedirect = async () => {
      if (inProgress === "none" && accounts.length > 0) {
        try {
          const response = await instance.acquireTokenSilent({
            account: accounts[0],
            scopes: ["user.read"],
          });

          if (accounts[0].username.endsWith("@binus.ac.id")) {
            Cookies.set("token", response.idToken, { expires: 1 / 24 });
            if (accounts[0].name) {
              Cookies.set("name", accounts[0].name, { expires: 1 / 24 });
            }
            Cookies.set("email", accounts[0].username, { expires: 1 / 24 });
            Cookies.set("is_microsoft", "true", { expires: 1 / 24 });
            nav("/home");
          }
        } catch (error) {
          console.error("Failed to acquire token silently", error);
        }
      }
    };

    handleRedirect();
  }, [instance, accounts, inProgress]);

  const loginMicrosoft = async () => {
    const loginRequest = {
      scopes: ["user.read"],
      prompt: "select_account",
    };

    instance.loginRedirect(loginRequest).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-[#D6E4F0]">
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-[400px] bg-[white] rounded-xl px-[40px] pt-[30px] pb-[60px]">
          <div className="w-full flex justify-center mb-[20px]">
            <img src={LogoBinus} width={150} />
          </div>

          <div>
            {companyLogin ? (
              <div>
                <Input
                  className="my-[10px]"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
                <Input
                  className="my-[10px]"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  type={"password"}
                />
                <Button
                  className="w-full bg-[#005581] mt-[15px] hover:bg-[#00344E]"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </div>
            ) : (
              <Button
                className="w-full bg-[#005581] mt-[15px] hover:bg-[#00344E]"
                onClick={loginMicrosoft}
              >
                Student Microsoft Login
              </Button>
            )}

            <Button
              className="w-full bg-[#005581] mt-[15px] hover:bg-[#00344E]"
              onClick={() => setCompanyLogin(!companyLogin)}
            >
              {companyLogin ? "Student" : "Company"} Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
