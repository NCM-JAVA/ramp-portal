import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const Notifications = () => {

    const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        setPageTitle("Notifications");
        setPageSubTitle("");
        setBackButton(null);
        setActionButton(null);
    }, []);

    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
                {/* <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Notifications</h3> */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
                    <p>Coming soon....</p>

                </div>
            </div>
        </>
    )

}

export default Notifications;