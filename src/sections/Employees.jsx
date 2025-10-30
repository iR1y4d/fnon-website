import { Element } from "react-scroll";
import EmployeeCard from "../components/EmployeeCard";
import Title from "../components/Title";
import { employees } from "../constant";
const Employees = () => {
  return (
    <Element name="موظفوا الشركة">
      <section className="relative overflow-hidden pb-20 bg-[#2c4a64]">
        {/* <div className="bg-[url(bg-3.jpg)] w-full h-screen bg-center bg-no-repeat absolute left-0 bottom-0 -z-1 bg-size-[1500px] max-lg:bg-size-[1400px]" /> */}

        <div className="container relative">
          <Title
            name="موظفوا الشركة"
            caption="كل موظف هو عبارة عن تعبير خاص للفن"
          />
          <div className="flex justify-center items-center flex-wrap gap-5 ">
            {employees.map((emp) => (
              <EmployeeCard name={emp.name} rule={emp.rule} />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Employees;
