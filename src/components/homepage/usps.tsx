import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Give & Get.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Stay connected.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Keep learning.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.",
    icon: ArrowPathIcon,
  },
  {
    name: "Be yourself.",
    description:
      "Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.",
    icon: FingerPrintIcon,
  },
  {
    name: "Share everything.",
    description:
      "Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Be supportive.",
    description:
      "Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.",
    icon: ServerIcon,
  },
];

export default function Usps() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 my-20">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-base font-semibold leading-7 text-primary-main">
          Everything you need
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Our values
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-9">
            <dt className="inline font-semibold text-black">
              <feature.icon
                className="absolute -left-2 top-1 h-7 w-7 text-primary-main"
                aria-hidden="true"
              />
              {feature.name}
            </dt>{" "}
            <dd className="inline">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
