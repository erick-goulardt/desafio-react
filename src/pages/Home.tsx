import { getUsername } from "../services/users.service";
import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { UserNotFoundPopup } from "../error/Error";
import '../css/Main-modules.css'
import { useNavigate } from 'react-router-dom';

export function Home() {
  interface UserData {
    login: string;
    avatar_url: string;
    bio: string | null;
    name: string | null;
    id: number;
  }

  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showUserNotFoundPopup, setShowUserNotFoundPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userData: UserData = await getUsername(username);
      if (!userData) {
        setShowUserNotFoundPopup(true);
        navigate('/')
        setUserData(null);
      } else {
        setUserData(userData);
        navigate(`/user/${userData.id}`, { state: { userData } })
        setShowUserNotFoundPopup(false);   
      }
    } catch (error) {
      console.error("Erro ao buscar os dados do usuário:", error);
      setUserData(null);
    }

    setTimeout(() => {
      setIsLoading(false);
      setShowUserNotFoundPopup(false)
    }, 2250);
    
    console.log(userData);
  };

  return (
    <main className="h-screen w-screen flex">
      <div className="bg-mainprimary w-2/3 h-full flex justify-center">
        <div className="flex h-full items-center">
          <svg
            className="mt-3 mr-6"
            width="64"
            height="40"
            viewBox="0 0 64 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Subtract"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.5884 38.7694C18.9158 38.5606 18.2575 38.3091 17.6133 38.015C15.4397 37.0007 13.6766 35.455 12.3242 33.378C11.02 31.301 10.3679 28.6926 10.3679 25.553V1.49823L0.00866699 1.49824V25.553C0.00866699 28.6926 0.660753 31.301 1.96493 33.378C3.3174 35.455 5.08045 37.0007 7.25407 38.015C9.47599 39.0294 11.867 39.5366 14.427 39.5366C16.2449 39.5366 17.9654 39.2808 19.5884 38.7694ZM21.5983 4.38897C22.4867 3.55119 23.5016 2.85327 24.643 2.29523C26.865 1.18427 29.3525 0.628784 32.1058 0.628784C33.958 0.628784 35.6791 0.880186 37.269 1.38299C36.485 1.62758 35.7294 1.93166 35.0023 2.29522C32.8287 3.35788 31.1139 4.92772 29.858 7.00473C28.6022 9.08175 27.9742 11.6176 27.9742 14.6124V27.002C27.9742 27.5817 27.8293 28.113 27.5395 28.596C27.2497 29.079 26.8633 29.4655 26.3803 29.7553C25.8972 30.0451 25.3659 30.19 24.7863 30.19C24.2066 30.19 23.6753 30.0451 23.1923 29.7553C22.7092 29.4655 22.3228 29.079 22.033 28.596C21.7432 28.113 21.5983 27.5817 21.5983 27.002V4.38897ZM52.9725 4.45787C53.7455 5.19926 54.4212 6.04821 54.9996 7.00473C56.2555 9.08175 56.8834 11.6176 56.8834 14.6124V27.002C56.8834 27.5817 57.0283 28.113 57.3181 28.596C57.6079 29.079 57.9943 29.4655 58.4774 29.7553C59.0087 30.0451 59.5642 30.19 60.1438 30.19C60.7234 30.19 61.2548 30.0451 61.7378 29.7553C62.2208 29.4655 62.6073 29.079 62.8971 28.596C63.1869 28.113 63.3318 27.5817 63.3318 27.002V1.49823L52.9725 1.49824V4.45787ZM54.9459 38.7694C54.2734 38.5605 53.615 38.3091 52.9709 38.015C50.7972 37.0007 49.0342 35.455 47.6817 33.378C46.3293 31.301 45.653 28.6926 45.653 25.553V13.2358C45.653 12.6078 45.5081 12.0524 45.2183 11.5693C44.9285 11.0863 44.5421 10.6999 44.059 10.4101C43.576 10.1203 43.0447 9.97534 42.465 9.97534C41.8854 9.97534 41.3299 10.1203 40.7986 10.4101C40.3156 10.6999 39.9291 11.0863 39.6393 11.5693C39.3495 12.0524 39.2046 12.6078 39.2046 13.2358V25.553C39.2046 28.6354 38.5528 31.2057 37.2492 33.2639C37.2734 33.3021 37.2978 33.3401 37.3225 33.378C38.675 35.455 40.438 37.0007 42.6116 38.015C44.8335 39.0294 47.2245 39.5366 49.7846 39.5366C51.6024 39.5366 53.3229 39.2808 54.9459 38.7694Z"
              fill="#FFB629"
            />
          </svg>
          <svg
            width="211"
            height="55"
            viewBox="0 0 211 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="wtech">
              <path
                d="M14.7628 54.1404C12.2028 54.1404 9.8118 53.6333 7.58988 52.6189C5.41626 51.6045 3.65322 50.0589 2.30074 47.9818C0.99657 45.9048 0.344482 43.2965 0.344482 40.1568V16.1021H11.5749V41.6059C11.5749 42.1855 11.7198 42.7169 12.0096 43.1999C12.2994 43.6829 12.6858 44.0693 13.1688 44.3591C13.6519 44.649 14.1832 44.7939 14.7628 44.7939C15.3425 44.7939 15.8738 44.649 16.3568 44.3591C16.8398 44.0693 17.2263 43.6829 17.5161 43.1999C17.8059 42.7169 17.9508 42.1855 17.9508 41.6059V29.2163C17.9508 26.2215 18.5787 23.6856 19.8346 21.6086C21.0905 19.5316 22.8052 17.9617 24.9788 16.8991C27.2008 15.7881 29.6884 15.2326 32.4416 15.2326C35.1949 15.2326 37.6583 15.7881 39.8319 16.8991C42.0055 17.9617 43.7203 19.5316 44.9761 21.6086C46.232 23.6856 46.86 26.2215 46.86 29.2163V41.6059C46.86 42.1855 47.0049 42.7169 47.2947 43.1999C47.5845 43.6829 47.9709 44.0693 48.4539 44.3591C48.9853 44.649 49.5408 44.7939 50.1204 44.7939C50.7 44.7939 51.2313 44.649 51.7144 44.3591C52.1974 44.0693 52.5838 43.6829 52.8736 43.1999C53.1634 42.7169 53.3084 42.1855 53.3084 41.6059V16.1021H64.5387V40.1568C64.5387 43.2965 63.8625 45.9048 62.51 47.9818C61.2058 50.0589 59.4428 51.6045 57.2209 52.6189C55.0473 53.6333 52.6804 54.1404 50.1204 54.1404C47.5603 54.1404 45.1694 53.6333 42.9474 52.6189C40.7738 51.6045 39.0108 50.0589 37.6583 47.9818C36.3058 45.9048 35.6296 43.2965 35.6296 40.1568V27.8396C35.6296 27.2117 35.4847 26.6562 35.1949 26.1732C34.905 25.6902 34.5186 25.3038 34.0356 25.0139C33.5526 24.7241 33.0212 24.5792 32.4416 24.5792C31.862 24.5792 31.3065 24.7241 30.7752 25.0139C30.2921 25.3038 29.9057 25.6902 29.6159 26.1732C29.3261 26.6562 29.1812 27.2117 29.1812 27.8396V40.1568C29.1812 43.2965 28.5049 45.9048 27.1525 47.9818C25.8483 50.0589 24.0852 51.6045 21.8633 52.6189C19.6897 53.6333 17.3229 54.1404 14.7628 54.1404Z"
                fill="white"
              />
              <path
                d="M86.5613 53.271C83.1319 53.271 80.451 52.3049 78.5189 50.3728C76.5868 48.3924 75.6208 45.7358 75.6208 42.4029V7.04535H86.9236V41.7508C86.9236 42.3304 87.1168 42.8376 87.5032 43.2723C87.938 43.6588 88.4452 43.852 89.0248 43.852H97.1396V53.271H86.5613ZM69.5347 25.3038V16.1021H97.1396V25.3038H69.5347Z"
                fill="white"
              />
              <path
                d="M122.146 53.271C117.944 53.271 114.248 52.4982 111.06 50.9525C107.872 49.3585 105.385 47.1849 103.598 44.4316C101.859 41.6301 100.989 38.3938 100.989 34.7228C100.989 30.6653 101.835 27.1876 103.525 24.2894C105.216 21.3912 107.462 19.1693 110.263 17.6236C113.113 16.0296 116.253 15.2326 119.682 15.2326C123.595 15.2326 126.855 16.0538 129.464 17.6961C132.12 19.3384 134.125 21.5844 135.477 24.4343C136.83 27.2359 137.506 30.448 137.506 34.0707C137.506 34.6986 137.458 35.4473 137.361 36.3168C137.313 37.1379 137.24 37.79 137.144 38.273H112.799C113.089 39.5289 113.645 40.5915 114.466 41.461C115.287 42.3304 116.325 42.9825 117.581 43.4172C118.837 43.8037 120.238 43.9969 121.784 43.9969H133.159V53.271H122.146ZM112.51 31.245H126.638C126.541 30.4721 126.397 29.7234 126.203 28.9989C126.01 28.2744 125.696 27.6464 125.261 27.1151C124.875 26.5355 124.416 26.0524 123.885 25.666C123.353 25.2313 122.726 24.8932 122.001 24.6517C121.325 24.4102 120.552 24.2894 119.682 24.2894C118.571 24.2894 117.581 24.4826 116.712 24.869C115.842 25.2554 115.118 25.7868 114.538 26.463C113.959 27.0909 113.5 27.8396 113.162 28.7091C112.872 29.5302 112.654 30.3755 112.51 31.245Z"
                fill="white"
              />
              <path
                d="M162.308 53.271C158.444 53.271 155.014 52.474 152.02 50.88C149.025 49.2377 146.658 47.0399 144.919 44.2867C143.18 41.4851 142.311 38.2972 142.311 34.7228C142.311 31.1484 143.18 27.9845 144.919 25.2313C146.658 22.4297 149.025 20.2078 152.02 18.5655C155.014 16.9232 158.444 16.1021 162.308 16.1021H167.887V25.5936H162.743C160.859 25.5936 159.241 26.0041 157.888 26.8253C156.536 27.5981 155.473 28.6849 154.7 30.0857C153.976 31.4382 153.614 32.9839 153.614 34.7228C153.614 36.4617 153.976 38.0315 154.7 39.4323C155.473 40.7848 156.536 41.8716 157.888 42.6927C159.241 43.4656 160.859 43.852 162.743 43.852H167.887V53.271H162.308Z"
                fill="white"
              />
              <path
                d="M174.121 53.271V0.379578H185.351V18.5655C186.8 17.4063 188.394 16.561 190.133 16.0296C191.872 15.4983 193.611 15.2326 195.35 15.2326C198.731 15.2326 201.581 15.9572 203.899 17.4063C206.266 18.8553 208.029 20.8358 209.189 23.3475C210.396 25.8592 211 28.7091 211 31.8971V53.271H199.77V32.3318C199.77 30.931 199.431 29.6993 198.755 28.6366C198.127 27.5257 197.258 26.6562 196.147 26.0283C195.084 25.3521 193.901 25.0139 192.597 25.0139C191.292 25.0139 190.085 25.3279 188.974 25.9558C187.863 26.5838 186.969 27.4291 186.293 28.4917C185.665 29.5544 185.351 30.762 185.351 32.1144V53.271H174.121Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>
      <form onSubmit={handleFormSubmit} className="bg-slate-300 w-1/3 h-full flex items-center justify-center">
        <div className="flex justify-center flex-col">
          {showUserNotFoundPopup && <UserNotFoundPopup />}
          <h1 className="font-bold text-center p-10 text-5xl">Entrar</h1>
          <div>
            <div className="mb-2 p-6">
              <label htmlFor="username" className="block text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-80 p-2 border border-gray-300 rounded"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Digite aqui seu username"
              />
            </div>
          </div>
          <div className="mb-2 p-6 text-center font-bold">
            {isLoading ? 
            (
              <div className="flex items-center flex-col justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-mainprimary"></div>
                <h6 className="font-bold text-black text-3xl mt-14">
                  Procurando...
                </h6>
              </div>
            ) : (
              <button
                className=" bg-mainprimary w-80 h-12 rounded-xl "
                type="submit"
              >
                <p className="searchButton">Procurar</p>
              </button>
            )}
          </div>
        </div>
      </form>
    </main>
  );
}