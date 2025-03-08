import { LoginCard } from "./LoginCard";
import FormNavigation from "./FormNavigation"
import RegisterCard from "./RegisterCard";
import useToggle from "../../hooks/useToggle";
export default function LoginRegister() {
    const [logSelect, setLogSelect] = useToggle(true);

    return (
        <div className="w-full h-full flex flex-col justify-start items-center bg-athens-gray-50 select-none ">
            <div className=" w-full h-auto flex justify-around mt-4 items-center  ">
                <h1
                    className={`${logSelect ? "font-bold text-[1.8rem]" : "font-bold text-[1.8rem] "
                        }`}
                >
                    {logSelect ? "Login" : "Register"}
                </h1>
                <FormNavigation onClick={setLogSelect} logSelect={logSelect} />
            </div>
            <div className={`w-full h-full  flex justify-center overflow-hidden overflow-y-auto ${logSelect ? "items-center " : "items-start xl:items-center "}`}>
                {logSelect ? <LoginCard /> : <RegisterCard />}
            </div>
        </div>
    );
}
