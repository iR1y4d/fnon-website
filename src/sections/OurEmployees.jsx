import { Element } from "react-scroll";
import Title from "../components/Title";
const OurEmployees = () => {
  return (
    <Element name="موظفوا الشركة">
      <section className="pb-20 ">
        <Title
          name="ادارة الشركة"
          caption="قيادة استراتيجية نحو التميز والابتكار"
        />
        <div className="container">
          <div className="flex items-center justify-center gap-20 max-lg:flex-col max-lg:gap-5">
            <div className="text-2xl ">
              <h1 className="text-4xl max-md:text-3xl">
                المهندس أحمد موسى الثمن
              </h1>
              <h1 className="text-secondry text-[25px] mb-5 ">
                رئيس مجلس إدارة شركة فنون الهندسة والإعمار
              </h1>
              <p className="font-light max-md:text-xl max-md:hidden">
                بخبرة تمتد لأكثر من 15 عامًا في مجال الهندسة والإعمار، قاد
                خلالها العديد من المشاريع الكبرى التي أسهمت في تطوير البنية
                التحتية والمشاريع الاستثمارية داخل ليبيا. بفضل رؤيته
                الاستراتيجية وإدارته الحكيمة، أصبحت الشركة واحدة من أبرز الشركات
                الوطنية في مجالات التصميم، التنفيذ، وإدارة المشاريع، مع التزام
                راسخ بالجودة والابتكار.
              </p>
            </div>
            <div className=" relative z-10 w-600 before:content-[''] before:w-full before:h-full before:bg-secondry before:shadow-2xl before:absolute before:-z-1 before:left-10 before:top-10 max-lg:max-w-120 max-md:max-w-80  ">
              <img
                src="ahmed.avif"
                alt=""
                className=" w-full h-full "
                loading="lazy"
              />
            </div>
            <p className="font-light max-md:text-2xl md:hidden mt-15 max-lg:text-center">
              بخبرة تمتد لأكثر من 15 عامًا في مجال الهندسة والإعمار، قاد خلالها
              العديد من المشاريع الكبرى التي أسهمت في تطوير البنية التحتية
              والمشاريع الاستثمارية داخل ليبيا. بفضل رؤيته الاستراتيجية وإدارته
              الحكيمة، أصبحت الشركة واحدة من أبرز الشركات الوطنية في مجالات
              التصميم، التنفيذ، وإدارة المشاريع، مع التزام راسخ بالجودة
              والابتكار.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default OurEmployees;
