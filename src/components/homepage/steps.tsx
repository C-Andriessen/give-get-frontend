const steps = [
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

export default function Steps() {
  return (
    <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {steps.map((step, i) => (
          <div key={i}>
            <p className="flex items-center text-sm font-semibold leading-6 text-primary-main relative z-50">
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </svg>
              {step.title}
              <span
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></span>
            </p>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
