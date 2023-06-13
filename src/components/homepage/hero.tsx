import { Post } from "@/types/post";
import PostCard from "../ui/post-card";

const posts: Post[] = [
  {
    title: "Oproep",
    body: "Web developer nodig die een portfolio website voor mij kan bouwen.",
    author: "John Doe",
    date: "28-03-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Aanbod",
    body: "Web developer nodig die een portfolio website voor mij kan bouwen.",
    author: "John Doe",
    date: "28-03-2023",
  },
];

const timeline = [
  {
    title: "Login",
    description:
      "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
  },
  {
    title: "Write a post",
    description:
      "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
  },
  {
    title: "Post it",
    description:
      "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
  },
  {
    title: "Get a quick reaction",
    description:
      "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
  },
];

export default function Hero(): JSX.Element {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-primary-main ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:gap-x-16 lg:gap-y-6">
            <h1 className="max-w-2xl text-4xl font-bold mb-8 tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              We’re changing the way people connect.
            </h1>
            <div className="mt-6 max-w-none md:max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1 relative">
              <p className="text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt
                sunt. Qui irure qui lorem cupidatat commodo.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-primary-main px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="sm:grid sm:grid-cols-2 lg:block sm:my-10 md:my-0 sm:gap-x-5">
                <PostCard
                  post={posts[0]}
                  classes="lg:!absolute lg:top-[-177px] lg:right-[-450px] my-10 sm:my-0 lg:w-[14rem]"
                />
                <PostCard
                  post={posts[1]}
                  classes="lg:!absolute lg:top-[-220px] lg:right-[-530px] lg:rotate-12 lg:w-[14rem]"
                />
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
