const StatusBadge = ({ status }) => {
  const colors = {
    pending: "bg-orange-100 text-orange-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
    review: "bg-blue-100 text-blue-700",
    under_scrutiny: "bg-yellow-100 text-yellow-700",
    eligible: "bg-green-100 text-green-700",
    not_eligible: "bg-red-100 text-red-700",
    one_time: "bg-purple-100 text-purple-700",
    recurring: "bg-teal-100 text-teal-700"
  };

  const labels = {
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
    review: "Review",
    under_scrutiny: "Under Scrutiny",
    eligible: "Eligible",
    not_eligible: "Not Eligible",
    one_time: "One Time",
    recurring: "Recurring"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[status]}`}>
      {/* {status.charAt(0).toUpperCase() + status.slice(1)} */}
      {labels[status] || status}
    </span>
  );
}

export default StatusBadge;
