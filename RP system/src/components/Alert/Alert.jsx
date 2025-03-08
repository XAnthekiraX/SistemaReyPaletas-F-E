import React from "react";
import { SuccessIcon } from "../../icons/Alert/SuccessIcon";
import { WarningIcon } from "../../icons/Alert/WarningIcon";
import { ErrorIcon } from "../../icons/Alert/ErrorIcon";
import { useAlert } from "../../context/AlertContext";

export default function Alert({ message, type }) {
    const { alert } = useAlert();

    if (!alert.visible) return null;

    const getAlertClass = (type) => {
        switch (type) {
            case "success":
                return {
                    className: "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded",
                    icon: <SuccessIcon className="mr-2" />,
                };
            case "warning":
                return {
                    className: "bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded",
                    icon: <WarningIcon className="mr-2" />,
                };
            case "error":
                return {
                    className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded",
                    icon: <ErrorIcon className="mr-2" />,
                };
            default:
                return {
                    className: "bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded",
                    icon: <></>,
                };
        }
    };

    const { className, icon } = getAlertClass(alert.type);

    return (
        <div className={`${className} h-auto w-auto rounded-lg absolute top-0 animate-[fade-in_0.5s_linear] flex justify-center items-center`}>
            {icon}
            {alert.message}
        </div>
    );
}
