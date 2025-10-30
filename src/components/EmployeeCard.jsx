const EmployeeCard = ({ name, rule }) => {
  return (
    <div className="px-10 py-5 bg-primary border-2 border-secondry rounded-sm">
      <img
        src={name + ".jpg"}
        alt=""
        width={270}
        className="rounded-md"
        loading="lazy"
      />
      <h1 className="mt-2 text-center">الاسم: {name}</h1>
      <h1>المسمى الوظيفي: {rule}</h1>
    </div>
  );
};

export default EmployeeCard;
