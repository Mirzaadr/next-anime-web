"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

let page = 2;

interface LoadMoreProps {
  loader_fn: (page: number) => Promise<JSX.Element[]>
}

const LoadMore: React.FC<LoadMoreProps> = ({
  loader_fn
}) => {
  const { ref, inView } = useInView()
  const [data, setData] = useState<JSX.Element[]>([])

  useEffect(() => {
    if (inView) {
      loader_fn(page)
        .then((res) => {
          setData([...data, ...res])
          page++;
        })
        .catch((err) => {})
    }
  }, [inView, data, loader_fn])

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;