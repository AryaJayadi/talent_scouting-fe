import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoBinus from "../assets/logo_binus.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMsal } from "@azure/msal-react";
import axios from "axios";
import { encrypt } from "./util/Utility";
import Cookies from "js-cookie";
import { useAuth } from "./context/AuthContext";
import MicrosoftLogo from "../assets/microsoft_logo.png";

function LoginPage() {
  const nav = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [companyLogin, setCompanyLogin] = useState(false);
  const { instance, inProgress, accounts } = useMsal();
  const { login } = useAuth();

  async function handleLogin() {
    try {
      const body = {
        email: username,
        password: password,
      };

      const response = await axios.post(
        import.meta.env.VITE_API + "company/loginCompany",
        body
      );
      console.log(response.data);

      if (response.data != "") {
        Cookies.set("name", encrypt(response.data.name), { expires: 1 / 24 });
        Cookies.set("email", encrypt(response.data.email), { expires: 1 / 24 });
        Cookies.set("is_microsoft", encrypt("false"), { expires: 1 / 24 });
        Cookies.set("id", encrypt(response.data.id.toString()), {
          expires: 1 / 24,
        });
        login();
        nav("/company/home");
      } else {
        console.log(response);
      }
    } catch (error) {}
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
            Cookies.set("token", encrypt(response.idToken), {
              expires: 1 / 24,
            });
            if (accounts[0].name) {
              Cookies.set("name", encrypt(accounts[0].name), {
                expires: 1 / 24,
              });
            }
            Cookies.set("email", encrypt(accounts[0].username), {
              expires: 1 / 24,
            });
            Cookies.set("is_microsoft", encrypt("true"), { expires: 1 / 24 });
            const student = await axios.get(
              import.meta.env.VITE_API +
                "getStudentByEmail?email=" +
                accounts[0].username
            );

            // Cookies.set("student", student.data, { expires: 1 / 24 });
            Cookies.set("id", encrypt(student.data.id.toString()), {
              expires: 1 / 24,
            });
            Cookies.set("gpa", encrypt(student.data.gpa.toString()), {
              expires: 1 / 24,
            });
            Cookies.set("nim", encrypt(student.data.nim.toString()), {
              expires: 1 / 24,
            });
            login();
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
                <div className="flex items-center">
                  <img src={MicrosoftLogo} className="w-6 mr-2" />
                  <div>Student Microsoft Login</div>
                </div>
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
