import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  testimonials: typeof testimonials;
  className?: string;
}) => (
  <div
    className={twMerge(
      `flex flex-col gap-5 mt-10  [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] `,
      props.className
    )}
  >
    {props.testimonials.map(({ text, imageSrc, name, username }) => (
      <div
        key={text}
        className="rounded-3xl  border-2 border-gray-200 p-12 shadow-md min-w-screen-lg w-full "
      >
        <div className="text-left">{text}</div>
        <div className="flex items-center gap-2 mt-5  ">
          <Image
            src={imageSrc}
            alt={name}
            width={40}
            height={40}
            className="h-12 w-12 rounded-full"
            priority
          />
          <div className="flex flex-col">
            <div className="font-bold tracking-tighter leading-5">{name}</div>
            <div>
              <span className="text-gray-500 leading-5 tracking-tight">
                {username}
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container items-center justify-center flex flex-col">
        <div className="text-sm inline-flex px-3 py-1 tracking-tight border-gray-500 border-dotted border rounded-xl font-bold">
          Version 2.0 is here
        </div>
        <div className=" w-[440px]   text-center mx-auto">
          <h2 className=" max-md:text-left font-bold tracking-tighter lg:text-5xl  text-3xl mt-4 text-center bg-gradient-to-b from-black to-blue-500 bg-clip-text text-transparent">
            What our users say
          </h2>
          <p className="text-center text-gray-500 mt-4 mb-4 tracking-tight leading-7 max-md:text-left">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>

        <div className="flex justify-center w-full gap-6">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:flex"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};
