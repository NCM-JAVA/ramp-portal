import Card from "../../../components/common/Card";

const RegistrationDashboard = () => {

//   const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();


//   useEffect(() => {
//     setPageTitle("Dashboard Overview");
//     setPageSubTitle("Welcome to Industrial Unit Portal");
//     setActionButton(null);
//     setBackButton(null);
//   }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Registration Applications" value="10" subtitle="Submitted" gradient="bg-gradient-to-r from-blue-500 to-blue-700" link="/dic/registration-management/registration-list" />
        <Card title="Approved Registration" value="4" subtitle="Approved" gradient="bg-gradient-to-r from-green-500 to-green-700" link="#" />
        <Card title="Pending Registration" value="2" subtitle="Under Review" gradient="bg-gradient-to-r from-orange-500 to-red-500" link="#" />
        <Card title="Rejected Registration" value="1" subtitle="Queries Raised" gradient="bg-gradient-to-r from-orange-500 to-pink-500" link="#" />
      </div>
    </>
  );
}

export default RegistrationDashboard;